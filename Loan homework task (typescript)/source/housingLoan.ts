import Loan from "./loan";
import Constant from "./constant";
let constant:Constant;

export default class HousingLoan extends Loan{
    maxAmount: number;
    maxTime: number = 360;
    numberOfChildren:number;
    monthlySalary:number;
    
    constructor(amount:number, time:number, numberOfChildren:number, monthlySalary:number){
        super(amount, time, constant.HOUSING_LOAN_INTEREST_RATE);
        this.numberOfChildren = numberOfChildren;
        this.monthlySalary = monthlySalary;
    }
}