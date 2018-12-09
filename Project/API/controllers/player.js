const Player = require('../models/player');
const boom = require('boom');

exports.create = async function (request, response, next){
    try{
        let player = new Player({
            firstName: request.body.firstName,
            lastName: request.body.lastName,
            age: request.body.age,
            nationality: request.body.nationality,
            playerPosition: request.body.playerPosition,
            team: request.body.team,
            jerseyNumber: request.body.jerseyNumber
        });
    
        let result = await player.save();
        response.send(result);

    } catch(error) {
        next(boom.badData(error));
    }
}

exports.get = async function (request, response, next){
    try{
        let result = await Player.find();
        response.send(result);
    }
    catch(error){
        next(boom.internal(error));
    }
}

exports.getById = async function (request, response, next){
    try{
        let player = await Player.findById(request.params.id);
        if(player == null){
            next(boom.notFound());
        }
        else{
            response.send(player);
        }
    }
    catch(error){
        next(boom.internal(error));
    }
}

exports.updateById = async function(request, response, next){
    try{
        let player = await Player.findByIdAndUpdate(request.params.id, request.body);
        if(player == null){
            next(boom.notFound());
        }
        else{
            response.send(player);
        }
    }
    catch(error){
        next(boom.badData(error));
    }
}

exports.delete = async function(request, response, next){
    try{
        let player = await Player.findByIdAndRemove(request.params.id);
        if(player == null){
            next(boom.notFound());
        }
        else{
            response.send(player);
        }
    }
    catch(error){
        next(boom.internal(error));
    }
}