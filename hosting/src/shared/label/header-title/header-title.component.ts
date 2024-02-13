import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { pageFeature } from '../../../store/app';

@Component({
  selector: 'header-title',
  templateUrl: './header-title.component.html',
  styleUrls: ['./header-title.component.scss']
})
export class HeaderTitleComponent implements OnInit {
  store = inject(Store);

  // props
  title$:Observable<string> = of('Home');

  constructor() { }

  ngOnInit() {
    this.title$ = this.store.select(pageFeature.selectTitle)
  }

}
