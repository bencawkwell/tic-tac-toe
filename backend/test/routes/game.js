'use strict';

var chai      = require('chai'),
    request   = require('supertest'),
    base      = require('requirefrom')(''),

    app       = base('server'),

    expect    = chai.expect,

    initialGameStateTiles = [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 7},
        {id: 8},
        {id: 9}
    ];

describe('the POST:/api/game endpoint', function () {
    it('should respond with 201', function () {
        return request(app)
            .post('/api/game')
            .expect(201);
    });

    it('should respond with a new game', function (done) {
        request(app)
            .post('/api/game')
            .end(function (err, res) {
                if (err) {
                    done(err);
                }

                expect(res.body).to.have.property('id');

                expect(res.body).to.have.property('tiles')
                    .and.to.deep.equal(initialGameStateTiles);
                done();
            });
    });

});

describe('the GET:/api/game/{id} endpoint', function () {
    var gameId,
        gameUrl;

    beforeEach(function (done) {
        request(app)
            .post('/api/game')
            .end(function (err, res) {
                if (err) {
                    done(err);
                }
                gameId = res.body.id;
                gameUrl = '/api/game/' + gameId;
                done();
            });
    });

    it('should respond with 404 for a non existent id', function () {
        return request(app)
            .get('/api/game/this-uuid-does-not-exist')
            .expect(404);
    });

    it('should respond with 200', function () {
        return request(app)
            .get(gameUrl)
            .expect(200);
    });

    it('should respond with the game', function (done) {
        request(app)
            .get(gameUrl)
            .end(function (err, res) {
                if (err) {
                    done(err);
                }

                expect(res.body).to.have.property('id').and.to.equal(gameId);

                expect(res.body).to.have.property('tiles')
                    .and.to.deep.equal(initialGameStateTiles);
                done();
            });
    });

});

describe('the POST:/api/game/{id} endpoint', function () {
    var gameId,
        gameUrl;

    beforeEach(function (done) {
        request(app)
            .post('/api/game')
            .end(function (err, res) {
                if (err) {
                    done(err);
                }
                gameId = res.body.id;
                gameUrl = '/api/game/' + gameId;
                done();
            });
    });

    it('should respond with 404 for a non existent id', function () {
        return request(app)
            .post('/api/game/this-uuid-does-not-exist')
            .expect(404);
    });

    it('should respond with 200', function () {
        return request(app)
            .post(gameUrl)
            .send({tileId: 1})
            .set('Content-type', 'application/json')
            .expect(200);
    });

    it('should register the move and return the updated game', function (done) {
        request(app)
            .post(gameUrl)
            .send({tileId: 1})
            .set('Content-type', 'application/json')
            .end(function (err, res) {
                if (err) {
                    done(err);
                }

                expect(res.body).to.have.property('id').and.to.equal(gameId);

                expect(res.body).to.have.property('tiles');

                expect(res.body.tiles[0]).to.have.property('value')
                    .and.to.equal('X');
                done();
            });
    });

    it('should return a 401 for an invalid move', function (done) {
        request(app)
            .post(gameUrl)
            .send({tileId: 10})
            .set('Content-type', 'application/json')
            .end(function (err, res) {
                expect(res.status).to.equal(401);

                expect(res.body).to.have.property('error').and.to.be.a.string;
                done();
            });
    });

    it('should return a 403 for if move is already taken', function (done) {

        request(app)
            .post(gameUrl)
            .send({tileId: 1})
            .set('Content-type', 'application/json')
            .end(function(err) {
                if (err) {
                    done(err);
                }
                // Yes we are in callback hell, I am very sorry but the other easy alternative would
                // be to manipulate the store directly, and I am not ready for that tight coupling
                // just yet.
                request(app)
                    .post(gameUrl)
                    .send({tileId: 1})
                    .set('Content-type', 'application/json')
                    .end(function (err, res) {

                        expect(res.status).to.equal(403);

                        expect(res.body).to.have.property('error').and.to.be.a.string;
                        done();
                    });
            })
    });

});
