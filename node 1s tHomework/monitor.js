const ComputerInfo = require('./source/ComputerInfo');
const constantFile = require('./source/const');

let computerInfo = new ComputerInfo();

function printPCInformation(){
    computerInfo.printMemUsage();
    computerInfo.printCpuUsage();

    setTimeout(printPCInformation, constantFile.TIME_TO_RECALCULATE_DATA);
}

function printUserInformation(){
    console.log(`Resource monitoring started. Press ${constantFile.EXIT_KEY} to exit.`);
    console.log();
}

printUserInformation();
printPCInformation();