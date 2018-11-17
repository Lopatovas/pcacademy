class HousingLoan extends Loan implements ILoan{
    interestRate: number;
    maxAmount: number;
    maxTime: number;
    
    constructor(amount:number, time:number){
        super(amount, time);
    }
    
    countInterest(){
        
    }

    countFullPrice(){

    }
}