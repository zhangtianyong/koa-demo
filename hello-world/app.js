
var koa = require('koa');
var app = module.exports = koa();

app.use(function *(){
  this.body = 'Hello World123';
});

if (!module.parent) app.listen(3000);
