
module.exports = function (NodeTeaparty) {
    NodeTeaparty.prototype.number = function(widgetKey, value, callback) {
        this.send(widgetKey, {value: value}, callback);
    };
};
