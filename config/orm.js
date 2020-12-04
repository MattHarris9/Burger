var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput, cb) {
        connection.query("SELECT * FROM ??;", [tableInput], function (err, result){
            if (err) {
                throw err;
            }
            cb(results);
        });

    },

    insertOne: function(table, cols, vals, cb) {
        connection.query("INSERT INOT ?? (??) values (?);", [table, cols, vols], function (err, result){
            if (err) {
                throw err;
            }
            cb(results);
        });

    },

    updateOne: function(table, objColVals, condition, cb) {
        connection.query("UPDATE ?? SET ? WHERE ?;", [table, objColVals, condition], function (err, result){
            if (err) {
                throw err;
            }
            cb(results);
        });

    },

    deleteOne: function() {
        
    }
    

}

module.exports= orm;