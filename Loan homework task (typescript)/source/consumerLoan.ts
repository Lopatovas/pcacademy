import Loan from "./loan";
import Constant from "./constant";
let constant:Constant;

export default class ConsumerLoan extends Loan{
    maxAmount: number = 10000;
    maxTime: number = 60;

    constructor(amount:number, time:number, interestRate:number){
        super(amount, time, interestRate);
    }
}