const request = require('supertest');
const expect = require('chai').expect;
const server = require('../server');

describe('GET /api/person', function() {
  it('respond with json', function(done) {
    request(server)
      .get('/api/person')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        expect(response.body).to.be.a('array');
        done();
      });
  });
});
