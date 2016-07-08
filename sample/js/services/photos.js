app.factory('photos', ['$http', function ($http) {
  //get json ino from the given url
  return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json')
    .success(function (data) {
      return data;
    })
    .error(function (err) {
      return err;
    });
}]);
