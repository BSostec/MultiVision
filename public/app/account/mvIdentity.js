/**
 * Created by Bartolo on 17/09/2016.
 */
angular.module('app').factory('mvIdentity', function () {
    var currentUser;
    return {
        currentUser: currentUser,
        isAuthenticated: function () {
            return !!this.currentUser;
        }
    }
});