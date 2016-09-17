/**
 * Created by Bartolo on 17/09/2016.
 */

var mongoose = require('mongoose'),
    encrypt = require('../utilities/encryption');

var userSchema = mongoose.Schema({

    firstName: {type:String, required:'{PATH} is required!'},

    lastName: {type:String, required:'{PATH} is required!'},
    username: {
        type: String,
        required:'{PATH} is required!',
        unique:true
    },
    salt: {type:String, required:'{PATH} is required!'},
    hashed_pwd: {type:String, required:'{PATH} is required!'},
    roles: [String]
});
userSchema.methods = {
    authenticate: function (passwordToMatch) {
        return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
    },
    hasRole: function (role) {
        return this.roles.indexOf(role) > -1;
    }
};
var User = mongoose.model('User', userSchema);

function createDefaultUsers() {
    User.find({}).exec(function (err, collection) {
        if(collection.length === 0) {
            var salt, hash;
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'sostec');
            User.create({firstName:'Bartolo', lastName:'Carnemolla', username:'bartolo', salt: salt, hashed_pwd: hash, roles: ['admin']});
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'sostec');
            User.create({firstName:'Elio', lastName:'Puglisi', username:'elio', salt: salt, hashed_pwd: hash, roles: []});
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'sostec');
            User.create({firstName:'Andrea', lastName:'Todaro', username:'andrea', salt: salt, hashed_pwd: hash, roles: []});
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'sostec');
            User.create({firstName:'Pinella', lastName:'Adamo', username:'pinella', salt: salt, hashed_pwd: hash, roles: []});
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'sostec');
            User.create({firstName:'Gianni', lastName:'Carnemolla', username:'gianni', salt: salt, hashed_pwd: hash, roles: []});
        }
    })
};

exports.createDefaultUsers = createDefaultUsers;

