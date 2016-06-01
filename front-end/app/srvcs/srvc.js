angular.module('harold').service('srvc', function($http, $q){
  var id = "56f320b435f8b8ec0e81eba7";
  this.superUser;
  this.setSuperUser = function (newUser) {
    this.superUser = newUser;
    return this.superUser;
  }
  this.emptySuperUser = function () {
    this.superUser = "";
  }
  this.setId= function(newId) {
      id = newId;
    }
this.getStory = function() {
   return $http({
    method: "GET",
    url:'/api/storyPath' + id
  }).then(function(res){
    if (res.status !== 200){
      alert("Sorry, there was a problem");
    }
    return res.data;
  })
  }
  this.getTheUserIfItIsReal = function() {
     return $http({
      method: "GET",
      url:'/api/user'
    }).then(function(res){
      if (res.status !== 200){
        alert("Sorry, there was a problem");
      }
      if (res.data === "Hey that aint a user"){
        return undefined;
      }else {
        return res.data;
      }
    })
    }

  this.register = function(user, pass){
    return $http({
      method: "POST",
      url:'/api/users/register',
      data: {
        userName: user,
        password: pass
      }
    }).then(function success(res){
      if (res.status !== 200){
        alert("Sorry, there was a problem or was there?");
      }
      return res;
    }, function failure(err) {
      if (err.data.errmsg.includes('userName')){
        var eggnog = "That username already exists."
        return eggnog;
      }
    });
  }

  this.login = function(user, pass){
    return $http({
      method: "POST",
      url:'/api/users/login',
      data: {
        userName: user,
        password: pass
      }
    }).then(function success(res){
      if (res.status !== 200){
        alert("Sorry, there was a problem or was there?");
      }
      return res;
    }, function failure(err) {
      return err;
    });
  }
  this.logOut = function(){
    return $http({
      method:"GET",
      url:'/api/users/logout'
    }).then(function(res) {
      return res;
    })
  }
  this.bookmark = function (bookmark, User) {
    return $http({
      method: "POST",
      url: "/api/users/bookmark" + User._id,
      data: {bookmark: bookmark}
    }).then(function succes(res) {
      return res;
    }, function failure(err) {
      return err;
    })
  }
  this.remBookmark = function (ind, User) {
    return $http({
      method: "POST",
      url: "/api/users/bookmark/remove" + User._id,
      data: {bookmark: ind}
    }).then(function succes(res) {
      return res;
    }, function failure(err) {
      return err;
    })
  }


});
