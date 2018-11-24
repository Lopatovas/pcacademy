export default abstract class Loan {

    amount:number;
    time:number;
    interestRate:number;

    constructor(amount:number, time:number, interestRate:number){
        this.amount = amount;
        this.time = time;
        this.interestRate = interestRate;
    }

    countInterest():number {
        return this.amount * this.interestRate;
    }
    countFullPrice():number {
        return this.amount + this.countInterest();
    }

    countMonthlyPay():number {
        return parseFloat((this.countFullPrice()/this.time).toFixed(2));
    }

    printInfo():string{
        let text = `Selected amount: ${this.amount} EU <br> Selected time: ${this.time} Months<br> Total sum to return: ${this.countFullPrice()} EU<br> Monthly amount to pay: ${this.countMonthlyPay()} EU`
        return text;
    }

    updateResultText(){
        let resultText = document.getElementById("result");
        resultText.innerHTML = this.printInfo();
    }
}