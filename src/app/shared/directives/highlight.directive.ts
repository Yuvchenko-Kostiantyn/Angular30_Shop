import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor() {}

  //I have tried a number of variants but in the end nothing seems to work, as if directive just doesn't do anything at all
  @HostListener('mouseover') onMouseOver(){
    console.log('over');
  }

  @HostListener('mouseout') onMouseOut(){
    console.log('out');
  }
}
