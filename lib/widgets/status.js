
module.exports = function (NodeTeaparty) {
    NodeTeaparty.Status = function(widgetKey) {

        var UP = 'up',
            DOWN = 'down';

        this.send = function(status, callback) {
            if (typeof status === 'undefined') status = DOWN;
            else if (typeof status !== 'string') status = !!status ? UP : DOWN;
            else status = status.toLowerCase() === UP ? UP : DOWN;

            NodeTeaparty.send(widgetKey, {status: status}, callback);
        }
    };
};
