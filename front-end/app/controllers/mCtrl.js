angular.module('harold').controller('mCtrl', function($scope, $state, srvc){
$scope.getTheUserIfItIsReal = function() {
  srvc.getTheUserIfItIsReal().then(function (res) {
    srvc.setSuperUser(res);
    $scope.User = srvc.superUser;
  });
}
$scope.getTheUserIfItIsReal();

$scope.registerFunc = function(user, pass){
  srvc.register(user, pass).then(function(res){
    if (res.status !== 200){
      alert(res);
    }
    else{
      $scope.userName = '';
      $scope.password = '';
      $scope.registerShow = true;
      $scope.loginShower();
    }
  });
}
$scope.registerShow = true;
$scope.registerShower = function(){
  $scope.registerShow = false;
}
$scope.littleMenuHide = true;
$scope.menuShower = function (){
  $scope.littleMenuHide = !$scope.littleMenuHide;
}
$scope.registerHider = function(){
  $scope.userName = '';
  $scope.password = '';
  $scope.registerShow = true;
}
$scope.userCheck = function() {
  if(!$scope.User){
    $state.go("welcome");
  }
}
$scope.userCheck();
$scope.loginFunc = function(user, pass){
  srvc.login(user, pass).then(function(res){
    if (res.status !== 200){
      alert(res.data.msg);
    }
    else{
      $scope.userName = '';
      $scope.password = '';
      $scope.loginShow = true;
      srvc.setSuperUser(res.data);
      $scope.User = srvc.superUser;
      $state.go('user');
    }
  });
}
$scope.loginShow = true;
$scope.loginShower = function(){
  $scope.loginShow = false;
}
$scope.loginHider = function(){
  $scope.userName = '';
  $scope.password = '';
  $scope.loginShow = true;
}
$scope.logOut = function() {
  srvc.logOut().then(function(res){
    alert("You are logged Out");
    srvc.emptySuperUser();
    $scope.User = srvc.superUser;
    $scope.userCheck();
  });
}

});
