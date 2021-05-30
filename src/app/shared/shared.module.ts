import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
      CommonModule,
      FormsModule,
  ],
  exports: [
      CommonModule,
      FormsModule,
      FirstComponent,
      HighlightDirective,
      ClickHandlerDirective,
      OrderByPipe
  ]
})
export class SharedModule { }
