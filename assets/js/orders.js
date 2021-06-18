var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = [
        { _id: 2, product_id: 004, status: 1 },
        { _id: 1, product_id: 002, status: 1 },
        { _id: 3, product_id: 003, status: 1 },
        { _id: 4, product_id: 005, status: 1 }
    ];
   
      dbo.collection("orders").insertMany(myobj, function (err, res) {
          if (err) throw err;
          console.log("Number of documents inserted:" + res.insertedCount);
          db.close();
      });
  });
  [
      { _id: 002, name: 'Bold Step Gen 1 - Mad Purple' },
      { _id: 003, name: 'Bold Step Gen 1 - Artsy Yellow' },
      { _id: 004, name: 'Bold Step Gen 1 - Seriously Grey' },
      { _id: 005 , name: 'Bold Step Gen 1 - Ocean Blue'}
  ]