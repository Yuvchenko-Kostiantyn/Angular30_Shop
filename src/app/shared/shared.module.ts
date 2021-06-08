import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FirstComponent } from './components/first-component/first.component';
import { ClickHandlerDirective, HighlightDirective } from './directives';
import { OrderByPipe } from './pipes';




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
