import { Pipe, PipeTransform } from '@angular/core';
import { formatDistance } from 'date-fns';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  // eslint-disable-next-line @typescript-eslint/ban-types
  transform(value: Date): String {
    return formatDistance(new Date(), value );
  }

}
