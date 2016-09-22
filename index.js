module.exports = function (string, context) {
  for (var key in context) {
    var find = `\\$\\{(${key})\\}`;
    var re = new RegExp(find, 'g');
    string = string.replace(re, context[key]);
  }
  return string
};
