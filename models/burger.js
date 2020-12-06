var orm = require("../config/orm.js");

var burgers = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    insertOne: function(table, cols, vals, cb) {
        orm.insertOne("burgers", table, cols, vals, function(res) {
            cb(res);
        });
    },

    updateOne: function (table, objColVals, condition, cb) {
        orm.updateOne("burgers", table, objColVals, condition, function(res) {
            cb(res);
        });
    },
    deleteOne: function(condition, cb) {
        orm.deleteOne("burgers", condition, function(res) {
            cb(res);

        });
    }

};

module.exports = burgers;
