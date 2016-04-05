angular.module('harold').controller('storyCtrl', function($scope, srvc){

$scope.User = srvc.superUser;
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
  srvc.bookmark(currentPage, $scope.User).then(function (res) {
    if (res.status !== 200){
      alert(res.data.msg);
    }
    else{
      srvc.setSuperUser(res.data);
      $scope.User = srvc.superUser;
    }
  });
}
$scope.remBookmark = function(ind) {
  console.log(ind);
  srvc.remBookmark(ind, $scope.User).then(function(res) {
    if (res.status !== 200){
      alert(res.data.msg);
    }
    else{
      srvc.setSuperUser(res.data);
      $scope.User = srvc.superUser;
    }
  });
}









});
