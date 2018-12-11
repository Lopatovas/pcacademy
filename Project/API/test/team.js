process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHtpp = require('chai-http');
const app = require('../app');
const config = require('../config_test.js');
const TeamModel = require('../models/team');

chai.should();
chai.use(chaiHtpp);


describe('Teams', () => {

    beforeEach(done => {
        TeamModel.remove({}, err=>{
            done();
        });
    });

    describe('/GET with unauthorized access', () => {
        it('it should return unauthorized', done => {
            chai.request(app)
                .get('/teams')
                .end((error, response)=> {
                    response.should.have.status(401);
                    done();
                });
        });
    });

    describe('/GET teams', () => {
        it('it should return teams', done => {
            chai.request(app)
                .get('/teams')
                .set('token', config.TOKEN_TEST)
                .end((error, response)=> {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    done();
                });
        });
    });

    describe('/POST team', () => {
        it('it should post a new team', done => {
            chai.request(app)
                .post('/teams')
                .set('token', config.TOKEN_TEST)
                .send({teamName: 'Liverpool', 
                    homeTown: 'Liverpool', 
                    stadium: 'Anfield', 
                    coach: 'Jurgen Klopp'})
                .end((error, response)=> {
                    response.should.have.status(200);
                    response.body.should.have.property('teamName', 'Liverpool');
                    response.body.should.have.property('homeTown', 'Liverpool');
                    response.body.should.have.property('stadium', 'Anfield');
                    response.body.should.have.property('coach', 'Jurgen Klopp');
                    done();
                });
        });
    });

    describe('/POST team', () => {
        it('it should return unauthorized', done => {
            chai.request(app)
                .post('/teams')
                .send({teamName: 'Liverpool', 
                    homeTown: 'Liverpool', 
                    stadium: 'Anfield', 
                    coach: 'Jurgen Klopp'})
                .end((error, response)=> {
                    response.should.have.status(401);
                    done();
                });
        });
    });

    describe('/POST team', () => {
        it('it should return an error caused by the lack of a required field', done => {
            chai.request(app)
                .post('/teams')
                .set('token', config.TOKEN_TEST)
                .send({homeTown: 'Liverpool', 
                    stadium: 'Anfield', 
                    coach: 'Jurgen Klopp'})
                .end((error, response)=> {
                    response.should.have.status(422);
                    response.body.should.have.property('message');
                    done();
                });
        });
    });

    describe('/GET team by id', () => {
        it('it should return the team that was just created', done => {
            let team = new TeamModel({teamName: 'Liverpool', 
            homeTown: 'Liverpool', 
            stadium: 'Anfield', 
            coach: 'Jurgen Klopp'});
            team.save((err, team) =>{
                chai.request(app)
                .get('/teams/' + team.id)
                .set('token', config.TOKEN_TEST)
                .end((error, response)=> {
                    response.should.have.status(200);
                    response.body.should.have.property('teamName', 'Liverpool');
                    response.body.should.have.property('homeTown', 'Liverpool');
                    response.body.should.have.property('stadium', 'Anfield');
                    response.body.should.have.property('coach', 'Jurgen Klopp');
                    done();
                });
            });
        });
    });

    describe('/GET team by id', () => {
        it('it should return unauthorized', done => {
            let team = new TeamModel({teamName: 'Liverpool', 
            homeTown: 'Liverpool', 
            stadium: 'Anfield', 
            coach: 'Jurgen Klopp'});
            team.save((err, team) =>{
                chai.request(app)
                .get('/teams/' + team.id)
                .end((error, response)=> {
                    response.should.have.status(401);
                    done();
                });
            });
        });
    });

    describe('/GET team by id', () => {
        it('it should return an error that is thrown by an invalid id in the request', done => {
            chai.request(app)
            .get('/teams/' + config.INVALID_ID)
            .set('token', config.TOKEN_TEST)
            .end((error, response)=> {
                response.should.have.status(404);
                done();
            });
        });
    });

    describe('/PUT team by id', () => {
        it('it should return the team that was updated', done => {
            let team = new TeamModel({teamName: 'Liverpool', 
            homeTown: 'Liverpool', 
            stadium: 'Anfield', 
            coach: 'Jurgen Klopp'});
            team.save((err, team) =>{
                chai.request(app)
                .put('/teams/' + team.id)
                .set('token', config.TOKEN_TEST)
                .send({coach: 'Maurizio Sarri'})
                .end((error, response)=> {
                    response.should.have.status(200);
                    response.body.should.have.property('teamName', 'Liverpool');
                    response.body.should.have.property('homeTown', 'Liverpool');
                    response.body.should.have.property('stadium', 'Anfield');
                    response.body.should.have.property('coach', 'Jurgen Klopp');
                    done();
                });
            });
        });
    });

    describe('/PUT team by id', () => {
        it('it should return unauthorized error', done => {
            let team = new TeamModel({teamName: 'Liverpool', 
            homeTown: 'Liverpool', 
            stadium: 'Anfield', 
            coach: 'Jurgen Klopp'});
            team.save((err, team) =>{
                chai.request(app)
                .put('/teams/' + team.id)
                .send({coach: 'Maurizio Sarri'})
                .end((error, response)=> {
                    response.should.have.status(401);
                    done();
                });
            });
        });
    });

    describe('/PUT team by id', () => {
        it('it should return an error that is thrown by an invalid id in the request', done => {
            let team = new TeamModel({teamName: 'Liverpool', 
            homeTown: 'Liverpool', 
            stadium: 'Anfield', 
            coach: 'Jurgen Klopp'});
            team.save((err, team) =>{
                chai.request(app)
                .put('/teams/' + config.INVALID_ID)
                .set('token', config.TOKEN_TEST)
                .send({coach: 'Maurizio Sarri'})
                .end((error, response)=> {
                    response.should.have.status(404);
                    done();
                });
            });
        });
    });

    describe('/DELETE team by id', () => {
        it('it should delete the newly created team and return the team that is being deleted', done => {
            let team = new TeamModel({teamName: 'Liverpool', 
            homeTown: 'Liverpool', 
            stadium: 'Anfield', 
            coach: 'Jurgen Klopp'});
            team.save((err, team) =>{
                chai.request(app)
                .delete('/teams/' + team.id)
                .set('token', config.TOKEN_TEST)
                .end((error, response)=> {
                    response.should.have.status(200);
                    response.body.should.have.property('teamName', 'Liverpool');
                    response.body.should.have.property('homeTown', 'Liverpool');
                    response.body.should.have.property('stadium', 'Anfield');
                    response.body.should.have.property('coach', 'Jurgen Klopp');
                    done();
                });
            });
        });
    });

    describe('/DELETE team by id', () => {
        it('it should return an error that is thrown by an invalid id in the request', done => {
            let team = new TeamModel({teamName: 'Liverpool', 
            homeTown: 'Liverpool', 
            stadium: 'Anfield', 
            coach: 'Jurgen Klopp'});
            team.save((err, team) =>{
                chai.request(app)
                .delete('/teams/' + config.INVALID_ID)
                .set('token', config.TOKEN_TEST)
                .end((error, response)=> {
                    response.should.have.status(404);
                    done();
                });
            });
        });
    });

    describe('/DELETE team by id', () => {
        it('it should return unauthorized', done => {
            let team = new TeamModel({teamName: 'Liverpool', 
            homeTown: 'Liverpool', 
            stadium: 'Anfield', 
            coach: 'Jurgen Klopp'});
            team.save((err, team) =>{
                chai.request(app)
                .delete('/teams/' + team.id)
                .end((error, response)=> {
                    response.should.have.status(401);
                    done();
                });
            });
        });
    });

});