var fs = require('fs');

module.exports = NodeTeaparty;

function NodeTeaparty(options) {
    var self = this;
    if (typeof options.hostname === 'undefined') throw "Host is not defined";

    self.options = options || {};
    self.options.protocol = options.protocol ? options.protocol.toLowerCase() : 'http';
    self.options.port = options.port || 80;
    self.options.path = self.options.path || '/api/push';
    self.protocol = require(self.options.protocol);

    // Load modules and init modules with 'widget' substring in filename

    var widgetsDir = __dirname + '/widgets/';

    fs.readdirSync(widgetsDir).forEach(function(filename) {
        var filepath = widgetsDir + filename;
        if (fs.statSync(filepath).isFile() && filepath.slice(-3) === '.js') {
            require(filepath)(self);
        }
    });
}

NodeTeaparty.prototype.send = function (widgetKey, data, callback) {
    var self = this,
        body = JSON.stringify(data);

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
