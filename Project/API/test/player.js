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
        PlayerModel.create(new PlayerModel({firstName: 'Mohamed', 
        lastName: 'Salah', 
        age: 26, 
        nationality: 'Egyptian', 
        playerPosition: 'Forward', 
        team: 'Liverpool',
        jerseyNumber: 11}))
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
});