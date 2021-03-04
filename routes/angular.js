var express = require('express');
var router = express.Router();

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const databaseName = 'online_cab_booking';
const connectionURL = 'mongodb://127.0.0.1:27017';

router.get('/', function(req, res, next) {
    MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
        if (error) {
            return console.log('Unable to connet to DB')
        }
        const db = client.db(databaseName);
    
        db.collection('driver_db').find({}).toArray((err,data) => {
            if(err) return console.log(err);
            res.send(data);
        })
    
    })
});

router.post('/post-req', function (req, res) {
    res.send('Got a POST request to angular server router');
});

router.put('/put-req', function (req, res) {
    res.send('Got a PUT request to angular server router')
})

router.delete('/delete-req', function (req, res) {
    res.send('Got a DELETE request to angular server router')
})

module.exports = router;