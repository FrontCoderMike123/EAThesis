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

EA.controller('techCTRL',['$scope','$http',function($scope,$http){
  $scope.logo = "img/logo.png";
}]);

EA.controller('featuresCTRL',['$scope','$http',function($scope,$http){
  $scope.logo = "img/logo.png";
  $http.get('features.json').success(function(data){
    $scope.features = data.Features;
  });

  $scope.Imgs = [
    { "image":"img/features/feat1.png" },
    { "image":"img/features/feat2.png" },
    { "image":"img/features/feat3.png" },
    { "image":"img/features/feat4.png" },
    { "image":"img/features/feat5.png" }
  ];
}]);

EA.controller('developerCTRL',['$scope','$http',function($scope,$http){
  $scope.logo = "img/logo.png";
  $scope.meTH = "img/meTH.jpg";
  $scope.meLG = "img/me.jpg";
  $scope.responsive = "img/tools/responsive.png";
  $scope.lists = [
    { "num":"1","plan":"Plan & Design" },
    { "num":"2","plan":"Research & More Research" },
    { "num":"3","plan":"Front End Code" },
    { "num":"4","plan":"Back End Code" },
    { "num":"5","plan":"Google Maps / Places API" },
    { "num":"6","plan":"Create Registration & Login" },
    { "num":"7","plan":"Test & Promote App" },
    { "num":"8","plan":"Have The Perfect App" }
  ];
}]);
