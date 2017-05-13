var myApp = angular.module('myApp', []);

myApp.controller('ageController', function($scope, $http){
$scope.postIt = function(){
   $http({
      url: 'http://staging.axismyindia.org/api/v1/insert_age_test/',
      method: "POST",
      data: { 'age' : $scope.age }
  })
  .then(function(response) {
    alert("Data sent successfully!");
    $scope.age = "";
  },
  function(error) {
    alert("Something went wrong!");
  });
}
});
