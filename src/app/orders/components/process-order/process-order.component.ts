import { Component, OnInit } from '@angular/core';
import {
    AbstractControl,
    FormArray,
    FormBuilder,
    FormGroup,
    Validators,
} from '@angular/forms';
import { AsyncEmailValidator } from '../../directives/async-email-validation.directive';

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.scss']
})
export class ProcessOrderComponent implements OnInit {
  form: FormGroup;
  emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  namePattern = /^[A-Z].*$/;

  constructor( private fb: FormBuilder) { }

    get firstName(): AbstractControl {
      return this.form.get('firstName');
    }

    get lastName(): AbstractControl {
      return this.form.get('lastName');
    }

    get email(): AbstractControl {
      return this.form.get('email');
    }

    get phones(): FormArray {
      return this.form.get('phones') as FormArray;
    }

    get takeout(): AbstractControl {
      return this.form.get('takeout');
    }

    get address(): AbstractControl {
      return this.form.get('address');
    }

  ngOnInit(): void {
      this.form = this.buildForm();
      this.initValueSubscription();
  }

  buildForm(): FormGroup {
      return this.fb.group({
         firstName: ['', Validators.pattern(this.namePattern)],
         lastName: ['', Validators.pattern(this.namePattern)],
         email: [
             '',
             [
                 Validators.required,
                 Validators.pattern(this.emailPattern)
             ],
         ],
         phones: this.fb.array([
             this.fb.control(''),
         ]),
         takeout: [true],
         address: ['']
      });
  }

  addPhone(): void{
      this.phones.push(
          this.fb.control('')
      );
  }

  removePhone(index: number): void {
      this.phones.removeAt(index);
  }

  onSubmit(): void{
      console.log(this.form.value);
  }

  private initValueSubscription(): void {
      this.takeout.valueChanges.subscribe(
          (value) => {
              if (!value){
                  this.address.setValidators(Validators.required);
              } else {
                  this.address.clearValidators();
                  this.address.setErrors(null);
              }
          }
      );
  }
}
