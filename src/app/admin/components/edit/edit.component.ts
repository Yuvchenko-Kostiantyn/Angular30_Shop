import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { ProductModel } from '../../../shared/models/product.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
   product: ProductModel;

  private key = 'product';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.route.data.pipe(tap(val => console.log(val))).subscribe(
          data => this.product = data[this.key]
      );
  }

}
