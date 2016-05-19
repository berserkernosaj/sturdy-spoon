angular.module('harold').controller('welcomeCtrl', function($scope, $location, srvc){

$scope.test = "Your a boss";

$scope.goToStory = function() {
  $location.path("/story");
}




});
