import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { authActions } from "./auth.actions";
import { exhaustMap } from "rxjs";
import { UsersService } from "../../../services";
import { Auth, signInWithEmailAndPassword, user } from "@angular/fire/auth";

@Injectable()
export class AuthEffects {
    private auth: Auth = inject(Auth);
    private user$ = user(this.auth)

    constructor(
        private actions$: Actions,
        private users: UsersService
    ){}

    loginEffects$ = createEffect(() => this.actions$.pipe(
        ofType(authActions.login),
        exhaustMap((login)=>{
            console.log('test', login)
            return signInWithEmailAndPassword(this.auth, login.email, login.password)
            .then((credential) => {
                console.log('user', credential.user);
                const {uid, displayName, isAnonymous} = credential.user;
                return authActions.loginSuccess({uid, displayName, isAnonymous});
            }).catch((error) => {
                return authActions.loginFailure({error: error.message});
            })
        })
    ))
}