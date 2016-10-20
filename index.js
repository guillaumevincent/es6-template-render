module.exports = function (string, context) {
  return _recursive_rendering(string, context, '');
};

function _recursive_rendering(string, context, stack) {
  for (let key in context) {
    if (context.hasOwnProperty(key)) {
      if(typeof context[key] === "object") {
        string = _recursive_rendering(string, context[key], (stack?`${stack}.`:'')+ key);
      } else {
        let find = `\\$\\{\\s*${(stack?`${stack}.`:'')}${key}\\s*\\}`;
        let re = new RegExp(find, 'g');
        string = string.replace(re, context[key]);
      }
    }
  }
  return string;
}
