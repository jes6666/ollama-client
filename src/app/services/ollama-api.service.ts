import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { OllamaRequest, OllamaResponse } from '../models/ollama-api.models'
import { environment } from '../../environments/environment'
import { catchError, delay, of, throwError, timeout } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class OllamaApiService {
  httpClient = inject(HttpClient)

  generate(payload: OllamaRequest) {
    if (environment.MOCK_RESPONSE) {
      return this._mock()
    }
    return this.httpClient
      .post<OllamaResponse>(`${environment.API_URL}/api/generate`, payload)
      .pipe(
        timeout(environment.API_TIMEOUT),
        catchError(error => {
          if (error.name === 'TimeoutError') {
            return throwError(() => new Error('Request timed out'))
          }

          return throwError(() => new Error(error.message))
        })
      )
  }

  _mock() {
    return of<OllamaResponse>({
      model: 'text-davinci-003',
      created_at: '2022-01-24T00:00:00Z',
      response: 'Hello, world!',
      done: true,
      context: [0, 1, 2, 3, 4],
      total_duration: 0.0,
      load_duration: 0.0,
      prompt_eval_count: 0,
      prompt_eval_duration: 0.0,
      eval_count: 0,
      eval_duration: 0,
    }).pipe(delay(1000))
  }
}
