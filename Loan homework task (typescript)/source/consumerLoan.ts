import Loan from "./loan";

export default class ConsumerLoan extends Loan implements ILoan{
    interestRate: number;
    maxAmount: number = 10000;
    maxTime: number = 60;

    constructor(amount:number, time:number){
        super(amount, time);
    }

    countInterest(){
        
    }

    countFullPrice(){

    }
}