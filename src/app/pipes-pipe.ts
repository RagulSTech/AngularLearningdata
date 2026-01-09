import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipes',
})
export class PipesPipe implements PipeTransform {
  transform(value: string, input: number, methodcalling: string): string | null {
    if (methodcalling == "textmethod") {
      switch (input) {
        case 1:
          return value.toUpperCase();
        case 2:
          return value.toLowerCase();
        case 3:
          return value.length.toString();
        default:
          return null;
      }
    }
    else{
      return null;
    }
  }
}
