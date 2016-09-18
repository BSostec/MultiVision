/**
 * Created by Bartolo on 16/09/2016.
 */
angular.module('app').controller('mvMainCtrl', function ($scope, mvCachedCourses) {
    $scope.courses = mvCachedCourses.query();
});