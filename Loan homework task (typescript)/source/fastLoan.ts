import Loan from "./loan";

export default class FastLoan extends Loan implements ILoan{

    interestRate:number = 0.2;
    maxAmount:number = 5000;
    maxTime:number = 24;

    constructor(amount:number, time:number){
        super(amount, time);
    }

    countInterest():number {
        return this.amount * this.interestRate;
    }
    countFullPrice():number {
        return this.amount + this.countInterest();
    }
    
}