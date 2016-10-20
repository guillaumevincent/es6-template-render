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

test('test render variable with whitespaces between curlys', t => {
  t.is(render('/api/${ param1}/', { param1: 'foo'}), '/api/foo/');
});

test('test render variable with multiple whitespaces between curlys', t => {
  t.is(render('/api/${ \t param1\n \t}/', { param1: 'foo'}), '/api/foo/');
});

test('test render simple object attribute', t => {
  t.is(render('Hey, ${user.name}', { user: {name: 'Andrea' }}), 'Hey, Andrea');
});

test('test render complex object', t => {
  t.is(render('${greeting}, user#${user.id}, your name is ${user.profile.name}', { greeting: "Hi", user: { id: 25, profile: { name: 'Andrea' }}}), 'Hi, user#25, your name is Andrea');
});

test('test render really complex object', t => {
  t.is(render('${data.log.user.profile.age}', {data: { log: { user: { profile: { age: 25 }}}}}), '25');
});
