import { FastLoan } from "../source/fastLoan";

function createLoan () {
    let amount = document.getElementById("loanAmount");
    let time = document.getElementById("loanTime");
    let fastLoan = new FastLoan(5, 10);
    console.log(fastLoan.countInterest());
}