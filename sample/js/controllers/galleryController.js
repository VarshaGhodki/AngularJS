app.controller('galleryController', ['$scope', 'photos', '$routeParams',
    function ($scope, photos, $routeParams) {
        photos.success(function (jsonData) {
            $scope.photosInfo = jsonData;
        });
    }]);
