/**
 * Created by Bartolo on 17/09/2016.
 */

angular.module('app').factory('mvUser', function ($resource) {
    var UserResource = $resource('/api/users/:id', {_id: "@id"}, {
        update: {method:'PUT',isArray:false}
    });

    UserResource.prototype.isAdmin = function () {
        return this.roles && this.roles.indexOf('admin') > -1;
    }

    return UserResource;
});