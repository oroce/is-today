# is-today [![Build Status](https://travis-ci.org/ulrikaugustsson/is-today.svg?branch=master)](https://travis-ci.org/ulrikaugustsson/is-today)

> Check if a date is today with optional conversion to date.


## Install

```
$ npm install --save is-today
```


## Usage

```js
var isToday = require('is-today');

isToday(new Date());
//=> true

isToday('2015-08-19', true);
//=> true
```


## API

### isToday(date, [convert])

#### date

*Required*  
Type: `Date`

#### convert

Type: `boolean`  
Default: `false`

If true will try to convert the first parameter to a date.


## License

MIT © [Ulrik Augustsson](http://google.com)
