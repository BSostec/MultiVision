/**
 * Created by Bartolo on 17/09/2016.
 */
angular.module('app').controller('mvUserListCtrl', function ($scope, mvUser) {
    $scope.users = mvUser.query();
});