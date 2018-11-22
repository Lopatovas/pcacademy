const os = require('os-utils');
const constantFile = require('./const');

class ComputerInfo{
    printCpuUsage(){
        os.cpuUsage(function(cpuUsage){;
            cpuUsage = parseFloat(cpuUsage * constantFile.CONVERSION_TO_PERCENTAGE).toFixed(constantFile.MAX_NUMBERS_AFTER_POINT);
            console.log(`CPU Usage ${cpuUsage} %`);
        });
    }
    
    printMemUsage(){
        let memFree = os.freememPercentage() * constantFile.CONVERSION_TO_PERCENTAGE;
        let memUsage = parseFloat(constantFile.MAX_USED_MEM_PERCENTAGE - memFree).toFixed(constantFile.MAX_NUMBERS_AFTER_POINT);
        console.log(`Memory Usage: ${memUsage} %`);
    }
}

module.exports = ComputerInfo;