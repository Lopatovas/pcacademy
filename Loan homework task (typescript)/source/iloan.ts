interface ILoan {

    interestRate:number;
    maxAmount:number;
    maxTime:number;
    countInterest();
    countFullPrice();
}