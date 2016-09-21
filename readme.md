[![Build Status](https://travis-ci.org/guillaumevincent/es6-template-render.svg?branch=master)](https://travis-ci.org/guillaumevincent/es6-template-render)

# Es6-template-render

library to render es6 template base on objects

## Requirements

  * ES6
  * node 4+

## Install

    npm install es6-template-render
  
## Create resource

```js
    import generateTemplateString from 'es6-template-render';
    
    const template = generateTemplateString('/api/${param1}/${param2}/');
    console.log(template({param1: 'bar', param2: 'foo'})) // print /api/bar/foo/;
```


## License

MIT - see license file
