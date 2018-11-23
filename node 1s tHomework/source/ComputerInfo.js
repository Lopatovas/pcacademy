const os = require('os-utils');
const constantFile = require('./const');

class ComputerInfo{

    printMemUsage(){
        let memFree = os.freememPercentage() * constantFile.CONVERSION_TO_PERCENTAGE;
        let memUsage = parseFloat(constantFile.MAX_USED_MEM_PERCENTAGE - memFree).toFixed(constantFile.MAX_NUMBERS_AFTER_POINT);
        setTimeout(function(){console.log(`Memory Usage: ${memUsage} %`)}, constantFile.TIME_TO_WAIT_FOR_CPU);
    }

    printCpuUsage(){
        os.cpuUsage(function(cpuUsage){;
            cpuUsage = parseFloat(cpuUsage * constantFile.CONVERSION_TO_PERCENTAGE).toFixed(constantFile.MAX_NUMBERS_AFTER_POINT);
            console.log(`CPU Usage ${cpuUsage} %`);
            console.log();
        });
    }
}

module.exports = ComputerInfo;