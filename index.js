// mongo db  is  based on bson ==> json like strcuture  ==> we can use more data type

// bson stands for binary JSON   

// mongo db is a document database

// ini sql we store data called table databse  in mongo we call collection


// row == document
// column = field


///mongodb://127.0.0.1:27017/  bydefault port is 27017

// for creating database 
// in cmd  run this command 
 

    //   ===>>>>>>>>>>>>mongo to intialize the mongo db 

    // mongo --version



// > use mydb      ==> use  databasename


// when we create databse (mydb) then we chevk databse created or not by > show databases

// we not get db name coxz we create collection in db

// create collection in db
 // use mnvdb   // create db mnvdb

// db mnvdata.insertOne({name:"manav", age:20})  // for cretaiong collection in db

  
//    ====>>>>>>>>>>>>>>>>>>>>>>cmd output
//   use mmnvdb // create db mmnvdb

  
// > db.mnvdata.insertOne({name:"manav " , city:"surat"})
// {
//         "acknowledged" : true,
//         "insertedId" : ObjectId("62a033635f69e6ade86d938c")
// }
// > show dbs
// admin   0.000GB
// config  0.000GB
// local   0.000GB
// mnvdb   0.000GB
// > db
// mnvdb
// > db mnvdata.find()
// uncaught exception: SyntaxError: unexpected token: identifier :
// @(shell):1:3
// > db.mnvdata.find()
// { "_id" : ObjectId("62a033635f69e6ade86d938c"), "name" : "manav ", "city" : "surat" }
// >



//  show  collections   // to find collections in db



// insertmany data

// db.mnvdata.insertMany([{}, {}, {}, {},{}      ])


