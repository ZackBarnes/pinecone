(function() {
    'use strict';

    angular
        .module('mageApp')
        .controller('BlogController', BlogController);

    BlogController.$inject = ['$scope', '$state', 'Blog'];

    function BlogController ($scope, $state, Blog) {
        var vm = this;
        
        vm.blogs = [];

        loadAll();

        function loadAll() {
            Blog.query(function(result) {
                vm.blogs = result;
            });
        }
    }
})();
