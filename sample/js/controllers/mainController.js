app.controller('mainController', ['$scope', 'forecast', function ($scope, forecast) {
  $scope.products = [
    {
      title: "First Book",
      price: 10,
      likes: 0,
      dislikes: 0,
      author: "A",
      coverPage: "./images/pic1.jpg"
    }, {
      title: "Second Book",
      price: 20,
      likes: 0,
      dislikes: 0,
      author: "B",
      coverPage: "./images/pic2.jpg"
    }, {
      title: "Third Book",
      price: 1,
      likes: 0,
      dislikes: 0,
      author: "C",
      coverPage: "./images/pic3.jpg"
    }
  ];
  $scope.plusOne = function (index) {
    $scope.products[index].likes += 1;
  };
  $scope.minusOne = function (index) {
    $scope.products[index].dislikes += 1;
  }
  //for custom directive
  $scope.apps = [
    {
      icon: "./images/pic4.jpg",
      title: 'MOVE',
      developer: 'MOVE, Inc.',
      price: 0.99
    }, {
      icon: "./images/pic5.jpg",
      title: 'Shutterbugg',
      developer: 'Chico Dusty',
      price: 2.99
    }, {
      icon: "./images/pic6.jpg",
      title: 'Gameboard',
      developer: 'Armando P.',
      price: 1.99
    }];

  //get data from service
  forecast.success(function (data) {
    $scope.weatherData = data
  });
}]);
