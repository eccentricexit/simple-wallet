var app = angular.module("simpleWallet", ['ngRoute']);

app.controller("SendFundsController", SendFundsController);
app.controller("EventsController", EventsController);
app.controller("MainController", MainController);
app.controller("WithdrawalController", WithdrawalController);
app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainController'
    })
    .when('/deposit',{
      templateUrl: 'views/deposit.html',
      controller: 'SendFundsController'
    })
    .when('/events',{
      templateUrl: 'views/events.html',
      controller: 'EventsController'
    })
    .when('/withdrawl',{
      templateUrl: 'views/withdrawal.html',
      controller: 'WithdrawalController'
    })
    .otherwise({
      templateUrl: 'views/four-oh-four.html'
    });
});
