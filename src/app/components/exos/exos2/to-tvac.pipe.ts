import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toTVAC'
})
export class ToTVACPipe implements PipeTransform {

  transform(value: number, ...args: any[]): any {
    value += (value /100) *21

    return value.toFixed(2);
  }

}
