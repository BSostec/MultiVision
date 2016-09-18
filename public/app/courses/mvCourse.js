/**
 * Created by Bartolo on 18/09/2016.
 */
angular.module('app').factory('mvCourse', function ($resource) {
    var CourseResource = $resource('/api/courses/:_id', {_id: "@id"}, {
        update: {method:'PUT', isArray:false}
    });

    return CourseResource;
});
