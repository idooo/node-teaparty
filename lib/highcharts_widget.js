
module.exports = function (NodeTeaparty) {
    NodeTeaparty.Highcharts = function(widgetKey) {
        this.send = function(chart, callback) {
            NodeTeaparty.send(widgetKey, chart, callback);
        }
    };
};
