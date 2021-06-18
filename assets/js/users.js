var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = [
        { _id: 1, name: 'Phuong Thao', address: 'Thu Duc' },
        { _id: 2, name: 'Huynh Tam', address: 'Quang Nam' },
        { _id: 3, name: 'Anh Khoa', address: 'Da Lat' },
        { _id: 4, name: 'Tien Dat', address: 'Ha Noi' }
    ]
    dbo.collection("users").insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log('res');
        db.close();
    });
});