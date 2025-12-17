import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() color:string="";

  constructor(private elementRef:ElementRef) { }

  @HostListener('click')
  apply(){
    this.elementRef.nativeElement.style.backgroundColor = this.color;
  }


    
}
