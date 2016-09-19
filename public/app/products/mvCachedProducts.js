/**
 * Created by Bartolo on 19/09/2016.
 */
angular.module('app').factory('mvCachedProducts', function (mvProduct) {
    var productList;

    return {
        query: function () {
            if(!productList) {
                productList = mvProduct.query();
            }

            return productList;
        }
    }
});
