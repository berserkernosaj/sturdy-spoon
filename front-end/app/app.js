angular.module('harold', ["ui.router"])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state("story", {
        url: "/story",
        templateUrl: "/app/tmpls/storyTmpl.html",
        controller: "storyCtrl"
      })
      .state("welcome", {
        url: "/welcome",
        templateUrl: "/app/tmpls/welcomeTmpl.html",
        controller: "welcomeCtrl"
      })
      .state("user", {
        url: "/user",
        templateUrl: "/app/tmpls/userTmpl.html",
        controller: "storyCtrl"
      })
      $urlRouterProvider.otherwise("/welcome");
  })
