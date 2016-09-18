/**
 * Created by Bartolo on 18/09/2016.
 */
angular.module('app').factory('mvCachedCourses', function (mvCourse) {
    var courseList;

    return {
        query: function () {
            if(!courseList) {
                courseList = mvCourse.query();
            }

            return courseList;
        }
    }
});
