export interface PageApp extends InitialPageState{

}

export interface InitialPageState{
    url: string,
    page: PageNames,
    title: string,
    mode: PageMode,
    //event: PageEvents,
}

export enum PageMode{
    none = 'None',
    addIncome = 'Add Income',
    editIncome = 'Edit Income',
}

export enum PageNames{
    income = 'income',
}

// export enum PageEvents {
//     none = 'None',
//     incomeAddCompleted = 'Income Add Completed',
//     incomeUpdateCompleted = 'Income Update Completed',
// }