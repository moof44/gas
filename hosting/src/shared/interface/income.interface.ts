import { EntityState } from "@ngrx/entity";

export interface Income {
    id: string,
    source: string,
    amount: number,
    date: string | Date,
    userId: string,
    user: string,
}

export interface IncomeState extends EntityState<Income>{
    event: IncomeEvents,
}

export enum IncomeEvents {
    none = 'None',
    addCompleted = 'Income Add Completed',
    updateCompleted = 'Income Update Completed',
    deleteCompleted = 'Income Delete Completed',
}