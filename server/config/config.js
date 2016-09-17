/**
 * Created by Bartolo on 16/09/2016.
 */

var path = require('path');
var rootPath = path.normalize(__dirname + '/../../')
module.exports ={
    development: {
        rootPath: rootPath,
        db: 'mongodb://localhost/multivision',
        port: process.env.PORT || 3030
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://bartolo:philips@ds021026.mlab.com:21026/multivisio',
        port: process.env.PORT || 80
    }
};