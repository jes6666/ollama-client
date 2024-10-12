import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nanoToSeconds',
  standalone: true,
})
export class NanoToSecondsPipe implements PipeTransform {

  transform(value: number): number {
    if (!value) return 0;
    return value / 1000000000;
  }

}