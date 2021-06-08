import { Component, Inject, OnInit, Optional } from '@angular/core';
import { ConstantServiceModel } from '../../../core/models/constant-service.model';
import {
    ConfigOptionsService,
    ConstantService,
    GeneratorService,
    LocalStorageService,
    GeneratorFactory,
    someConstantForService,
    generatedString,
} from '../../../core/services';


@Component({
  selector: 'app-first-component',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  providers: [
      ConfigOptionsService,
      { provide: ConstantService, useValue: someConstantForService },
      { provide: generatedString, useFactory: GeneratorFactory(10), deps: [GeneratorService] },
      { provide: LocalStorageService, useValue: new LocalStorageService() }
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
      @Inject(generatedString) private genString: string,
      @Optional()
      @Inject(LocalStorageService) private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {}
}
