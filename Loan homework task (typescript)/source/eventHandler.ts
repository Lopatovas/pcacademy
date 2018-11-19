import FastLoan from "./fastLoan";
import ConsumerLoan from "./consumerLoan";
import HousingLoan from "./housingLoan";
import Loan from "./loan";

let fastLoan:FastLoan;
let housingLoan:HousingLoan;
let consumerLoan:ConsumerLoan;
let loanAmount:number;
let loanTime:number;
let amountOfChildrenInput:HTMLInputElement;
let monthlySalaryInput:HTMLInputElement;
let LoanSubmitButton:HTMLElement;
let amountSlider:HTMLInputElement;
let amountInput:HTMLInputElement;
let timeSlider:HTMLInputElement;
let timeInput:HTMLInputElement;
let resultText:HTMLElement;
let isHouseForm:boolean = false;

window.onload = function() {
    if(location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == "fastLoan.html"){
        isHouseForm = false;
        LoanSubmitButton = document.getElementById("fastLoanSubmit");
        LoanSubmitButton.addEventListener("click", createFastLoan);
        findInputElements();
        attachEventsToInputs();
    }
    else if(location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == "consumerLoan.html"){
        isHouseForm = false;
        LoanSubmitButton = document.getElementById("consumerLoanSubmit");
        LoanSubmitButton.addEventListener("click", createConsumerLoan);
        findInputElements();
        attachEventsToInputs();
    }
    else if(location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == "housingLoan.html"){
        isHouseForm = true;
        monthlySalaryInput = (<HTMLInputElement>document.getElementById("monthlySalary"));
        amountOfChildrenInput = (<HTMLInputElement>document.getElementById("amountOfChildren"));
        LoanSubmitButton = document.getElementById("housingLoanSubmit");
        LoanSubmitButton.addEventListener("click", createHousingLoan);
        monthlySalaryInput.addEventListener("input", housingMaxAmount);
        findInputElements();
        attachEventsToInputs();
    }
}

function findInputElements(){
    amountSlider = (<HTMLInputElement>document.getElementById("loanAmount"));
    amountInput = (<HTMLInputElement>document.getElementById("loanAmountInput"));
    timeSlider = (<HTMLInputElement>document.getElementById("loanTime"))
    timeInput = (<HTMLInputElement>document.getElementById("loanTimeInput"));
}

function attachEventsToInputs(){
    amountSlider.addEventListener("input", changeAmountInput);
    amountInput.addEventListener("input", changeAmountSlider);
    timeSlider.addEventListener("input", changeTimeInput);
    timeInput.addEventListener("input", changeTimeSlider);
}

function createFastLoan():void {
    loanAmount = parseFloat(amountSlider.value);
    loanTime = parseFloat(timeSlider.value);
    fastLoan = new FastLoan(loanAmount, loanTime, 0.2);
    updateResultText(fastLoan);
}

function createConsumerLoan(): void {
    loanAmount = parseFloat(amountSlider.value);
    loanTime = parseFloat(timeSlider.value);
    let dropdownItemList = (<HTMLSelectElement>document.getElementById("itemSelectDropdown"));
    var selectedItem = parseFloat(dropdownItemList.options[dropdownItemList.selectedIndex].value);
    consumerLoan = new ConsumerLoan(loanAmount, loanTime, selectedItem);
    updateResultText(consumerLoan);
}

function createHousingLoan(): void{
    loanAmount = parseFloat(amountSlider.value);
    loanTime = parseFloat(timeSlider.value);
    housingLoan = new HousingLoan(loanAmount, loanTime, 0.02, parseInt(amountOfChildrenInput.value), parseFloat(monthlySalaryInput.value));
    updateResultText(housingLoan);
}

function changeAmountInput(){
    amountInput.value = amountSlider.value;
}

function changeAmountSlider(){
    if(amountInput.value === "" || amountInput.value < amountSlider.min){
        amountInput.value = amountSlider.min;
    }
    if(parseFloat(amountInput.value) > parseFloat(amountSlider.max)){
        amountInput.value = amountSlider.max;
    }
    amountSlider.value = amountInput.value;
}

function changeTimeInput(){
    timeInput.value = timeSlider.value;
    if(isHouseForm){
        housingMaxAmount();
    }
}

function changeTimeSlider(){
    if(timeInput.value === "" || timeInput.value < timeSlider.min){
        timeInput.value = timeSlider.min;
    }
    if(parseFloat(timeInput.value) > parseFloat(timeSlider.max)){
        timeInput.value = timeSlider.max;
    }
    timeSlider.value = timeInput.value;
    if(isHouseForm){
        housingMaxAmount();
    }
}

function updateResultText(loan:Loan){
    resultText = document.getElementById("result");
    resultText.innerHTML = loan.printInfo();
}

function housingMaxAmount(){
    amountSlider.max = "" + (parseFloat(monthlySalaryInput.value) / 2 * parseInt(timeSlider.value));
    if(amountInput.value === "" || amountInput.value < amountSlider.min){
        amountInput.value = amountSlider.min;
    }
    if(parseFloat(amountInput.value) > parseFloat(amountSlider.max)){
        amountInput.value = amountSlider.max;
    }
    amountSlider.value = amountInput.value;
}
