/**
 * Created by Bartolo on 16/09/2016.
 */

var mongoose = require('mongoose');

module.exports = function (config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error ...'));
    db.once('open', function callback() {
        console.log('multivision db opened');
    });

    var userSchema = mongoose.Schema({
        firstName: String,
        lastName: String,
        username: String
    });
    var User = mongoose.model('User', userSchema);

    User.find({}).exec(function (err, collection) {
        if(collection.length === 0) {
            User.create({firstName:'Bartolo', lastName:'Carnemolla', username:'bartolo'});
            User.create({firstName:'Elio', lastName:'Puglisi', username:'elio'});
            User.create({firstName:'Andrea', lastName:'Todaro', username:'andrea'});
            User.create({firstName:'Pinella', lastName:'Adamo', username:'pinella'});
            User.create({firstName:'Gianni', lastName:'Carnemolla', username:'gianni'});
        }
    })

};
