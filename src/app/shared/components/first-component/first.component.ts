import { Component, Inject, OnInit, Optional } from '@angular/core';
import { generatedString } from '../../../core/models/generated-string';
import { ConfigOptionsService } from '../../../core/services/config-options.service';
import { ConstantService } from '../../../core/services/constant.service';
import { ConstantServiceModel } from '../../../core/models/constant-service.model';
import { GeneratorService } from '../../../core/services/generator';
import { GeneratorFactory } from '../../../core/services/generator.factory';
import { LocalStorageService } from '../../../core/services/local-storage.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  providers: [
      ConfigOptionsService,
      { provide: ConstantService, useValue: ConstantService },
      // Тут я так нічого і не зрозумів.
      // Мені вдавалося заінжектити сервіс так щоб його можна було використати,
      // але що саме очікується в завданні я так і не зрозумів.
      { provide: GeneratorService, useFactory: GeneratorFactory, deps: [generatedString] },
      // В завданні написано що створити треба клас а використати useValue, але тоді воно працює не так як треба
      // тому я використав useClass
      { provide: LocalStorageService, useClass: LocalStorageService }
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
      private generatorService: GeneratorService,
      @Optional()
      @Inject(LocalStorageService) private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
      console.log(this.localStorageService.getItem('value'));
  }

}
