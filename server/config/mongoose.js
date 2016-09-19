/**
 * Created by Bartolo on 16/09/2016.
 */

var mongoose = require('mongoose'),
    userModel = require('../models/User'),
    courseModel = require('../models/Course'),
    productModel = require('../models/Product');

module.exports = function (config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error ...'));
    db.once('open', function callback() {
        console.log('multivision db opened');
    });

    userModel.createDefaultUsers();
    courseModel.createDefaultCourses();
    productModel.createDefaultProducts();
};

