import test from 'ava';
import generateTemplateString from '../index';

test('test render simple variable', t => {
  const template = generateTemplateString('/api/${param1}/');
  t.is(template({param1: 'bar'}), '/api/bar/');
});

test('test render two variables', t => {
  const template = generateTemplateString('/api/${param1}/${param2}/');
  t.is(template({param1: 'bar', param2: 'foo'}), '/api/bar/foo/');
});

test('test render no variable', t => {
  const template = generateTemplateString('/api/');
  t.is(template({param1: 'bar', param2: 'foo'}), '/api/');
});
