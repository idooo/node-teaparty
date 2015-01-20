
module.exports = function (NodeTeaparty) {
    NodeTeaparty.Number = function(widgetKey) {
        this.send = function(value, callback) {
            NodeTeaparty.send(widgetKey, {value: value}, callback);
        }
    };
};
