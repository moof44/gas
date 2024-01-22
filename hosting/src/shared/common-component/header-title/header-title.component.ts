import { Component, Input, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { pageSelectors } from '../../../store/app/page/page.selector';
import { pageFeature } from '../../../store/app';
import { Observable, of } from 'rxjs';

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
