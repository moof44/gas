import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LayoutModule } from '../shared/layout';
import { Firestore } from '@angular/fire/firestore';
import { Auth, getAuth, signInWithEmailAndPassword, user } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, RouterOutlet, LayoutModule
  ],
  providers: [
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  firestore: Firestore = inject(Firestore);
  title = 'general-accounting-system';
  private auth: Auth = inject(Auth);
  private user$ = user(this.auth)
  //private auth:Auth = getAuth(); 

  ngOnInit(){
    this._signin();
    this._eventListeners();
  }

  // private function
  private _signin(){
    signInWithEmailAndPassword(this.auth, "jireh.padua@gmail.com", "jirehpadua")
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('user', userCredential);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  private _eventListeners(){
    this.user$.subscribe((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log('user', user);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }
}
