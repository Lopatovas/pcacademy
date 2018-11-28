const os = require('os-utils');
const constantFile = require('./Config');

class ComputerInfo{

    printMemUsage(){
        let memFree = os.freememPercentage() * constantFile.CONVERSION_TO_PERCENTAGE;
        let memUsage = parseFloat(constantFile.MAX_USED_MEM_PERCENTAGE - memFree).toFixed(constantFile.MAX_NUMBERS_AFTER_POINT);
        setTimeout(function(){process.stdout.write(`\rMemory Usage: ${memUsage} %       `)}, constantFile.TIME_TO_WAIT_FOR_CPU);
    }

    printCpuUsage(){
        os.cpuUsage(function(cpuUsage){;
            cpuUsage = parseFloat(cpuUsage * constantFile.CONVERSION_TO_PERCENTAGE).toFixed(constantFile.MAX_NUMBERS_AFTER_POINT);
            process.stdout.write(`CPU Usage ${cpuUsage} %`);
        });
    }

    printUserInformation(){
        console.log(`Resource monitoring started. Press ${constantFile.EXIT_KEY} to exit.`);
        console.log();
    }

    printPcInformation(){
        this.printMemUsage();
        this.printCpuUsage();
        setTimeout(this.printPcInformation.bind(this), constantFile.TIME_TO_RECALCULATE_DATA);
    }

    monitor(){
        this.printUserInformation();
        this.printPcInformation();   
    }
}

module.exports = ComputerInfo;