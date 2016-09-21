[![Build Status](https://travis-ci.org/guillaumevincent/pilou.svg?branch=master)](https://travis-ci.org/guillaumevincent/pilou)

# Pilou

http crud library for making web requests with promises

## Requirements

  * ES6
  * node 4+

## Install

    npm install pilou
  
## Create resource

```js
    import resource from 'pilou';
    
    pilou(resourceName, [options])
```

exemple create `clients` resource

```js
    import resource from 'pilou';
    
    const clients = resource('clients')
```


### Default actions

##### pilou.all([config])
##### pilou.delete([config])
##### pilou.get(data[, config])
##### pilou.create(data[, config])
##### pilou.update(data[, config])


## API

### All
```js
  import resource from 'pilou';
  
  const clients = resource('clients');
  
  // GET /api/clients/
  clients.all().then(response => {
    console.log(response.data);
    console.log(response.status);
  });
```

### Get
```js  
  // GET /api/clients/c8e4f983-8ffe-b705-4064-d3b7aa4a4782/
  clients.get({id: 'c8e4f983-8ffe-b705-4064-d3b7aa4a4782'});
```

### Create
```js
  // POST /api/clients/ {name: 'client name'}
  clients.create({name: 'client name'});
```

### Update
```js
  // PUT /api/clients/c8e4f983-4064-8ffe-b705-d3b7aa4a4782/
  clients.update({id: 'c8e4f983-4064-8ffe-b705-d3b7aa4a4782'}, {name: 'updated name'});
```

### Delete
```js
  // DELETE /api/clients/c8e4f983-4064-8ffe-b705-d3b7aa4a4782/
  clients.delete({id: 'c8e4f983-8ffe-4064-b705-d3b7aa4a4782'});
```

## Headers and Params
```js  
  const config = {
    headers: {Authorization: `JWT ...`},
    params: {date: '-created'}
  };
  // GET /api/clients/?date=-created
  clients.all(config);
```

## Options

customize endpoints
```js  
    const equipments = resource('equipments', {
      all: '/api/v2/${resource}',
      get: '/api/v2/${resource}/${equipmentId}'
    });
    
    // GET /api/v2/equipments
    equipments.all();
    
    // POST /api/v2/equipments {equipmentName: 'foo'}
    equipments.create({equipmentName: 'foo'});
    
    // GET /api/v2/equipments/42
    equipments.get({equipmentId: 42});
    
    // PUT /api/v2/equipments/42 {equipmentName: 'foo'}
    equipments.update({equipmentId: 42}, {equipmentName: 'foo'});
```

customize every endpoints

```js  
    const equipments = resource('equipments', {
      all: '/api/all/${resource}/',
      create: '/api/v2/${resource}',
      get: '/api/get/${resource}/${id}/',
      update: '/api/update/${resource}/${id}/',
      delete: '/api/v2/${resource}/${id}'
    });
```

## Request Config

These are the available config options for making requests.

```js
{
  // `url` is the server URL that will be used for the request
  url: '/user',

  // `baseURL` will be prepended to `url` unless `url` is absolute.
  // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
  // to methods of that instance.
  baseURL: 'https://some-domain.com/',

  // `headers` are custom headers to be sent
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `timeout` specifies the number of milliseconds before the request times out.
  // If the request takes longer than `timeout`, the request will be aborted.
  timeout: 1000,

  // `auth` indicates that HTTP Basic auth should be used, and supplies credentials.
  // This will set an `Authorization` header, overwriting any existing
  // `Authorization` custom headers you have set using `headers`.
  auth: {
    username: 'admin',
    password: 'password'
  }

  // `responseType` indicates the type of data that the server will respond with
  // options are 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json', // default

  // `xsrfCookieName` is the name of the cookie to use as a value for xsrf token
  xsrfCookieName: 'XSRF-TOKEN', // default

  // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
  xsrfHeaderName: 'X-XSRF-TOKEN', // default

  // `maxContentLength` defines the max size of the http response content allowed
  maxContentLength: 2000
}
```

## License

MIT - see license file
