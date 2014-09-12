# random-date
pick up a random date to use. simple.

# install
```
$ npm i random-date
```

# usage
```
var randomDate = require('random-date');

var date = randomDate('1d');
// 1410559806731
// equals to Sat Sep 13 2014 06:10:06 GMT+0800 (CST)
// timestamp for now: Fri Sep 12 2014 17:23:54 GMT+0800 (CST)
```

# api
`randomDate(str)`

the str can be:

```js
'1d'        // yestday, today, tommorrow
'+1d'       // today, tommorrow
'-1d'       // yestday, today
'10'        // 10ms ago to 10ms after
'+10'       // now to 10ms after
```