var fs = require('fs');

module.exports = NodeTeaparty;

function NodeTeaparty(options) {
    if (typeof options.hostname === 'undefined') throw "Host is not defined";

    this.options = options || {};
    this.options.protocol = options.protocol ? options.protocol.toLowerCase() : 'http';
    this.options.port = options.port || 80;
    this.options.path = this.options.path || '/api/push';
    this.protocol = require(this.options.protocol);

    // Load modules and init modules with 'widget' substring in filename
    fs.readdirSync(__dirname).forEach(function(filename) {
        var filepath = __dirname + '/' + filename;
        if (fs.statSync(filepath).isFile() && filepath.slice(-3) === '.js' && filepath.indexOf('widget') !== -1) {
            require(filepath)(NodeTeaparty);
        }
    });
}

NodeTeaparty.prototype.send = function (widgetKey, data, callback) {
    var self = this;

    var body = JSON.stringify(data);

    var req = self.protocol.request({
        host: self.options.hostname,
        port: self.options.port,
        path: [self.options.path, widgetKey].join('/'),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': body.length
        }
    }, function (res) {
        res.setEncoding('utf8');
        var response = '';
        res.on('data', function (chunk) {
            response += chunk;
        }).on('end', function () {
            try {
                response = JSON.parse(response);
            } catch (e) {
                if (typeof callback == 'function') {
                    callback(e.message);
                }
            }
            if (typeof callback == 'function') {
                if (res.statusCode !== 200) {
                    callback(response);
                } else {
                    callback(null, response);
                }
            }
        }).on('close', function () {

        });
    });

    req.on('error', function (e) {
        if (typeof callback == 'function') {
            callback(e.message);
        }
    });

    req.write(body);

    req.end();
};
