var app = angular.module('app', [
    'ui.bootstrap', 'ngRoute'
]);

app.config(function($routeProvider, $locationProvider)
{
   // remove o # da url
   $locationProvider.html5Mode(true);

   $routeProvider

   .when('/', {
      templateUrl : 'app/views/home.html'
   })

   .when('/entrevista', {
      templateUrl : 'app/views/entrevista.html',
      controller  : 'EntrevistaCtrl',
   })

    .when('/consultar-entrevista', {
         templateUrl : 'app/views/consultar-entrevista.html',
         controller  : 'ConsultarEntrevistaCtrl',
    })

   .otherwise ({ redirectTo: '/' });
});

app.controller('AlertCtrl', function($rootScope) {
    $rootScope.alerts = [];

    $rootScope.addAlert = function(type, message) {
       $rootScope.alerts.push({type: type, msg: message});
    };

    $rootScope.closeAlert = function(index) {
       $rootScope.alerts.splice(index, 1);
    };
});