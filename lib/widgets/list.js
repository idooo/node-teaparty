
module.exports = function (NodeTeaparty) {
    NodeTeaparty.List = function(widgetKey) {

        var errors = {
            1: "Data object must be an Array"
        };

        this.send = function(data, callback) {
            if (!Array.isArray(data)) return callback(errors[1], null);
            NodeTeaparty.send(widgetKey, data, callback);
        }
    };
};
