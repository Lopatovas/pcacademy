import Loan from "./loan";

export default class FastLoan extends Loan implements ILoan{

    maxAmount:number = 5000;
    maxTime:number = 24;

    constructor(amount:number, time:number, interestRate:number){
        super(amount, time, interestRate);
    }
}