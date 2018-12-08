const User = require('../models/user');

exports.create = function (request, response){
    let user = new User({
        userName: request.body.userName,
        email: request.body.email,
        password: request.body.password
    });
    user.save( () => {
        response.send(`${request.body.userName} has been saved succesfully!`);
    });
}