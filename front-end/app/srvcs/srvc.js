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


});
