import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { pageActions } from '../../../store/app/page';
import { incomeActions } from '../../../store/app';

@Component({
  selector: 'app-add-edit-income',
  templateUrl: './add-edit-income.component.html',
  styleUrls: ['./add-edit-income.component.scss'],
})
export class AddEditIncomeComponent implements OnInit {
  // public
  fg = new FormGroup({
    //id: new FormControl('', {nonNullable: true}),
    source: new FormControl('', {nonNullable: true}),
    amount: new FormControl(0, {nonNullable: true}),
    date: new FormControl(new Date(), {nonNullable: true}),
    userId: new FormControl('', {nonNullable: true}),
    user: new FormControl('', {nonNullable: true})
  })

  // private
  private _store = inject(Store);


  constructor() { }

  // lifecycle
  ngOnInit() {
    this._store.dispatch(pageActions.setInitialPageState({
      url: '/income/add-edit-income',
      page: 'income',
      title: 'Add/Edit Income'
    }))
  }

  // public method
  onSubmit() {
    const income = this.fg.value;
    this._store.dispatch(incomeActions.save( income ));
  }



}
