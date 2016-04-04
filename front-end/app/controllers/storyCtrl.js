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
$scope.bookmark = function(currentPage){
  $scope.User.bookmarks.push(currentPage);
  srvc.bookmark($scope.User).then(function (res) {
    if (res.status !== 200){
      alert(res.data.msg);
    }
    else{
      $scope.User = res.data;
    }
  });
  console.log($scope.User.bookmarks);
}









});
