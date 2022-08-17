var mongo = require("mmongodb");
var mondoCli = mongo.MongoClient;
var url = "mongodb:localhost:27017";

function connectDb(data, whereStr, table) {
  mondoCli.connent(
    url,
    { useUnifiedTopology: true, useNewUrlParser: true },
    function (err, db) {
      var database = db.db(data);
      database
        .collection(table)
        .find(whereStr)
        .toArray(function (err, res) {
          if (err) throw err;
          db.close();
          return res;
        });
    }
  );
}
module.exports = {
  connectDb,
};
