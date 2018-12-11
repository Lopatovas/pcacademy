process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHtpp = require('chai-http');
const app = require('../app');
const config = require('../config_test.js');
const PlayerModel = require('../models/player');

chai.should();
chai.use(chaiHtpp);


describe('Players', () => {

    beforeEach(done => {
        PlayerModel.remove({}, err=>{
            done();
        });
    });

    describe('/GET with unauthorized access', () => {
        it('it should return unauthorized', done => {
            chai.request(app)
                .get('/players')
                .end((error, response)=> {
                    response.should.have.status(401);
                    done();
                });
        });
    });

    describe('/GET players', () => {
        it('it should return players', done => {
            chai.request(app)
                .get('/players')
                .set('token', config.TOKEN_TEST)
                .end((error, response)=> {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    done();
                });
        });
    });

    describe('/POST player', () => {
        it('it should post a new player', done => {
            chai.request(app)
                .post('/players')
                .set('token', config.TOKEN_TEST)
                .send({firstName: 'Virgil', 
                    lastName: 'Van Dijk', 
                    age: 27, 
                    nationality: 'Dutch', 
                    playerPosition: 'Defender', 
                    team: 'Liverpool',
                    jerseyNumber: 4})
                .end((error, response)=> {
                    response.should.have.status(200);
                    response.body.should.have.property('firstName', 'Virgil');
                    response.body.should.have.property('lastName', 'Van Dijk');
                    response.body.should.have.property('age', 27);
                    response.body.should.have.property('nationality', 'Dutch');
                    response.body.should.have.property('playerPosition', 'Defender');
                    response.body.should.have.property('team', 'Liverpool');
                    response.body.should.have.property('jerseyNumber', 4);
                    done();
                });
        });
    });

    describe('/POST player', () => {
        it('it should return unauthorized', done => {
            chai.request(app)
                .post('/players')
                .send({firstName: 'Virgil', 
                    lastName: 'Van Dijk', 
                    age: 27, 
                    nationality: 'Dutch', 
                    playerPosition: 'Defender', 
                    team: 'Liverpool',
                    jerseyNumber: 4})
                .end((error, response)=> {
                    response.should.have.status(401);
                    done();
                });
        });
    });

    describe('/POST player', () => {
        it('it should return an error caused by the lack of a required field', done => {
            chai.request(app)
                .post('/players')
                .set('token', config.TOKEN_TEST)
                .send({firstName: 'Virgil', 
                    lastName: 'Van Dijk', 
                    age: 27,  
                    playerPosition: 'Defender', 
                    team: 'Liverpool',
                    jerseyNumber: 4})
                .end((error, response)=> {
                    response.should.have.status(422);
                    response.body.should.have.property('message');
                    done();
                });
        });
    });

    describe('/POST player', () => {
        it('it should return an error caused by passing data in a non accepted format', done => {
            chai.request(app)
                .post('/players')
                .set('token', config.TOKEN_TEST)
                .send({firstName: 'Virgil', 
                    lastName: 'Van Dijk', 
                    age: 'No age',  
                    playerPosition: 'Defender', 
                    nationality: 'Dutch', 
                    team: 'Liverpool',
                    jerseyNumber: 4})
                .end((error, response)=> {
                    response.should.have.status(422);
                    response.body.should.have.property('message');
                    done();
                });
        });
    });

    describe('/GET player by id', () => {
        it('it should return the player that was just created', done => {
            let player = new PlayerModel({firstName: 'Mohamed', 
            lastName: 'Salah', 
            age: 26, 
            nationality: 'Egyptian', 
            playerPosition: 'Forward', 
            team: 'Liverpool',
            jerseyNumber: 11});
            player.save((err, player) =>{
                chai.request(app)
                .get('/players/' + player.id)
                .set('token', config.TOKEN_TEST)
                .end((error, response)=> {
                    response.should.have.status(200);
                    response.body.should.have.property('firstName', 'Mohamed');
                    response.body.should.have.property('lastName', 'Salah');
                    response.body.should.have.property('age', 26);
                    response.body.should.have.property('nationality', 'Egyptian');
                    response.body.should.have.property('playerPosition', 'Forward');
                    response.body.should.have.property('team', 'Liverpool');
                    response.body.should.have.property('jerseyNumber', 11);
                    done();
                });
            });
        });
    });

    describe('/GET player by id', () => {
        it('it should return unauthorized', done => {
            let player = new PlayerModel({firstName: 'Mohamed', 
            lastName: 'Salah', 
            age: 26, 
            nationality: 'Egyptian', 
            playerPosition: 'Forward', 
            team: 'Liverpool',
            jerseyNumber: 11});
            player.save((err, player) =>{
                chai.request(app)
                .get('/players/' + player.id)
                .end((error, response)=> {
                    response.should.have.status(401);
                    done();
                });
            });
        });
    });

    describe('/GET player by id', () => {
        it('it should return an error that is thrown by an invalid id in the request', done => {
            chai.request(app)
            .get('/players/' + config.INVALID_ID)
            .set('token', config.TOKEN_TEST)
            .end((error, response)=> {
                response.should.have.status(404);
                done();
            });
        });
    });

    describe('/PUT player by id', () => {
        it('it should return the player that was updated', done => {
            let player = new PlayerModel({firstName: 'Mohamed', 
            lastName: 'Salah', 
            age: 26, 
            nationality: 'Egyptian', 
            playerPosition: 'Forward', 
            team: 'Liverpool',
            jerseyNumber: 11});
            player.save((err, player) =>{
                chai.request(app)
                .put('/players/' + player.id)
                .set('token', config.TOKEN_TEST)
                .send({ nationality: 'Dutch', 
                    team: 'Chelsea',
                    jerseyNumber: 4})
                .end((error, response)=> {
                    response.should.have.status(200);
                    response.body.should.have.property('firstName', 'Mohamed');
                    response.body.should.have.property('lastName', 'Salah');
                    response.body.should.have.property('age', 26);
                    response.body.should.have.property('nationality', 'Egyptian');
                    response.body.should.have.property('playerPosition', 'Forward');
                    response.body.should.have.property('team', 'Liverpool');
                    response.body.should.have.property('jerseyNumber', 11);
                    done();
                });
            });
        });
    });

    describe('/PUT player by id', () => {
        it('it should return unauthorized error', done => {
            let player = new PlayerModel({firstName: 'Mohamed', 
            lastName: 'Salah', 
            age: 26, 
            nationality: 'Egyptian', 
            playerPosition: 'Forward', 
            team: 'Liverpool',
            jerseyNumber: 11});
            player.save((err, player) =>{
                chai.request(app)
                .put('/players/' + player.id)
                .send({ nationality: 'Dutch', 
                    team: 'Chelsea',
                    jerseyNumber: 4})
                .end((error, response)=> {
                    response.should.have.status(401);
                    done();
                });
            });
        });
    });

    describe('/PUT player by id', () => {
        it('it should return an error that is thrown by an invalid id in the request', done => {
            let player = new PlayerModel({firstName: 'Mohamed', 
            lastName: 'Salah', 
            age: 26, 
            nationality: 'Egyptian', 
            playerPosition: 'Forward', 
            team: 'Liverpool',
            jerseyNumber: 11});
            player.save((err, player) =>{
                chai.request(app)
                .put('/players/' + config.INVALID_ID)
                .set('token', config.TOKEN_TEST)
                .send({ nationality: 'Dutch', 
                    team: 'Chelsea',
                    jerseyNumber: 4})
                .end((error, response)=> {
                    response.should.have.status(404);
                    done();
                });
            });
        });
    });

    describe('/PUT player by id', () => {
        it('it should return an error that is thrown due to an invalid parameter provided', done => {
            let player = new PlayerModel({firstName: 'Mohamed', 
            lastName: 'Salah', 
            age: 26, 
            nationality: 'Egyptian', 
            playerPosition: 'Forward', 
            team: 'Liverpool',
            jerseyNumber: 11});
            player.save((err, player) =>{
                chai.request(app)
                .put('/players/' + player.id)
                .set('token', config.TOKEN_TEST)
                .send({ nationality: 'Dutch', 
                    team: 'Chelsea',
                    jerseyNumber: 'None'})
                .end((error, response)=> {
                    response.should.have.status(422);
                    done();
                });
            });
        });
    });

    describe('/DELETE player by id', () => {
        it('it should delete the newly created player and return the player that is being deleted', done => {
            let player = new PlayerModel({firstName: 'Mohamed', 
            lastName: 'Salah', 
            age: 26, 
            nationality: 'Egyptian', 
            playerPosition: 'Forward', 
            team: 'Liverpool',
            jerseyNumber: 11});
            player.save((err, player) =>{
                chai.request(app)
                .delete('/players/' + player.id)
                .set('token', config.TOKEN_TEST)
                .end((error, response)=> {
                    response.should.have.status(200);
                    response.body.should.have.property('firstName', 'Mohamed');
                    response.body.should.have.property('lastName', 'Salah');
                    response.body.should.have.property('age', 26);
                    response.body.should.have.property('nationality', 'Egyptian');
                    response.body.should.have.property('playerPosition', 'Forward');
                    response.body.should.have.property('team', 'Liverpool');
                    response.body.should.have.property('jerseyNumber', 11);
                    done();
                });
            });
        });
    });

    describe('/DELETE player by id', () => {
        it('it should return an error that is thrown by an invalid id in the request', done => {
            let player = new PlayerModel({firstName: 'Mohamed', 
            lastName: 'Salah', 
            age: 26, 
            nationality: 'Egyptian', 
            playerPosition: 'Forward', 
            team: 'Liverpool',
            jerseyNumber: 11});
            player.save((err, player) =>{
                chai.request(app)
                .delete('/players/' + config.INVALID_ID)
                .set('token', config.TOKEN_TEST)
                .end((error, response)=> {
                    response.should.have.status(404);
                    done();
                });
            });
        });
    });

    describe('/DELETE player by id', () => {
        it('it should return unauthorized', done => {
            let player = new PlayerModel({firstName: 'Mohamed', 
            lastName: 'Salah', 
            age: 26, 
            nationality: 'Egyptian', 
            playerPosition: 'Forward', 
            team: 'Liverpool',
            jerseyNumber: 11});
            player.save((err, player) =>{
                chai.request(app)
                .delete('/players/' + player.id)
                .end((error, response)=> {
                    response.should.have.status(401);
                    done();
                });
            });
        });
    });

});