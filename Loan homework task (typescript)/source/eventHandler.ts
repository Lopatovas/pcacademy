import FastLoan from "./fastLoan";
import ConsumerLoan from "./consumerLoan";
import HousingLoan from "./housingLoan";

window.onload = function() {
    if(location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == "fastLoan.html"){
        let fastLoanSubmit = document.getElementById("fastLoanSubmit");
        fastLoanSubmit.addEventListener("click", createFastLoan);
    }
    else if(location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == "consumerLoan.html"){
        let consumerLoanSubmit = document.getElementById("consumerLoanSubmit");
        consumerLoanSubmit.addEventListener("click", createConsumerLoan);
    }
    else if(location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == "housingLoan.html"){
        let housingLoanSubmit = document.getElementById("housingLoanSubmit");
        housingLoanSubmit.addEventListener("click", createHousingLoan);
    }
}

function createFastLoan():void {
    let loanAmount:number = parseFloat((<HTMLInputElement>document.getElementById("loanAmount")).value);
    let loanTime:number = parseFloat((<HTMLInputElement>document.getElementById("loanTime")).value);
    let fastLoan = new FastLoan(loanAmount, loanTime);
    console.log(fastLoan);
}

function createConsumerLoan(): void {
    let loanAmount:number = parseFloat((<HTMLInputElement>document.getElementById("loanAmount")).value);
    let loanTime:number = parseFloat((<HTMLInputElement>document.getElementById("loanTime")).value);
    let consumerLoan = new ConsumerLoan(loanAmount, loanTime);
    console.log(consumerLoan);
}

function createHousingLoan(): void{
    let loanAmount:number = parseFloat((<HTMLInputElement>document.getElementById("loanAmount")).value);
    let loanTime:number = parseFloat((<HTMLInputElement>document.getElementById("loanTime")).value);
    let housingLoan = new HousingLoan(loanAmount, loanTime);
    console.log(housingLoan);
}