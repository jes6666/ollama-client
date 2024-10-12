import { NgClass } from '@angular/common'
import { Component, input, output, signal } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { OllamaRequest } from '@app/models/ollama-api.models'
import { environment } from '@env/environment'

@Component({
  selector: 'app-ollama-chat-form',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './ollama-chat-form.component.html',
})
export class OllamaChatFormComponent {
  loading = input.required()
  send = output<OllamaRequest>()
  isDragOver = signal<boolean>(false)

  formGroup = new FormGroup({
    prompt: new FormControl<string>('', { validators: Validators.required, nonNullable: true }),
    images: new FormControl<string[]>([], { nonNullable: true }),
  })
  public imagePath = signal<string | null>('')

  onSubmit() {
    const payload: OllamaRequest = {
      model: environment.LLM_NAME,
      prompt: this.formGroup.value.prompt || '',
      images: this.formGroup.value.images,
    }
    this.send.emit(payload)
    this.formGroup.reset()
    this.imagePath.set(null)
  }

  onDragOver(event: DragEvent) {
    event.preventDefault()
    this.isDragOver.set(true)
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault()
    this.isDragOver.set(false)
  }

  onDrop(event: DragEvent) {
    console.log(event)
    event.preventDefault()
    this.isDragOver.set(false)
    if (event.dataTransfer?.files) {
      const files = Array.from(event.dataTransfer.files)
      this.onFileSelected(files)
    }
  }

  onRemoveFile() {
    this.formGroup.controls.images.patchValue([])
    this.imagePath.set(null)
  }

  onFileSelected(files: FileList | File[]): void {
    if (files && files[0]) {
      const file = files[0]
      this.imagePath.set(file.name)
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
