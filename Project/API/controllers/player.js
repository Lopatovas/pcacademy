const Player = require('../models/player');
const Validator = require('../validation/player');
const config = require('../validation/config');

exports.create = function (request, response){
    let player = new Player({
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        age: request.body.age,
        nationality: request.body.nationality,
        playerPosition: request.body.playerPosition,
        team: request.body.team,
        jerseyNumber: request.body.jerseyNumber
    });

    let validator = new Validator(player);
    if(validator.testInputFields()){
        player.save( () => {
            response.send(`${request.body.firstName} ${request.body.lastName} has been saved succesfully!`);
        });
    }
    else{
        response.send(validator.errorMessage);
    }
}

exports.get = function (request, response){
    Player.find((error, players) => {
        if(error){
            response.send(error);
        }
        else{
            response.send(players);
        }
    });
}

exports.getById = function (request, response){
    Player.findById(request.params.id, (error, player) => {
        if(error || player == null){
            response.send(`${config.INVALID_KEY_ERROR} ${request.params.id}`);
        }
        else{
            response.send(player);
        }
    });
}

exports.updateById = function(request, response){
    Player.findByIdAndUpdate(request.params.id, request.body, (error, player) =>{
        if(error){
            response.send(`Update ${config.INVALID_OPERATION_ERROR}`)
        }
        else{
            response.send(`Update ${config.OPERATION_SUCCESSFULL} ${request.params.id}`);
        }
    });
}

exports.delete = function(request, response){
    Player.findByIdAndRemove(request.params.id, (error, player) =>{
        if(error){
            response.send(`${config.INVALID_KEY_ERROR} ${request.params.id}`)
        }
        else{
            response.send(`Delete ${config.OPERATION_SUCCESSFULL} ${request.params.id}`);
        }
    });
}