import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './components/first-component/first.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ClickHandlerDirective } from './directives/click-handler.directive';



@NgModule({
  declarations: [
    FirstComponent,
    HighlightDirective,
    ClickHandlerDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FirstComponent,
    HighlightDirective,
    ClickHandlerDirective,
  ]
})
export class SharedModule { }
