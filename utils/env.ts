import 'dotenv/config';

function getEnv(name: string): string {
    const value = process.env[name];

    if (!value) {
        throw new Error(`Missing required environment variable: ${name}`);
    }

    return value;
}

export const env = {
    baseURL: getEnv('BASE_URL'),
    username: getEnv('SAUCE_USERNAME'),
    password: getEnv('SAUCE_PASSWORD'),
};