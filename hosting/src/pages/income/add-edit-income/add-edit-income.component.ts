import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IncomeService } from '../service/income.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-edit-income',
  templateUrl: './add-edit-income.component.html',
  styleUrls: ['./add-edit-income.component.scss'],
})
export class AddEditIncomeComponent implements OnInit, OnDestroy {
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
  private _router = inject(Router);
  private _income = inject(IncomeService);
  private _subs = new Subscription();

  constructor() { }


  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }

  // lifecycle
  ngOnInit() {
    this._income.initAddEditIncome();
    this._eventListener();
  }

  // public method
  onSubmit() {
    const income = {...this.fg.value, ...{date:this.fg.value.date?.toDateString()}};

    this._income.addIncome(income);
  }
  onCancel() {
    this._router.navigate(['/income/list']);
  }

  // private method
  private _eventListener(){
    this._subs.add(
      this._income.event$.subscribe((event)=>{
        if(
          event === 'Income Add Completed' 
          || event === 'Income Update Completed'
        ){
          this._router.navigate(['/income/list']);
        }
      })
    )
  }

}
