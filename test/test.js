var request = require('supertest');
var app = require('../app.js');

describe('Get /', function() {
  it('respond with hello world', function(done) {
    request(app).get('/').expect('hello world', done);
  });
});