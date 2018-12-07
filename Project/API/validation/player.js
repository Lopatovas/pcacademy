const config = require('./config');

class Validator {

    constructor(player){
        this.player = player;
        this.errorMessage = '';
    }

    checkNumberInput(input){
        if(input == null){
            return true;
        }   
        else if(isNaN(input)){
            this.errorMessage = `${config.ERROR_MESSAGE_INPUT} \n${config.NAN_ERROR}`;
            return false;
        }
        else{
            return true;
        }
    }
    
    checkStringInput(input){
        var regex=/^[a-zA-Z]*\s?[a-zA-Z]*$/;
        if(input == null){
            return true;
        }
        else if (!input.match(regex))
        {
            this.errorMessage = `${config.ERROR_MESSAGE_INPUT} \n${config.STRING_ERROR} ${input}`;
            return false;
        }
        return true;
    }

    testInputFields(){
        if(this.player === null){
            this.errorMessage = 'The player creation failed, please check if all inputs are provided correctly';
            return false;
        }
        else if(!this.checkNumberInput(this.player.age) || !this.checkNumberInput(this.player.jerseyNumber)){
            return false;
        }
        else if(!this.checkStringInput(this.player.firstName) || !this.checkStringInput(this.player.lastName) 
        || !this.checkStringInput(this.player.nationality) || !this.checkStringInput(this.player.playerPosition)
        || !this.checkStringInput(this.player.team)){
            return false;
        }
        else
            return true;
    }
}

module.exports = Validator;
