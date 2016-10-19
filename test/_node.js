var render = require('../index');
var assert = require('assert');

assert.equal(render('/api/${param1}/', {param1: 'foo'}), '/api/foo/');
console.log('test require(\'es6-template-render\') for node js ok');
