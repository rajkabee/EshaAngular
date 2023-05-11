import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(private eleref: ElementRef) {
    eleref.nativeElement.style.color="red";
    eleref.nativeElement.style.fontSize="36px";
  }
    @HostListener('mouseenter')onMouseEnter(){
      this.eleref.nativeElement.style.color="blue";
    }
    @HostListener('mouseleave')onMouseLeave(){
      this.eleref.nativeElement.style.color="Orange";
    }
}
