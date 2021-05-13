import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {}

  @HostListener('mouseover') onMouseOver(): void {
    this.el.nativeElement.classList.add('bg-light');
  }

  @HostListener('mouseout') onMouseOut(): void {
    this.el.nativeElement.classList.remove('bg-light');
  }
}
