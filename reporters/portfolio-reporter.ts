import type {
  FullConfig,
  FullResult,
  Reporter,
  Suite,
  TestCase,
  TestError,
  TestResult,
} from '@playwright/test/reporter';

const runnerUrl = (process.env.PORTFOLIO_RUNNER_URL || '').replace(/\/$/, '');
const telemetryToken = process.env.PORTFOLIO_TELEMETRY_TOKEN || '';
const runId = process.env.PORTFOLIO_RUN_ID || process.env.GITHUB_RUN_ID || '';
const pending = new Set<Promise<void>>();

function projectName(test: TestCase) {
  return test.parent.project()?.name || 'default';
}

function compactError(error?: TestError) {
  if (!error) return '';
  return String(error.message || error.value || '').replace(/\s+/g, ' ').slice(0, 500);
}

async function postTelemetry(payload: Record<string, unknown>) {
  if (!runnerUrl || !telemetryToken || !runId) return;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3000);

  try {
    const response = await fetch(`${runnerUrl}/api/qa/telemetry/${runId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Portfolio-Telemetry-Token': telemetryToken,
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    if (!response.ok) {
      console.warn(`Portfolio telemetry returned HTTP ${response.status}`);
    }
  } catch (error) {
    console.warn(`Portfolio telemetry unavailable: ${error instanceof Error ? error.message : String(error)}`);
  } finally {
    clearTimeout(timeout);
  }
}

function emit(payload: Record<string, unknown>) {
  const event = { ...payload, at: new Date().toISOString() };
  console.log(`PORTFOLIO_EVENT ${JSON.stringify(event)}`);

  const request = postTelemetry(event);
  pending.add(request);
  void request.finally(() => pending.delete(request));
}

class PortfolioReporter implements Reporter {
  onBegin(_config: FullConfig, suite: Suite) {
    emit({
      type: 'suiteBegin',
      total: suite.allTests().length,
    });
  }

  onTestBegin(test: TestCase, result: TestResult) {
    emit({
      type: 'testBegin',
      id: test.id,
      title: test.title,
      project: projectName(test),
      file: test.location.file,
      retry: result.retry,
    });
  }

  onTestEnd(test: TestCase, result: TestResult) {
    emit({
      type: 'testEnd',
      id: test.id,
      title: test.title,
      project: projectName(test),
      file: test.location.file,
      status: result.status,
      duration: result.duration,
      retry: result.retry,
      error: compactError(result.error),
    });
  }

  onError(error: TestError) {
    emit({
      type: 'runnerError',
      error: compactError(error),
    });
  }

  async onEnd(result: FullResult) {
    emit({
      type: 'suiteEnd',
      status: result.status,
      duration: result.duration,
    });

    await Promise.allSettled([...pending]);
  }
}

export default PortfolioReporter;
