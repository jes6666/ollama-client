import { HttpClient } from '@angular/common/http'
import { inject, Injectable, signal } from '@angular/core'
import { OllamaRequest, OllamaResponse } from '../models/ollama-api.models'
import { OllamaApiService } from './ollama-api.service'

@Injectable({
  providedIn: 'root',
})
export class OllamaChatService {
  private _ollamaApi = inject(OllamaApiService)

  private _context = signal<OllamaResponse[]>([])
  private _loading = signal(false)
  private _error = signal<string | null>(null)

  getContext() {
    return this._context
  }

  getLoading() {
    return this._loading
  }

  getError() {
    return this._error
  }

  send(payload: OllamaRequest) {
    this._error.set(null)
    this._loading.set(true)

    this.addAnswer(payload)

    this._ollamaApi.generate(payload).subscribe({
      next: response => {
        console.log(response)
        this._context.update(context => [...context, response])
        this._loading.set(false)
      },
      error: error => {
        console.error(error)
        this._error.set(error.message)
        this._loading.set(false)
      },
    })
  }

  private addAnswer(payload: OllamaRequest) {
    this._context.update(context => [...context, {
      model: '',
      created_at: '',
      response: payload.prompt,
      done: false,
      context: [],
      total_duration: 0,
      load_duration: 0,
      prompt_eval_count: 0,
      prompt_eval_duration: 0,
      eval_count: 0,
      eval_duration: 0,
    }])
  }
}
