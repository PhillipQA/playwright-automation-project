# Playwright v0.4.1 — True real-time portfolio telemetry

Apply to the root of `playwright-automation-project`.

## Added/changed
- playwright.config.ts
- .github/workflows/portfolio-demo.yml
- reporters/portfolio-reporter.ts

## GitHub Actions configuration
Repository variable:
PORTFOLIO_RUNNER_URL=<your Render runner URL>

Repository secret:
PORTFOLIO_TELEMETRY_TOKEN=<same random value as Render TELEMETRY_TOKEN>

Existing secrets remain:
SAUCE_USERNAME
SAUCE_PASSWORD

## How it works
The custom Playwright reporter still writes PORTFOLIO_EVENT lines to the GitHub Actions log,
but it also POSTs each suite/test start/end event directly to the Render runner. The portfolio
receives those events through SSE, so counters and console output update immediately while the
suite is running.
