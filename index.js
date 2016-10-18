module.exports = function (string, context) {
  var key, find, re;

  for (key in context) {
    find = '\\$\\{' + key + '\\}';
    re = new RegExp(find, 'g');
    string = string.replace(re, context[key]);
  }

  return string;
};
