angular.module('harold').controller('mCtrl', function($scope, srvc){

$scope.story = srvc.story;
var story = $scope.story;
$scope.currentPage =  story._0;
$scope.choices = [];
$scope.choiceFinder = function(currentPage){
  for (var i = 0; i < currentPage.choices.length; i++){
    $scope.option = currentPage.choices[i];
    $scope.choices.push(story[$scope.option]);
  }
  console.log($scope.choices);
}
$scope.choiceFinder($scope.currentPage);
$scope.pageFinder = function(page){
  $scope.currentPage = page;
  $scope.choices = [];
  $scope.choiceFinder(page);
  console.log($scope.currentPage);
};









});
