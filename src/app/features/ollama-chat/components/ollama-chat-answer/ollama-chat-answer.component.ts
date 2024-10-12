import { DatePipe } from '@angular/common'
import { Component, input, Input } from '@angular/core'
import { OllamaResponse } from '@app/models/ollama-api.models'
import { NanoToSecondsPipe } from '@app/pipes/nano-to-seconds.pipe'

@Component({
  selector: 'app-ollama-chat-answer',
  standalone: true,
  imports: [DatePipe, NanoToSecondsPipe],
  templateUrl: './ollama-chat-answer.component.html',
})
export class OllamaChatAnswerComponent {
  @Input() answer: OllamaResponse
}
