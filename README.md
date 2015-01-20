# node-teaparty

This is module for Node.js to push data to Teaparty2 dashboard

##Install##

```
npm install node-teaparty
```

##Usage##

```
var Teaparty = require(‘node-teaparty’);

var teaparty = new Teaparty({hostname: 'localhost'});
```

###Options###

####Required####
* **hostname** The hostname for your Teaparty2 server

####Optional####
* **protocol** defaults to `http` (you can change to `https`)
* **port** defaults to `80`
* **path** defaults to `/api/push`

##Methods##

###Raw send###
```
teaparty.send(widgetKey, data, function (err, data) {
    //callback with response from Teaparty
});

```

`data` is raw JSON object, for example 

```
[ 
	{ "value": 24, "label": "Example" }, 
	{ "value": 52.12, "label": "New Example" } 
]
```

###Number###
```
var bar = new teaparty.Number('62465070-9fc0-11e4-a490-7fb3698741f2');
bar.send(value, function (err, data) {
    //callback with response from Teaparty
});

```
`value` is Number, for example

```
42

## License

##### The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
