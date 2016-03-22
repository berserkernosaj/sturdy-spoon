angular.module('harold', ["ui.router"])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state("story", {
        url: "/story",
        templateUrl: "/app/tmpls/storyTmpl.html",
        controller: "mCtrl"
      })
      $urlRouterProvider.otherwise("/story");
  })
