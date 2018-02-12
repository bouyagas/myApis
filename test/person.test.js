const request = require('supertest');
const expect = require('chai').expect;
const server = require('../server');

describe('Person API Integration Tests', () => {
  var person = {
    name: 'ganna',
    gender: 'Female',
    age: 3,
  };

  it('should get all persons', done => {
    request(server)
      .get('/api/persons')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.an('array');
        done(err);
      });
  });

  it('should create a persons', done => {
    request(server)
      .post('/api/persons')
      .send(person)
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body.message).to.equal(
          'A person has been successfully created',
        );
        done(err);
      });
  });

  it('should get single persons', done => {
    request(server)
      .get('/api/persons/3')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.an('array');
        done(err);
      });
  });

  it('should modify a person', done => {
    person.name = 'New Person';
    request(server)
      .put('/api/persons/6')
      .send(person)
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body.message).to.equal(
          'A person has been successfully update',
        );
        done(err);
      });
  });

  it('should delete a person', done => {
    request(server)
      .delete('/api/persons/1')
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body.message).to.equal(
          'A person has been successfully deleted',
        );
        done(err);
      });
  });
});
