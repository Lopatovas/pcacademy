export default abstract class Loan {

    amount:number;
    time:number;

    constructor(amount:number, time:number){
        this.amount = amount;
        this.time = time;
    }
}