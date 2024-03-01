import { Component, OnInit, inject } from '@angular/core';
import { IncomeService } from '../service/income.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-income',
  templateUrl: './list-income.component.html',
  styleUrls: ['./list-income.component.scss']
})
export class ListIncomeComponent implements OnInit {
  // private
  private _income = inject(IncomeService);
  private _router = inject(Router);

  // public
  dataSource = this._income.list$;
  displayedColumns: string[] = ['source', 'amount', 'date'];

  constructor() { }

  ngOnInit() {
    this._income.initIncomeList();

    this._income.list$.subscribe((list)=>{
      console.log('list 2: ', list);
    })
  }

  onAdd(){
    this._router.navigate(['/income/add-edit-income']);
  }

}
