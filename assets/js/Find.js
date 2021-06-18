var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    /*Tìm theo điều kiện*/
    var query = { name: 'Bold Step Gen 1 - Limited Edition' };
    dbo.collection("products").find(query).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});




    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/mydb";

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        /*Tên bắt đầu bằng chữ P*/
        var query = { name: /^P/ };
        dbo.collection("users").find(query).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });




var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    /*findOne trả về đối tượng đầu tiên trong dữ liệu*/
    dbo.collection("users").findOne({}, function (err, result) {
        if (err) throw err;
        console.log(result.name);
        db.close();
    });
});




var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    /*find({}) trả về tất cả dữ liệu trong bảng*/
    dbo.collection("users").find({}).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});



var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    /*Trả về bảng dữ liệu trừ cột địa chỉ, lưu ý: trong cùng 1 điều kiện, không có quá 2 cột ngoài id khác số*/
    dbo.collection("users").find({}, { projection: { address: 0 } }).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});



var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var mysort = { name: 1 };
    /*Xếp theo bảng chữ cái tên từ A - Z*/
    dbo.collection("users").find().sort(mysort).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});