import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nanoToSeconds',
  standalone: true,
})
export class NanoToSecondsPipe implements PipeTransform {

  transform(value: number): string {
    if (!value) return 'unknown';
    return (value / 1e9).toFixed(2);
  }

}