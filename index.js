function _recursive_rendering(string, context, stack) {
  return Object.keys(context)
    .reduce(function (accumulator, key) {
      var newStack = stack ? stack + '.' : '';
      var find = '\\$\\{\\s*' + newStack + key + '\\s*\\}';
      var re = new RegExp(find, 'g');

      if (typeof context[key] === 'object') {
        return _recursive_rendering(accumulator, context[key], newStack + key);
      }
      return accumulator.replace(re, context[key]);
    }, string);
}

module.exports = function (string, context) {
  return _recursive_rendering(string, context, '');
};
