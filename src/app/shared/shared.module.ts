import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    FirstComponent,
    PageForbiddenComponent,
    PageNotFoundComponent,
} from './components';
import { ClickHandlerDirective, HighlightDirective } from './directives';
import { OrderByPipe } from './pipes';

const components = [ FirstComponent, PageNotFoundComponent, PageForbiddenComponent ];
const directives = [ HighlightDirective, ClickHandlerDirective ];
const pipes = [ OrderByPipe ];

@NgModule({
  declarations: [
      ...components,
      ...directives,
      ...pipes,
  ],
  imports: [
      CommonModule,
      FormsModule,
  ],
  exports: [
      CommonModule,
      FormsModule,
      ...components,
      ...directives,
      ...pipes,
  ]
})
export class SharedModule { }
