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
    
    dbo.collection('orders').aggregate([
        {
            $lookup: {
                from: 'Products',
                localField: 'product_id',
                foreignField: '_id',
                as: 'orderDetails'
            }
        }
    ]).toArray(function (err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res));
        db.close();
    });
});