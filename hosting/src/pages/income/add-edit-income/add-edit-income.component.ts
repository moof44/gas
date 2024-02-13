import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { pageActions } from '../../../store/app/page';

@Component({
  selector: 'app-add-edit-income',
  templateUrl: './add-edit-income.component.html',
  styleUrls: ['./add-edit-income.component.scss'],
})
export class AddEditIncomeComponent implements OnInit {
  private store = inject(Store);


  constructor() { }

  ngOnInit() {
    this.store.dispatch(pageActions.setInitialPageState({
      url: '/income/add-edit-income',
      page: 'income',
      title: 'Add/Edit Income'
    }))
  }

}
