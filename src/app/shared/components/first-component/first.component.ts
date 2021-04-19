import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  name = 'PropName1';
  description = 'Prop descritpion 1';
  price = 10;
  category = 'Food';
  isAvailable = false;

  categories = ['Food', 'Electronics', 'Consumables'];

  constructor() { }

  ngOnInit(): void {
  }

}
