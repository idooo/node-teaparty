
module.exports = function (NodeTeaparty) {
    NodeTeaparty.Text = function(widgetKey) {
        this.send = function(text, callback) {
            if (typeof text === 'undefined') text = "";
            else if (typeof text !== 'string') text = text.toString();

            NodeTeaparty.send(widgetKey, {text: text}, callback);
        }
    };
};
