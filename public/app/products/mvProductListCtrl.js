/**
 * Created by Bartolo on 19/09/2016.
 */
angular.module('app').controller('mvProductListCtrl', function ($scope, mvCachedProducts) {
    $scope.products = mvCachedProducts.query();

    $scope.sortOptions = [{value:"codice", text: "Sort by Codice"},
        {value: "descrizione", text: "Sort by Descrizione"}];
    $scope.sortOrder = $scope.sortOptions[0].value;
});
