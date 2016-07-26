var p;
var app = require('./app');
var request = require('supertest').agent(app.listen());

describe('404', function(){
  describe('when GET /', function(){
    describe('qnm', function(){
      it('should return the 404 page', function (done) {
        request
            .get('/')
            .expect(404)
            .expect(/Page Not Found/);
            done();
      })
    })
    describe('qnm2', function(){
      it('should return the 404 page', function (done) {
        request
            .get('/')
            .expect(404)
            .expect(/Page Not Found/, done);
      })
      it('should return the 404 page', function (done) {
        request
            .get('/')
            .expect(404)
            .expect(/Page Not Found/, done);
      })
      it('should return the 404 page', function (done) {
        request
            .get('/')
            .expect(404)
            .expect(/Page Not Found/, done);
      })
    })
  })
})