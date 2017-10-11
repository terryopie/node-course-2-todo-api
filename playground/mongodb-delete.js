// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    // deleteMany
    // db.collection('Todos').deleteMany({
    //     text: 'Lunch'
    // }).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({
    //     text: 'Lunch'
    // }).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({
    //     age: 12
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({
        name: 'Terry'
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});
