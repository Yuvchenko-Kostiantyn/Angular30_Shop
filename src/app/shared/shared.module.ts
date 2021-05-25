import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './components/first-component/first.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ClickHandlerDirective } from './directives/click-handler.directive';
import { OrderByPipe } from './pipes/order-by.pipe';



@NgModule({
  declarations: [
      FirstComponent,
      HighlightDirective,
      ClickHandlerDirective,
      OrderByPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FirstComponent,
    HighlightDirective,
    ClickHandlerDirective,
    OrderByPipe
  ]
})
export class SharedModule { }
