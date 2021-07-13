import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProcessOrderComponent } from './components';
import { ReactiveFormsModule } from '@angular/forms';
import { AsyncEmailValidator } from './directives/async-email-validation.directive';



@NgModule({
  declarations: [
      ProcessOrderComponent,
      AsyncEmailValidator
  ],
    imports: [
        SharedModule,
        ReactiveFormsModule
    ]
})
export class OrdersModule { }
