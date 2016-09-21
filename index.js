module.exports = (() => {
  function generateTemplate(template) {
    // Replace ${expressions} (etc) with ${map.expressions}.
    const sanitized = template
      .replace(/\$\{([\s]*[^;\s\{]+[\s]*)\}/g, function (_, match) {
        return `\$\{map.${match.trim()}\}`;
      })
      // Afterwards, replace anything that's not ${map.expressions}' (etc) with a blank string.
      .replace(/(\$\{(?!map\.)[^}]+\})/g, '');
    return Function('map', `return \`${sanitized}\``);
  }

  return generateTemplate;
})();
