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
      $urlRouterProvider.otherwise("/welcome");
  })
