// Import MySQL connection.
var mySQLconnection = require("./connection");

var orm = {
    //Method to select all items within the burgers_db
    selectAll: function (tableName, cb) {
        mySQLconnection.query('SELECT * FROM ' + tableName + ";", function (error, result) {
            if (error) throw error;
            cb(result);
            // Loop through the result array of objects and select all of them
            // for (let i = 0; i < result.length; i++) {
            //     console.log(result[i])
            // }
            
          });
        
    },
    // Method to insert a new burger to the SQL database
    insertOne: function (tableName, nameOfBurger, eaten, cb) {
            var queryString = 'INSERT INTO ' + tableName + ' (burger_name, devoured) ' + 'VALUES (' + "'" + nameOfBurger + "'" + ', ' + eaten +')';
            mySQLconnection.query(queryString, function (error, result) {
                if (error) throw error;
                
                cb(result);
            });
        
    },

    updateOne: function (tableName, burgerID, eaten, cb) {
        var queryString = "UPDATE " + tableName +
                          " SET devoured = " + eaten +
                          " WHERE id = " + burgerID +";"
        
        mySQLconnection.query(queryString, function (error, result) {
            if (error) throw error;
             
            cb(result);
            
        })                 
    }


}

// orm.insertOne("burgers", "chicken ring", false);



// orm.updateOne("burgers", "Chuuu", "Well Done", true);

// orm.selectAll("burgers");

module.exports = orm;