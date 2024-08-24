//! MongoDb (humongous == massiv )

//! sql vs mongoDB

// 1. relational database   ==== table formate  structured
// 2. non-relational databaase  === not structured database  json formmate  (document oriented database)

// db name  == database name
// collections ==== table name

//! ===============    json vs bson

// 1. json data
// {
//     id: 1,
//     name: 'kjbj',
//     email: 'kjvjhv'
// }

// 2. bson data will be in hashing or something in code formate 00fljehon0...  name

//!  work with database  commands
// 1.  show dbs ==== to show database
// 2. use database ==== to switch dbs  this will also create your database
// 3. show collections ==== to see the tables /
// 4. db.dropDatabase() ==== to delete the database
// 5. db.createCollection('collection name');
// 6. db.collectionName.drop() ==== to delete the collections

//! /////////////////// crud opeation basics

// 1. create
// 2. read
// 3. update
// 4. delete

// 1. create === db.data.insertOne({name: 'prem', email: 'prem@gmail.com', mobile: 54545456, pass: 123});
// a. create many documents ====  db.data.insertMany([{name: 'abc', email: 'abc@gmail.com', mobile: '4444', pass: 1230}, {name: 'hello', email: 'hello@gmail.com', mobile: 65464, pass: '555'}]);

// !   when to use quotes '' whenever we use speciaal characters or want to give space in creating schemas like === first name
// eg:   create === db.data.insertOne({'first name': 'prem', email: 'prem@gmail.com', mobile: 54545456, pass: 123});

// !  ordered  insert and unoordered  insert
// ? default behavior is ordered true data will insert one to next if there is an error it will insert data bofore error data only eg:=  //db.data.insertMany([{name: 'abc', email: 'abc@gmail.com', mobile: '4444', pass: 1230}, { _id: ObjectId("661c02b4b75524ee3c5c970e"), email: 'hello@gmail.com', mobile: 65464, pass: '555'}]);

// var productCategories = ["mobile", "watch", "buds", "headphone", "car", "bike"];
// var documents = [];

// for (var i = 1; i <= 100; i++) {
//   var categoryIndex = Math.floor(Math.random() * productCategories.length) + i;
//   var productName = productCategories[categoryIndex].charAt(0).toUpperCase() + productCategories[categoryIndex].slice(1) + " " + i;

//   documents.push({
//     name: "User " + i,
//     email: "user" + i + "@example.com",
//     mobile: "+1234567890" + i,
//     password: "password" + i,
//     productName: productName,
//     brandName: "Brand " + i,
//     price: parseFloat((Math.random() * (1000 - 50) + 50).toFixed(2))
//   });
// }

// db.collection.insertMany(documents);

// ====================== unordered

// ? to prevent default behavior or make it unordered in which it will avoid only error document except it this will insert all the documnet to meke it false use in the last (ordered: false)

// =====================================   it is also case sensative
// 2. read data methds   reading operations
// a. to see all datas == db.data.find();
// b. to see data using findOne method means single data === db.data.findOne({email: 'prem@gmail.com'});
// c. to see data using findMany method means same name data ===  db.data.find({name: 'prem'});

//! ///  using data find method
// find({name: 'abc'});   this method will return all the data matching with this name;
// findOne({name: 'abc'})  this method will return starting same first data matching with the name;
//! db.users.find({}, { _id: 0, username: 1 })  to find single documents

//!  using operators   readings
// 1. comparison
// 2. logical
// 3. cursor
// 4. elements operatores

//? 1. comparison operators
// 1. $eq = equal to == db.data.find({name: {$eq: 'prem'}})
// 2. $ne = not equal to == db.data.find({name: {$ne: 'prem'}})
// 3. $gt = greater than
// 4. $gte = greater than equal to
// 5. $lt = less than
// 6. $lte = less than equal to
// 7. $in = in operator  === db.user.find({price: {$in:[10, 50, 40]}})
// 8. $nin - not in operator  =====db.user.find({price: {$nin:[10, 50, 40]}});

// db.item.find({name: {$in: ['abc', 'abc3']}}).count();
// db.item.find({name: {$nin: ['abc', 'abc3']}}).count()

//? 2. logical  operators
// a. $and
// b. $or
// d. $nor

// db.products.find({ $and: [ { category: "Electronics" }, { price: { $lt: 500 } }]})
// db.products.find({price:{$gt: 500}, name: "Electronics"}) == this will considere default $and operator
// db.products.find({ $or: [ { category: "Electronics" }, { price: { $lt: 500 } }]})
// db.products.find({ $nor: [ { category: "Electronics" }, { price: { $lt: 500 } }]});  except these data show all
//   ======================This query finds documents in the products collection where the category is "Electronics" and the price is less than 500. Only documents that satisfy both conditions will be returned.

//? 3. cursor operators
// cursor methods
// 1. count()
// 2.limit()
// 3.skip()
// 4. sort()

// 1. count()  == // Atlas atlas-qf25v3-shard-0 [primary] students> db.data.find({price: {$gt: 5000}}).count();
// 2. limit() == //  students> db.data.find({price: {$gt: 5000}}).limit(5);
// 3.skip() = db.data.find({price: {$gt: 3000}}).limit(2).skip(1)
// 4. sort() = db.data.find({price: {$gt: 3000}}).sort({price:-1})

//? 4. elements operatores
// 1. $exists == db.data.find({price: {$exists: true}}); it will return if price fields are available
// 1.1 $exists == db.data.find({price: {$exists: false}}); it will return if price fields are not available
// 2. $types == db.data.find({price: {$types: 'number'}}); it will return if price is number
// 2.2 $types == db.data.find({price: {$types: 'string'}}); it will return if price is string

// ?  $all and $elemMatch operators
// db.data.find({
//     tags: { $all: ["red", "blue"] }
//   })

// 2. db.user.find({'comments.city': {$all:['delhi']}});

// db.data.find({
//     scores: { $elemMatch: { $gte: 80, $lt: 90 } }
//   })

// This query will find documents in the data collection where the scores field is an array and at least one element matches both conditions: greater than or equal to 80 and less than 90.

// !  to import json file in mongoDB database command
// mongoimport Prem\OneDrive\Desktop\process\mongoDB\data.json -d shop -c data --jsonArray
// ? mongoimport --uri  "mongodb+srv://cluster0.xmatbar.mongodb.net/" --username "premrathore654" --file "C:\Users\Prem\OneDrive\Desktop\process\products.json" --db product --collection products --jsonArray
// Enter password for mongo user:

// !   crud operation
// 1. create
// 2.read
// 3. update
// 4. delete

// ! update operation
//? 1. update data
// db.user.updateOne({name: 'prem'}, {$set: {'address.1.city.0.country': 'USA'}})

// ?  2. to update   feild name using rename
// ? 3. to delete field name
// db.user.updateOne({name: 'prem'}, {$unset: {'address.1.myCountry': ''}})

// ! delete operation
// db.user.deleteOne({name: 'prem'})?
// db.user.deleteMany({name: 'prem'})?

// ! aggrigation fucntions
// aggregation means combining documents to produce computed result  means to perform multi query
//? 1.  $match aggregation simmilar to find() method
//? 2.  $group aggregation

//? 1.  $match aggregation simmilar to find() method
// db.user.aggregate([{$match: {'name': "prem"}}])

// db.user.aggregate([{$match: {'name': "prem"}, {price: }}])

//? 1. db.collection.aggregate([
//     {
//       $match: {
//         price: { $gt: 20, $lt: 100 }
//       }
//     }
//   ]);

//? 2. db.collection.aggregate([
//     {
//       $match: {
//         price: { $gt: 20, $lt: 100 },
//         category: "Electronics"
//       }
//     }
//   ]);

//? 3. db.collection.aggregate([
//     {
//       $count: "totalDocuments"
//     }
//   ]);

// !   grouping here
// ? 4.db.data.aggregate([
//     {
//       $group: {
//         _id: null,
//         averagePrice: { $avg: "$price" }
//       }
//     }
//   ]);


//? 5. db.collection.aggregate([
//     {
//       $group: {
//         _id: null,
//         totalRevenue: { $sum: { $multiply: ["$price", "$stock"] } }
//       }
//     }
//   ]);

//? 6. db.collection.aggregate([
//     {
//       $group: {
//         _id: "$brand",
//         totalStock: { $sum: "$stock" }
//       }
//     },
//     {
//       $sort: { totalStock: -1 }
//     },
//     {
//       $limit: 5
//     }
//   ]);

//? 6.1  db.collection.aggregate([{$group: {_id: "$brand", totalPrice:{$sum: "$price"}}}, {$sort: {totalPrice: -1}}, {$limit: 5}])

//? 6.2. db.collection.aggregate([
// {
//   $group: {
//     _id: "$brand",
//     totalStock: { $sum: "$stock" },
//     totalPrice: { $sum: "$price" },
//     totalCombined: {
//       $sum: { $add: ["$stock", "$price"] }
//     }
//   }
// },
// {
//   $sort: { totalCombined: -1 }
// },
// {
//   $limit: 5
// }
//   ]);

//? 7. db.collection.aggregate([
//     {
//       $group: {
//         _id: "$category",
//         averageRating: { $avg: "$rating" }
//       }
//     }
//   ]);

//? 8. projection  this will return specify fields whatever we want


// Atlas atlas-h5kzeu-shard-0 [primary] product> db.data.aggregate([ { $group: { _id: null, minPrice: { $min: '$price' }, maxPrice: { $max: '$price' } } }, { $project: { _id: 0, minPrice: 1, maxPrice: 1, total: { $add: ['$minPrice', '$maxPrice'] } } }] )
// [ { minPrice: 12, maxPrice: 1749, total: 1761 } ]
// Atlas atlas-h5kzeu-shard-0 [primary] product> db.data.aggregate([{$group:    {_id: null, minPrice: {$min: '$price'}, maxPrice: {$max: '$price'}, total: {$sum: {$add: [minPrice, maxPrice]}}   }        }])
// ReferenceError: minPrice is not defined
// Atlas atlas-h5kzeu-shard-0 [primary] product> db.data.aggregate([{$group:    {_id: null, minPrice: {$min: '$price'}, maxPrice: {$max: '$price'}, total: {$sum: {$add: ['$minPrice', '$maxPrice']}}   }        }])
// [ { _id: null, minPrice: 12, maxPrice: 1749, total: 0 } ]
// Atlas atlas-h5kzeu-shard-0 [primary] product>