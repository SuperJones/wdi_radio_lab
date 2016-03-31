"use strict";

(function(){
  angular
  .module("radioapp", [
    "ui.router",
    "songsmodule"
  ])
  .config([
    "$stateProvider",
    RouterFuntion
  ]);

  function RouterFuntion($stateProvider){
    $stateProvider
    .state("songIndex", {
      url: "/songs",
      templateUrl: "js/songssection/index.html",
      controller: "SongsIndexCtrl",
      controllerAs:"SongsIndexViewModel"
    })
    .state("songShow", {
      url: "/songs/:id",
      templateUrl: "js/songssection/show.html"
    });
  }
})();
