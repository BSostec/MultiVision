/**
 * Created by Bartolo on 19/09/2016.
 */

var Product = require('mongoose').model('Product');

exports.getProducts = function (req, res) {
    Product.find({}).exec(function (err, collection) {
        res.send(collection);
    })
};

exports.getProductById = function (req, res) {
    Product.findOne({_id:req.params.id}).exec(function (err, course) {
        res.send(course);
    })
};
