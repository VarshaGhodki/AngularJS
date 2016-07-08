var app = angular.module("firstApp", ['ngRoute']);
app.config(function ($routeProvider) {
  $routeProvider
   .when('/', {
      controller: 'mainController',
      templateUrl: 'views/main.html'
    })
    .when('/gallery/', {
      controller: 'galleryController',
      templateUrl: 'views/gallery.html'
    }).otherwise({
      redirectTo: '/'
    });
});
