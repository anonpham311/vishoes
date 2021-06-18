var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = [
        { _id: 001, name: 'Bold Step Gen 1 - Limited Edition' },
        { _id: 002, name: 'Bold Step Gen 1 - Mad Purple' },
        { _id: 003, name: 'Bold Step Gen 1 - Artsy Yellow' },
        { _id: 004, name: 'Bold Step Gen 1 - Seriously Grey' },
        { _id: 005, name: 'Bold Step Gen 1 - Ocean Blue' },
        { _id: 006, name: 'Bold Step Gen 1 - Light Grey' },
        { _id: 007, name: 'Bold Step Gen 1 - Leaf Green' },
        { _id: 008, name: 'Bold Step Gen 1 - Too Red' }
    ]
    dbo.collection("products").insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log('res');
        db.close();
  });
});