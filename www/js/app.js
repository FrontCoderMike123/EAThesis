var EA = angular.module('EASY', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


EA.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home',{
    url: '/',
    views: {
      home: {
        templateUrl: 'views/home.html',
        controller: 'homeCTRL'
      }
    }
  });

  $stateProvider.state('tech',{
    url: '/tech',
    views: {
      tech: {
        templateUrl: 'views/tech.html',
        controller: 'techCTRL'
      }
    }
  });

  $stateProvider.state('features',{
    url: '/features',
    views: {
      features: {
        templateUrl: 'views/features.html',
        controller: 'featuresCTRL'
      }
    }
  });

  $stateProvider.state('tour',{
    url: '/tour',
    views: {
      tour: {
        templateUrl: 'views/tour.html',
        controller: 'tourCTRL'
      }
    }
  });

  $stateProvider.state('developer',{
    url: '/developer',
    views: {
      developer: {
        templateUrl: 'views/developer.html',
        controller: 'developerCTRL'
      }
    }
  });

}]);


//CONTROLLERS


EA.controller('homeCTRL',['$scope','$http',function($scope,$http){
  $scope.logo = "img/logo.png";
}]);

EA.controller('techCTRL',['$scope','$http','$ionicSlideBoxDelegate',function($scope,$http,$ionicSlideBoxDelegate){
  $scope.logo = "img/logo.png";
  $http.get('techs.json').success(function(data){
    $scope.techs = data.Techs;
    $ionicSlideBoxDelegate.update();
  });
}]);

EA.controller('featuresCTRL',['$scope','$http','$ionicSlideBoxDelegate',function($scope,$http,$ionicSlideBoxDelegate){
  $scope.logo = "img/logo.png";
  $http.get('features.json').success(function(data){
    $scope.features = data.Features;
    $ionicSlideBoxDelegate.update();
  });
}]);

EA.controller('tourCTRL',['$scope','$http',function($scope,$http){
  $scope.logo = "img/logo.png";

  $scope.Imgs = [
    { "image":"img/tour/1SM.png" },
    { "image":"img/tour/2SM.png" },
    { "image":"img/tour/3SM.png" },
    { "image":"img/tour/4SM.png" },
    { "image":"img/tour/5SM.png" },
    { "image":"img/tour/6SM.png" },
    { "image":"img/tour/7SM.png" },
    { "image":"img/tour/8SM.png" },
    { "image":"img/tour/9SM.png" }
  ];
}]);

EA.controller('developerCTRL',['$scope','$http',function($scope,$http){
  $scope.logo = "img/logo.png";
  $scope.meTH = "img/meTH.jpg";
  $scope.meLG = "img/me.jpg";
  $scope.responsive = "img/used/responsive.png";
  $scope.lists = [
    { "num":"1","plan":"Plan & Design","SVG":"img/list/plan.svg","PNG":"img/list/plan.png" },
    { "num":"2","plan":"Research & More Research","SVG":"img/list/research.svg","PNG":"img/list/research.png" },
    { "num":"3","plan":"Front End Code","SVG":"img/list/frontEnd.svg","PNG":"img/list/frontEnd.png" },
    { "num":"4","plan":"Back End Code","SVG":"img/list/backEnd.svg","PNG":"img/list/backEnd.png" },
    { "num":"5","plan":"Google Maps / Places API","SVG":"img/list/maps.svg","PNG":"img/list/maps.png" },
    { "num":"6","plan":"Create Registration & Login","SVG":"img/list/login.svg","PNG":"img/list/login.png" },
    { "num":"7","plan":"Test & Promote App","SVG":"img/list/promote.svg","PNG":"img/list/promote.png" },
    { "num":"8","plan":"Have The Perfect App","SVG":"img/list/perfect.svg","PNG":"img/list/perfect.png" }
  ];
}]);
