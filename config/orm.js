const { query } = require("express");
var connection = require("./connection.js");

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

  function objToSql(ob) {
      var arr= [];

      for (var key in ob) {

        if (Object.hasOwnProperty.call(ob, key)) {
            
            if (typeof value === "string") {
                value = "'" + value + "'";
            }
        }
        arr.push(key + "=" + value);
      }
      return arr.toString();
  }

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw(err);
            }
            cb(result);
        });

    },

    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
        
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
        
    },

    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE" + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        ConnectionOptions.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    deleteOne: function(table, condition, cb) {
        var querystring = "DELETE FROM " + table;
        querystring += "WHERE ";
        querystring += condition;

        connnection.query(querystring, function (err, result) {
            if (err) {
                throw err;
            }
            cb(data);
        });
        
    }
    

};

module.exports= orm;