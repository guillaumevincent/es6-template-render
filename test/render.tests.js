import test from 'ava';
import render from '../index';

test('test render simple variable', t => {
  t.is(render('/api/${param1}/', {param1: 'foo'}), '/api/foo/');
});

test('test render two variables', t => {
  t.is(render('/api/${param1}/${param2}/', {param1: 'foo', param2: 'bar'}), '/api/foo/bar/');
});

test('test render no variable', t => {
  t.is(render('/api/', {param1: 'foo', param2: 'bar'}), '/api/');
});

test('test render twice same variable', t => {
  t.is(render('/api/${param1}/${param1}/', {param1: 'foo'}), '/api/foo/foo/');
});

test('test return url if no param', t => {
  t.is(render('/api/${param1}/', {}), '/api/${param1}/');
});
