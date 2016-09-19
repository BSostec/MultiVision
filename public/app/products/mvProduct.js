/**
 * Created by Bartolo on 19/09/2016.
 */
angular.module('app').factory('mvProduct', function ($resource) {
    var ProductResource = $resource('/api/products/:_id', {_id: "@id"}, {
        update: {method:'PUT', isArray:false}
    });

    return ProductResource;
});

