// Import the page's CSS. Webpack will know what to do with it.
import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract'
import simplewallet_json from '../../build/contracts/SimpleWallet.json'

var SimpleWallet = contract(simplewallet_json);
var angular = require('angular');
var ng_route = require('angular-route');
var app = angular.module("mySimpleWalletDapp",[ng_route]);
setupWeb3Provider();

SimpleWallet.setProvider(web3.currentProvider);

app.controller("MainController",function($scope){
  $scope._var = 'Main';
});

app.controller("ShowEventsController",function($scope){
    $scope._var = 'Show Events';
});

app.controller("SendFundsController",function($scope){
  $scope.transfer_success = false;
  $scope.accounts = web3.eth.accounts;


  $scope.depositFunds = function(address,amount){
    var contract = SimpleWallet.deployed().then(function(instance){
      web3.eth.sendTransaction({from: address,
                                to: contract.address,
                                value: web3.toWei(amount,"ether")},
                               function(error,result){
                                 if(error){$scope.has_errors = "An error has occurred: "+error;}
                                 else{$scope.transfer_success = true;}
                                 $scope.$apply();
                               });
                             });

  }

});

app.config(function($routeProvider){
  $routeProvider.when('/',{
    templateUrl:'app/views/main.html',
    controller:'MainController'
  }).when('/events',{
    templateUrl:'app/views/events.html',
    controller:'ShowEventsController'
  }).when('/sendfunds',{
    templateUrl:'app/views/sendfunds.html',
    controller:'SendFundsController'
  }).otherwise({redirectTo:'/'});
});

function setupWeb3Provider(){
  if (typeof web3 !== 'undefined') {
    console.warn("Using web3 detected from external source. If you find that your accounts don't appear or you have 0 SimpleWallet, ensure you've configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask")
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider);
  } else {
    console.warn("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }
}
