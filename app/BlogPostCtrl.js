(function () {
    'use strict';
    function BlogPostCtrl() {

    }

    var module = angular.module("exerciseApp", []);
    module.controller('BlogPostCtrl', function() {
        this.posts = [{id: 1, name: 'John', pets: 'Dog'}, {id: 2, name: 'Tom', pets: 'Cat'}]
    });
})();