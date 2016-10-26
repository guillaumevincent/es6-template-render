var TEMPLATE_REGEX = /\$\{\s*([a-z_$][\w_$]*(\.[a-z_$][\w_$]*)*)\s*\}/gi;

function dotNotation2Object(object, property) {
  return object[property];
}

module.exports = function (string, context) {
  return string.replace(TEMPLATE_REGEX, function (match, variable) {
    return variable.split('.').reduce(dotNotation2Object, context) || match;
  });
};
