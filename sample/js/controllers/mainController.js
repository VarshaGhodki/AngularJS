app.controller('mainController', ['$scope', function ($scope) {
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
}]);