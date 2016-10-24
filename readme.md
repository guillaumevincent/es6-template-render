[![Build Status](https://travis-ci.org/guillaumevincent/es6-template-render.svg?branch=master)](https://travis-ci.org/guillaumevincent/es6-template-render)

# Es6-template-render

library to render es6 template base on objects

## Requirements

  * node 4+

## Install

    npm install es6-template-render
  
## Create resource

```js
    import render from 'es6-template-render';

    render('/api/${param1}/${param2}/', {param1: 'foo', param2: 'bar'})
    // Output:
    // '/api/foo/bar/'
```

or ES5

```js
var render = require('es6-template-render');

render('/api/${param1}/${param2}/', {param1: 'foo', param2: 'bar'})
// Output:
// '/api/foo/bar/'
```

## Use objects instead of string

```js
    import render from 'es6-template-render';

    render('Hey, ${user.name}', { user: {name: 'Andrea' }})
    // Output:
    // 'Hey, Andrea'
```

## Contributors

 * [Andrea Falzetti](https://github.com/andreafalzetti)
 * [Gabriel](https://github.com/gabrielperales)


## License

MIT © [Guillaume Vincent](http://guillaumevincent.com)
