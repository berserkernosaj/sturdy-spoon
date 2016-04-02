angular.module('harold').service('srvc', function($http, $q){
  var id = "56f320b435f8b8ec0e81eba7";
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
  this.register = function(user, email, pass){
    return $http({
      method: "POST",
      url:'/api/users',
      data: {
        userName: user,
        email: email,
        password: pass
      }
    }).then(function success(res){
      if (res.status !== 200){
        alert("Sorry, there was a problem or was there?");
      }
      console.log(res);
      return res;
    }, function failure(err) {
      console.log(err);
      if (err.data.errmsg.includes('userName')){
        var eggnog = "That username already exists."
        return eggnog;
      }
      if (err.data.errmsg.includes("email")){
        var eggnog = "That email already exists."
        return eggnog;
      };
    });
  }


});
