const Team = require('../models/team');
const boom = require('boom');

exports.create = async function (request, response, next){
    try{
        let team = new Team({
            teamName: request.body.teamName,
            homeTown: request.body.homeTown,
            stadium: request.body.stadium,
            coach: request.body.coach
        });
    
        let result = await team.save();
        response.send(result);

    } catch(error) {
        next(boom.badData(error));
    }
}

exports.get = async function (request, response, next){
    try{
        let result = await Team.find();
        response.send(result);
    }
    catch(error){
        next(boom.internal(error));
    }
}

exports.getById = async function (request, response, next){
    try{
        let team = await Team.findById(request.params.id);
        if(team == null){
            next(boom.notFound());
        }
        else{
            response.send(team);
        }
    }
    catch(error){
        next(boom.internal(error));
    }
}

exports.updateById = async function(request, response, next){
    try{
        let team = await Team.findByIdAndUpdate(request.params.id, request.body);
        if(team == null){
            next(boom.notFound());
        }
        else{
            response.send(team);
        }
    }
    catch(error){
        next(boom.badData(error));
    }
}

exports.delete = async function(request, response, next){
    try{
        let team = await Team.findByIdAndRemove(request.params.id);
        if(team == null){
            next(boom.notFound());
        }
        else{
            response.send(team);
        }
    }
    catch(error){
        next(boom.internal(error));
    }
}

exports.get = async function (request, response){
    let teams = await Team.find().populate('players');
    response.send(teams);
}