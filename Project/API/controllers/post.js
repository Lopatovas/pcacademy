const Post = require('../models/post');
const boom = require('boom');

exports.create = async function (request, response, next){
    try{
        let post = new Post({
            userName: request.body.userName,
            text: request.body.text,
            pageId: request.body.pageId,
        });
    
        let result = await post.save();
        response.send(result);

    } catch(error) {
        next(boom.badData(error));
    }
}

exports.get = async function (request, response, next){
    try{
        let result = await Post.find();
        response.send(result);
    }
    catch(error){
        next(boom.internal(error));
    }
}

exports.getById = async function (request, response, next){
    try{
        let post = await Post.find({pageId: request.params.id});
        if(post == null){
            next(boom.notFound());
        }
        else{
            response.send(post);
        }
    }
    catch(error){
        next(boom.internal(error));
    }
}

exports.updateById = async function(request, response, next){
    try{
        let post = await Post.findByIdAndUpdate(request.params.id, request.body);
        if(post == null){
            next(boom.notFound());
        }
        else{
            response.send(post);
        }
    }
    catch(error){
        next(boom.badData(error));
    }
}

exports.delete = async function(request, response, next){
    try{
        let post = await Post.findByIdAndRemove(request.params.id);
        if(post == null){
            next(boom.notFound());
        }
        else{
            response.send(post);
        }
    }
    catch(error){
        next(boom.internal(error));
    }
}