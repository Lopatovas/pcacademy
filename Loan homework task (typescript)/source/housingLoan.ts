import Loan from "./loan";

export default class HousingLoan extends Loan implements ILoan{
    interestRate: number = 0.02;
    maxAmount: number;
    maxTime: number = 360;
    
    constructor(amount:number, time:number){
        super(amount, time);
    }
    
    countInterest(){
        
    }

    countFullPrice(){

    }
}