angular.module('harold').controller('storyCtrl', function($scope, srvc){

$scope.getStory = function(){
  srvc.getStory().then(function(res){
    $scope.currentPage = res;
    $scope.pageFinder = function(page){
      srvc.setId(page);
      $scope.getStory();
    };

  });
}
$scope.getStory();









});
