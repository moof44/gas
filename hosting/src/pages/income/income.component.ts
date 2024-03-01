import { Component, OnInit } from '@angular/core';
import { IncomeImports } from './income.imports';

@Component({
  selector: 'app-income',
  standalone: true,
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss'],
  imports: [
    IncomeImports.material,
    IncomeImports.angular,
  ],
})
export class IncomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
