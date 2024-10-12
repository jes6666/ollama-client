import { Environment } from './env.interface'

export const environment: Environment = {
  production: false,
  API_URL: '*base API url*', // Example: 'http://10.10.10.20:12345'
  API_TIMEOUT: 60000,
  LLM_NAME: '*ollama model name*', // Example: 'text-davinci-003'
  MOCK_RESPONSE: false,
}
