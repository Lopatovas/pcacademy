const Player = require('../models/player');

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

    player.save( () => {
        response.send('Saved! ' + player.firstName);
    });
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
            response.send(`Something went wrong while searching for player: ${request.params.id}`);
        }
        else{
            response.send(player);
        }
    });
}

exports.updateById = function(request, response){
    Player.findByIdAndUpdate(request.params.id, request.body, (error, player) =>{
        if(error){
            response.send(error);
        }
        else{
            response.send(player);
        }
    });
}

exports.delete = function(request, response){
    Player.findByIdAndRemove(request.params.id, (error, player) =>{
        if(error){
            response.send(error);
        }
        else{
            response.send(player);
        }
    });
}