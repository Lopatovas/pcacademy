const ComputerInfo = require('./ComputerInfo');
const constantFile = require('./const');

function printInformation(){
    let computerInfo = new ComputerInfo();

    computerInfo.printCpuUsage();
    computerInfo.printMemUsage();

    setTimeout(printInformation, constantFile.TIME_TO_RECALCULATE_DATA);
}

printInformation();