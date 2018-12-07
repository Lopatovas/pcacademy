const Team = require('../models/team');
const config = require('../validation/config');

exports.create = function (request, response){
    let team = new Team({
        teamName: request.body.teamName,
        homeTown: request.body.homeTown,
        stadium: request.body.stadium,
        coach: request.body.coach
    });
    team.save( () => {
        response.send(`${request.body.teamName} has been saved succesfully!`);
    });
}

exports.get = function (request, response){
    Team.find((error, teams) => {
        if(error){
            response.send(error);
        }
        else{
            response.send(teams);
        }
    });
}

exports.getById = function (request, response){
    Team.findById(request.params.id, (error, team) => {
        if(error || team == null){
            response.send(`${config.INVALID_KEY_ERROR} ${request.params.id}`);
        }
        else{
            response.send(team);
        }
    });
}

exports.updateById = function(request, response){
    Team.findByIdAndUpdate(request.params.id, request.body, (error, team) =>{
        if(error){
            response.send(`Update ${config.INVALID_OPERATION_ERROR}`)
        }
        else{
            response.send(`Update ${config.OPERATION_SUCCESSFULL} ${request.params.id}`);
        }
    });
}

exports.delete = function(request, response){
    Team.findByIdAndRemove(request.params.id, (error, player) =>{
        if(error){
            response.send(`${config.INVALID_KEY_ERROR} ${request.params.id}`)
        }
        else{
            response.send(`Delete ${config.OPERATION_SUCCESSFULL} ${request.params.id}`);
        }
    });
}