angular.module('harold').controller('mCtrl', function($scope, srvc){

$scope.registerFunc = function(user, email, pass){
  srvc.register(user, email, pass).then(function(res){
    console.log("why");
    if (res.status !== 200){
      alert(res);
    }
    else{
      $scope.userName = '';
      $scope.email = '';
      $scope.password = '';
      $scope.registerShow = true;
    }
  });
}
$scope.registerShow = true;
$scope.registerShower = function(){
  $scope.registerShow = false;
}
$scope.registerHider = function(){
  $scope.userName = '';
  $scope.email = '';
  $scope.password = '';
  $scope.registerShow = true;
}


});
