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
        response.send('Saved!');
    });
}