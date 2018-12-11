process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHtpp = require('chai-http');
const app = require('../app');
const UserModel = require('../models/user');
const messages = require('../authentication/messages');

chai.should();
chai.use(chaiHtpp);

describe('User', () => {
    
        describe('/signup', () => {
            it('it should sign a user up', done => {
                chai.request(app)
                    .post('/users/signup')
                    .send({userName: 'admin', email: 'admin@admin.com', password: 'admin'})
                    .end((error, response)=> {
                        response.should.have.status(200);
                        response.body.user.should.have.property('userName', 'admin');
                        response.body.user.should.have.property('email', 'admin@admin.com');
                        response.body.user.should.have.property('password');
                        done();
                    });
            });
        });

        describe('/signup', () => {
            it('it should throw an error, due to a matching user already signed up', done => {
                chai.request(app)
                    .post('/users/signup')
                    .send({userName: 'admin', email: 'admin@admin.com', password: 'admin'})
                    .end((error, response)=> {
                        response.should.have.status(500);
                        done();
                    });
            });
        });

        describe('/login', () => {
            it('it should log a user in successfully', done => {
                chai.request(app)
                    .post('/users/login')
                    .send({userName: 'admin', password: 'admin'})
                    .end((error, response) => {
                        response.should.have.status(200);
                        response.body.should.have.property('token');
                        done();
                    });
            })
        });

        describe('/login', () => {
            it('it should specify that the password was invalid', done => {
                chai.request(app)
                    .post('/users/login')
                    .send({userName: 'admin', password: 'admins'})
                    .end((error, response) => {
                        response.should.have.status(200);
                        response.body.should.have.property('message', messages.INVALID_PASSWORD);
                        done();
                    });
            })
        });

        describe('/login', () => {
            it('it should specify that there is no user that is registered with that username', done => {
                chai.request(app)
                    .post('/users/login')
                    .send({userName: 'admins', password: 'admin'})
                    .end((error, response) => {
                        response.should.have.status(200);
                        response.body.should.have.property('message', messages.NOT_FOUND);
                        done();
                    });
            })
        });

        UserModel.remove({}, err=>{});
});