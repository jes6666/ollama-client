import { Component } from '@angular/core'
import { OllamaChatComponent } from './features/ollama-chat/ollama-chat.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [OllamaChatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

}
