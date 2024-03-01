import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, lastValueFrom, map, switchMap } from "rxjs";
import { incomeActions } from "./income.actions";
import { CollectionReference, Firestore, addDoc, collection, collectionData } from "@angular/fire/firestore";
import { Income } from "../../../shared";
import { Store } from "@ngrx/store";
import { pageActions } from "../../../store/app";

@Injectable()
export class IncomeEffects {
    private firestore = inject(Firestore);
    private incomeCollection: CollectionReference = collection(this.firestore, 'income');
    private incomeList = collection(this.firestore, 'income');
    private store = inject(Store);

    constructor(
        private actions$: Actions,
    ){}

    saveEffects$ = createEffect(() => this.actions$.pipe(
        ofType(incomeActions.save),
        exhaustMap((income)=>{
            let { type, ...incomeWithoutType } = income;
            
            return addDoc(this.incomeCollection, incomeWithoutType)
                .then((docRef) => {
                    console.log('Document written with ID: ', docRef.id, docRef);
                    this.store.dispatch(incomeActions.incomeAddCompleted());
                    incomeWithoutType.id = docRef.id;
                    return incomeActions.saveSuccess(incomeWithoutType as Income);
                })
        })
    ))

    resetEvent$ = createEffect(() => this.actions$.pipe(
        ofType(incomeActions.saveSuccess),
        map(() => {
            return incomeActions.initEvent();
        })
    ))


    fetchListEffects$ = createEffect(() => this.actions$.pipe(
        ofType(incomeActions.fetchList),
        exhaustMap(() => {
            let act:any;
            return collectionData(this.incomeList,{idField: 'id'}).pipe(
                map((v)=>{
                    //console.log('incomeList: ', v);
                    return incomeActions.fetchListSuccess({income: v as any});
                })
            )
        })
    ))
}