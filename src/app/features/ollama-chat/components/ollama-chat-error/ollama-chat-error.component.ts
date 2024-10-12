import { DatePipe, JsonPipe } from '@angular/common'
import { Component, input } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-ollama-chat-error',
  standalone: true,
  imports: [JsonPipe, ReactiveFormsModule, DatePipe],
  templateUrl: './ollama-chat-error.component.html',
})
export class OllamaChatErrorComponent {
  error = input()
}
