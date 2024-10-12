import { Component, input, output } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { OllamaRequest } from '@app/models/ollama-api.models'
import { environment } from '@env/environment'

@Component({
  selector: 'app-ollama-chat-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ollama-chat-form.component.html',
})
export class OllamaChatFormComponent {
  loading = input.required()
  send = output<OllamaRequest>()

  formGroup = new FormGroup({
    prompt: new FormControl<string>('', { nonNullable: true }),
    images: new FormControl<string[]>([], { nonNullable: true }),
  })

  onSubmit() {
    const payload: OllamaRequest = {
      model: environment.LLM_NAME,
      prompt: this.formGroup.value.prompt || '',
      images: this.formGroup.value.images,
    }
    this.send.emit(payload)
    this.formGroup.reset()
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement
    if (input.files && input.files[0]) {
      const file = input.files[0]
      const reader = new FileReader()

      reader.onload = () => {
        const base64String = reader.result as string
        const base64 = base64String.split(',')[1]
        this.formGroup.controls.images.patchValue([base64])
      }

      reader.readAsDataURL(file) // Convert image to base64
    }
  }
}
