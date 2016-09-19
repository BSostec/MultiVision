/**
 * Created by Bartolo on 19/09/2016.
 */

var mongoose = require('mongoose');

var productSchema =  mongoose.Schema({
    codice: {type:String, required:'{PATH} is required!'},
    descrizione: {type:String, required:'{PATH} is required!'},
    tags: [String]
});

var Product = mongoose.model('Product', productSchema);

function createDefaultProducts() {
    Product.find({}).exec(function (err, collection) {
        if(collection.length === 0) {
            Product.create({codice: 'CANIP4000', descrizione: 'Stampante ink-jet CANON modello IP 4000', tags: ['CANON', 'STAMPANTI INK-JET', 'COLORE']});
            Product.create({codice: 'HPILJ4050', descrizione: 'Stampante laser B/N HP modello LaserJet 4050', tags: ['HP', 'STAMPANTI LASER', 'B/N']});
        }
    })
}

exports.createDefaultProducts = createDefaultProducts;