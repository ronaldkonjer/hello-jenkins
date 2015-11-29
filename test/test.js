var request = require('supertest');
var app = require('../app.js');

describe('Get /', function() {
  it('respond with hello jenkins', function(done) {
    request(app).get('/').expect('hello jenkins', done);
  });
});