import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClickHandler]'
})
export class ClickHandlerDirective {
  @Input() color: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

    @HostListener('click') onClick(): void {
      const element = this.renderer.parentNode(this.el.nativeElement);
      if (element.style.border === '') {
          element.style.border = '1px solid black';
      } else {
          element.style.border = '';
      }
    }

}
