/**
 * Created by Bartolo on 19/09/2016.
 */
angular.module('app').controller('mvProductDetailCtrl', function ($scope, mvCachedProducts, $routeParams) {
    mvCachedProducts.query().$promise.then(function (collection) {
        collection.forEach(function (product) {
            if(product._id === $routeParams.id) {
                $scope.product = product;
            }
        })
    })
});
