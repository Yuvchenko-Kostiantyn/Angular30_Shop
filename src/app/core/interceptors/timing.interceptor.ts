import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable()
export class TimingInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const start = new Date().getTime()
        return next.handle(req).pipe(
            tap((res) => {
                // Как-то не очень понятно, что такое 0.
                if(res.type !== 0){
                   const end = new Date().getTime();
                   console.log(`Request took ${end-start} ms`); 
                }
            })
        )
    }
}
