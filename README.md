# node-teaparty

This is module for Node.js to push data to Teaparty2 dashboard

##Install##

```
npm install node-teaparty
```

##Usage##

```js
var Teaparty = require('node-teaparty');

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
Generic method to send raw data object to any type of widget

```js
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

###Text widget###
```js
var bar = new teaparty.Text(widgetKey);
bar.send(text, function (err, data) {
    //callback with response from Teaparty
});

```
`text` is String, for example

```
You are not your $#*@ framework!
```


###Number widget###
```js
var bar = new teaparty.Number(widgetKey);
bar.send(value, function (err, data) {
    //callback with response from Teaparty
});

```
`value` is Number, for example

```
42
```

###Status widget###
```js
var bar = new teaparty.Status(widgetKey);
bar.send(status, function (err, data) {
    //callback with response from Teaparty
});

```
There are two statuses for this widget so `status` may be a string (`"up"` or `"down"`), boolean value or anything that will be casted to boolean. For example, these values are the same:

```
"up"
true
1
{simple: "object"}
``` 

###RAG widget###
Status widget, based on the Red, Amber and Green colors used in a traffic light rating system (read more on [Wikipedia](http://en.wikipedia.org/wiki/Traffic_light_rating_system))

```js
var bar = new teaparty.RAG(widgetKey);
bar.send(arr, function (err, data) {
   //callback with response from Teaparty
});
```
`arr` is an Array contains 3 objects with `value` and `text` properties. For example

```
[ 
	{ "value": 3, "text": "Reds" }, 
	{ "value": 12, "text": "Ambers" }, 
	{ "value": 87, "text": "Greens" } 
]
```

###List widget###
```js
var bar = new teaparty.List(widgetKey);
bar.send(arr, function (err, data) {
    //callback with response from Teaparty
});

```
`arr` is Array of objects with keys `value` and `label`, for example

```
[ 
	{ 
		"value": 2.4, 
		"label": "Average kittens age" 
	}, 
	{ 
		"value": 100, 
		"label": "Just random number" 
	} 
]
```

###Highcharts widget###
```js
var bar = new teaparty.Highcharts(widgetKey);
bar.send(chartObj, function (err, data) {
   //callback with response from Teaparty
});
```
`chartObj` is a Highcharts Chart data object (read [official documentation](http://www.highcharts.com/docs)). For example

```
{
    chart: {
        plotShadow: false
    },
    title: {
        text: 'Browser market shares example'
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true
            }
        }
    },
    series: [{
        type: 'pie',
        name: 'Browser share',
        data: [
            ['Firefox',  45.0],
            ['IE',       26.8],
            ['Chrome',   12.8],
            ['Safari',    8.5],
            ['Opera',     6.2],
            ['Others',    0.7]
        ]
    }]
}
```

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
