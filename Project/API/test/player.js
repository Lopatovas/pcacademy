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

        PlayerModel.create(new PlayerModel({
            firstName: 'Virgil',
            lastName: 'Van Dijk',
            age: 27,
            nationality: 'Dutch',
            playerPosition: 'Defender',
            team: 'Liverpool',
            jerseyNumber: 4
        }))
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
                    response.body.length.should.be.eql(0);
                    done();
                });
        });
    });

    describe('/POST player', () => {
        it('it should post a new player', done => {
            chai.request(app)
                .post('/')
                .set('token', config.TOKEN_TEST)
                .send({firstName: 'Virgil', 
                    lastName: 'Van Dijk', 
                    age: 27, 
                    nationality: 'Dutch', 
                    playerPosition: 'Defender', 
                    team: 'Liverpool',
                    jerseyNumber: 4})
                .end((error, response)=> {
                    console.log(response.body);
                    response.should.have.status(200);
                    response.body.user.should.have.property('firstName', 'Virgil');
                    response.body.user.should.have.property('lastName', 'Van Dijk');
                    response.body.user.should.have.property('age', 27);
                    response.body.user.should.have.property('nationality', 27);
                    response.body.user.should.have.property('playerPosition', 'Defender');
                    response.body.user.should.have.property('team', 'Liverpool');
                    response.body.user.should.have.property('jerseyNumber', 4);
                    done();
                });
        });
    });

    describe('/POST player', () => {
        it('it should return unauthorized', done => {
            chai.request(app)
                .post('/')
                .send({firstName: 'Virgil', 
                    lastName: 'Van Dijk', 
                    age: 27, 
                    nationality: 'Dutch', 
                    playerPosition: 'Defender', 
                    team: 'Liverpool',
                    jerseyNumber: 4})
                .end((error, response)=> {
                    console.log(response.body);
                    response.should.have.status(401);
                    response.body.user.should.have.property('firstName', 'Virgil');
                    response.body.user.should.have.property('lastName', 'Van Dijk');
                    response.body.user.should.have.property('age', 27);
                    response.body.user.should.have.property('nationality', 27);
                    response.body.user.should.have.property('playerPosition', 'Defender');
                    response.body.user.should.have.property('team', 'Liverpool');
                    response.body.user.should.have.property('jerseyNumber', 4);
                    done();
                });
        });
    });

    describe('/PUT player', () => {
        it('it should update an existing player', done => {
            chai.request(app)
                .put('/')
                .set('token', config.TOKEN_TEST)
                .send({firstName: 'Virgil', 
                    lastName: 'Van Dijk', 
                    age: 27, 
                    nationality: 'Dutch', 
                    playerPosition: 'Defender', 
                    team: 'Liverpool',
                    jerseyNumber: 4})
                .end((error, response)=> {
                    console.log(response.body);
                    response.should.have.status(200);
                    response.body.user.should.have.property('firstName', 'Virgil');
                    response.body.user.should.have.property('lastName', 'Van Dijk');
                    response.body.user.should.have.property('age', 27);
                    response.body.user.should.have.property('nationality', 27);
                    response.body.user.should.have.property('playerPosition', 'Defender');
                    response.body.user.should.have.property('team', 'Liverpool');
                    response.body.user.should.have.property('jerseyNumber', 4);
                    done();
                });
        });
    });

    describe('/PUT player', () => {
        it('it should return unauthorized', done => {
            chai.request(app)
                .post('/')
                .send({firstName: 'Virgil', 
                    lastName: 'Van Dijk', 
                    age: 27, 
                    nationality: 'Dutch', 
                    playerPosition: 'Defender', 
                    team: 'Liverpool',
                    jerseyNumber: 4})
                .end((error, response)=> {
                    console.log(response.body);
                    response.should.have.status(401);
                    response.body.user.should.have.property('firstName', 'Virgil');
                    response.body.user.should.have.property('lastName', 'Van Dijk');
                    response.body.user.should.have.property('age', 27);
                    response.body.user.should.have.property('nationality', 27);
                    response.body.user.should.have.property('playerPosition', 'Defender');
                    response.body.user.should.have.property('team', 'Liverpool');
                    response.body.user.should.have.property('jerseyNumber', 4);
                    done();
                });
        });
    });
    
});