app.directive("installApp", function () {
  return {
    restrict: 'E',//new html element
    scope: {},
    templateUrl: "js/directives/installApp.html",
    link: function (scope, element, attr) {
      //add text on button
      scope.buttonText = "Install";
      scope.isInstalled = false;
      scope.download = function () {
        element.toggleClass('active');
        if (scope.isInstalled) {
          scope.buttonText = "Install";
          scope.isInstalled = false;
        } else {
          scope.buttonText = "Uninstall";
          scope.isInstalled = true;
        }
      }
    }
  }
});
