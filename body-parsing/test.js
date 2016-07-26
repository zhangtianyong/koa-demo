var app = require('./app');
var request = require('supertest').agent(app.listen());

describe('Body Parsing', function(){
  describe('POST /uppercase', function(){
    describe('with JSO1N', function(){
      it('should work', function(done){
        request
        .post('/uppercase')
        .send({ name: 'tobi' })
        .expect({ name: 'TOBI' }, done);
      })
    })

    describe('with urlencoded', function(){
      it('should work', function(done){
        request
        .post('/uppercase')
        .send('name=tj')
        .expect({name: 'TJ'}, done);
      })
    })


    describe('when length > limit', function(){
      it('should 413', function(done){
        request
        .post('/uppercase')
        .send({ name: Array(5000).join('a') })
        .expect(413, done);
      })
    })

    describe('when no name is sent', function(){
      it('should 400', function(done){
        request
        .post('/uppsercase')
        .send('age=10')
        .expect(400, done);
      });
    });
  })
})