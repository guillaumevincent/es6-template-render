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


## License

MIT - see license file
