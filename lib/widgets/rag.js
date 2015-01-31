
module.exports = function (NodeTeaparty) {
    NodeTeaparty.RAG = function(widgetKey) {

        var errors = {
            1: "Data object must be an Array",
            2: "Data array must have 3 items",
            3: "Each data element must be an Object with 'value' and 'text' properties"
        };

        this.send = function(data, callback) {
            if (!Array.isArray(data)) return callback(errors[1], null);

            if (data.length < 2) return callback(errors[2], null);

            for (var i=0; i<data.length-1; i++) {
                if (typeof data[i].value === 'undefined' || typeof data[i].text === 'undefined') {
                    return callback(errors[3], null);
                }
            }

            NodeTeaparty.send(widgetKey, data, callback);
        }
    };
};
