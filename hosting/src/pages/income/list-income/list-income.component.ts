import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { incomeActions } from '../store/income.actions';
import { incomeFeature } from '../store/income.selector';

@Component({
  selector: 'app-list-income',
  templateUrl: './list-income.component.html',
  styleUrls: ['./list-income.component.scss']
})
export class ListIncomeComponent implements OnInit {
  private _store = inject(Store);

  constructor() { }

  ngOnInit() {
    this._store.dispatch(incomeActions.fetchList());
    this._store.select(incomeFeature.selectIncomeState).subscribe((v)=>{
      console.log('incomeFeature: ', v);
    })
  }

}
