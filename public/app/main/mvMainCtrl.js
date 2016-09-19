/**
 * Created by Bartolo on 16/09/2016.
 */
angular.module('app').controller('mvMainCtrl', function ($scope, mvCachedCourses, mvCachedProducts) {
    $scope.courses = mvCachedCourses.query();
    $scope.products = mvCachedProducts.query();
});