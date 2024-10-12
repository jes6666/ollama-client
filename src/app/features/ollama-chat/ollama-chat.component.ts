import { DatePipe } from '@angular/common'
import { HttpClient } from '@angular/common/http'
import { Component, effect, inject, viewChildren } from '@angular/core'
import { OllamaChatService } from '../../services/ollama-chat.service'
import { OllamaRequest } from '../../models/ollama-api.models'

import {
  OllamaChatAnswerComponent,
  OllamaChatFormComponent,
  OllamaChatErrorComponent,
} from './components'

@Component({
  selector: 'app-ollama-chat',
  standalone: true,
  imports: [DatePipe, OllamaChatAnswerComponent, OllamaChatErrorComponent, OllamaChatFormComponent],
  templateUrl: './ollama-chat.component.html',
})
export class OllamaChatComponent {
  httpClient = inject(HttpClient)
  ollamaChat = inject(OllamaChatService)

  listNodes = viewChildren('listItem')

  context = this.ollamaChat.getContext()
  loading = this.ollamaChat.getLoading()
  error = this.ollamaChat.getError()

  constructor() {
    effect(() => {
      this.listNodes()
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      })
    })
  }

  onSend(payload: OllamaRequest) {
    this.ollamaChat.send(payload)
  }
}
