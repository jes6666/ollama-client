import { Environment } from "./env.interface";

export const environment: Environment = {
  production: false,
  API_URL: 'http://10.1.2.109:11434',
  API_TIMEOUT: 1000,
  LLM_NAME: 'text-davinci-003',
  MOCK_RESPONSE: true,
};