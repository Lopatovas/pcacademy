import Loan from "./loan";

export default class HousingLoan extends Loan{
    maxAmount: number;
    maxTime: number = 360;
    numberOfChildren:number;
    monthlySalary:number;
    
    constructor(amount:number, time:number, interestRate:number, numberOfChildren:number, monthlySalary:number){
        super(amount, time, interestRate);
        this.numberOfChildren = numberOfChildren;
        this.monthlySalary = monthlySalary;
    }
}