import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysPassed'
})
export class DaysPassedPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
