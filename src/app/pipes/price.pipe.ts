import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
  standalone: true
})
export class PricePipe implements PipeTransform {

  transform(_value: unknown, ...args: unknown[]): unknown {
    return '${value}$';
  }

}
