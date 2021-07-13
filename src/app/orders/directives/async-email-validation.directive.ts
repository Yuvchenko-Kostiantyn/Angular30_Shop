import { Directive } from '@angular/core';
import { NG_ASYNC_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, first} from 'rxjs/operators';

@Directive({
    selector: '[appAsyncEmailValidator][formControlName], [appAsyncEmailValidator][ngModel]',
    providers: [
        {
            provide: NG_ASYNC_VALIDATORS,
            useExisting: AsyncEmailValidator,
            multi: true
        }
    ]
})

export class AsyncEmailValidator implements Validator {
    validate(c: AbstractControl): Promise<{ [key: string]: any}>|Observable < {[key: string]: any}> {
        return this.validateEmail(c.value)
         .pipe(
           debounceTime(1000),
           distinctUntilChanged(),
           first()
         );
    }



    private validateEmail(email: string): Observable<any> {
        return new Observable(observer => {
            if (email === 'existsemail@example.com') {
                observer.next({asyncEmailInvalid: true});
            } else {
                observer.next(null);
            }
        });
    }

    asyncEmailPromiseValidator(c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        const email = c.value;
        return new Promise(resolve => {
            setTimeout(() => {
                if (email === 'existsemail@example.com') {
                    resolve({
                        asyncEmailInvalid: true
                    });
                } else {
                    resolve(null);
                }
            }, 2000);
        });
    }

}
