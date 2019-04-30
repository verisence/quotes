import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) {}
  private highText(action:string){
    this.elem.nativeElement.style.background='string';
  }

}
