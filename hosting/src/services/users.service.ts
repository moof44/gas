import { Injectable, inject } from '@angular/core';
import { Auth, User, signInWithEmailAndPassword, user } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private auth: Auth = inject(Auth);
  private user$ = user(this.auth)

  constructor() { }

}
