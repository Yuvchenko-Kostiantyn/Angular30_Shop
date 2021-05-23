import { Component, Inject, OnInit } from '@angular/core';
import { ConfigOptionsService } from '../../../core/services/config-options.service';
import { ConstantService } from '../../../core/services/constant.service';
import { ConstantServiceModel } from '../../../core/models/constant-service.model';

@Component({
  selector: 'app-first-component',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  providers: [
      ConfigOptionsService,
      { provide: ConstantService, useValue: ConstantService }
  ]
})
export class FirstComponent implements OnInit {
  name = 'PropName1';
  description = 'Prop description 1';
  price = 10;
  category = 'Food';
  isAvailable = false;

  categories = ['Food', 'Electronics', 'Consumables'];

  constructor(
      private configService: ConfigOptionsService,
      @Inject(ConstantService) private constantService: ConstantServiceModel,
  ) { }

  ngOnInit(): void {
  }

}
