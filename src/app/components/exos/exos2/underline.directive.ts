import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[Underline]'
})
export class UnderlineDirective {

  constructor(private el:ElementRef){ }

  @HostListener("mouseover")
  onMouseOver(){
    this.el.nativeElement.style.textDecoration="underline"
  }

  @HostListener("mouseleave")
  onMouseLeave(){
    this.el.nativeElement.style.textDecoration="none"
  }

}

//click
