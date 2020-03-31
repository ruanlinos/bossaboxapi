/* eslint-disable no-unused-vars */
const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should();
const { expect } = chai;
chai.use(chaiHttp);

const server = require('../src/index');

describe('Tools', () => {
  describe('/GET all tools', () => {
    it('it should GET all tools', (done) => {
      chai.request(server)
        .get('/tools')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
      done();
    });
  });

  describe('/PUT update tool', () => {
    it('it should update a existing tool', (done) => {
      chai
        .request(server)
        .put('/tools/1')
        .send({ title: 'Updated' })
        .then((res) => {
          expect(res).to.have.status(204);
          done();
        });
      done();
    });
  });

  describe('/POST create a new tool', () => {
    it('it should Post a new tool', (done) => {
      chai
        .request(server)
        .post('/tools')
        .type('form')
        .send({
          title: 'Test',
          link: 'https://github.com/ruanlinos',
          description: 'This is a tool runned in chaiJs.',
          tags: [
            'node',
            'organizing',
            'webapps',
            'domain',
            'developer',
            'https',
            'proxy',
          ],
        })
        .end((err, res) => {
          expect(res).to.have.status(201);
          done();
        });
      done();
    });
  });

  describe('/DELETE delete a tool by id', () => {
    it('it should Delete one tool by id', (done) => {
      chai
        .request(server)
        .get('/tools').end((err, res) => {
          chai
            .request(server)
            .delete('/tools/1')
            .end((error, response) => {
              response.should.have.status(204);
              done();
            });
        });
      done();
    });
  });
});
