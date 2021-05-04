import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './components/first-component/first.component';
import { HighlightDirective } from './directives/highlight.directive';



@NgModule({
  declarations: [
    FirstComponent,
    HighlightDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FirstComponent,
    HighlightDirective
  ]
})
export class SharedModule { }
