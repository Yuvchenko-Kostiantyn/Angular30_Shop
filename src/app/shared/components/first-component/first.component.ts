import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  public name = 'PropName1';
  public description = 'Prop descritpion 1';
  public price = 10;
  public category = 'Food';
  public isAvailable = false;

  categories = ['Food', 'Electronics', 'Consumables'];

  constructor() { }

  ngOnInit(): void {
  }

}
