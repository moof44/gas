import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Auth, user } from '@angular/fire/auth';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { IncomeModule } from '../pages';
import { LayoutModule } from '../shared';
import { authActions } from '../store/app';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    LayoutModule,
    RouterOutlet,
    IncomeModule,
  ],
  providers: [
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'general-accounting-system';
  private auth: Auth = inject(Auth);
  private user$ = user(this.auth)
  private store = inject(Store);
  //private auth:Auth = getAuth(); 

  ngOnInit(){
    this._signin();
    this._eventListeners();
  }

  // private function
  private _signin(){
    this.store.dispatch(authActions.login(
      {email: 'jireh.padua@gmail.com', password:'jirehpadua'}
    ))
  }

  private _eventListeners(){
    this.user$.subscribe((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log('user', user);
      } else {
        // User is signed out
        // ...
      }
    });
  }
}
