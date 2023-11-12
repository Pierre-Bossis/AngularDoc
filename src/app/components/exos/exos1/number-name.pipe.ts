import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberName'
})
export class NumberNamePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(value == 1) value = "Un"
    else if(value == 2) value = "Deux"
    else if(value == 3) value = "Trois"
    else if(value == 4) value = "Quatre"
    else if(value == 5) value = "Cinq"
    
    return value;
  }

}
