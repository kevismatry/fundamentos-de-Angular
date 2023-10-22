import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  // eslint-disable-next-line @typescript-eslint/ban-types
  transform(value: String): string {
    return value.split('').reverse().join('');
  }

}
