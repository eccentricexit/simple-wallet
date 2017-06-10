function MainController($scope){
  var vm = this;
  SimpleWallet.deployed().then(function(instance){
      vm.balance = web3.eth.getBalance(instance.address).toNumber();
      vm.balanceInEther = web3.fromWei(vm.balance,"ether");
      $scope.$apply();
  });
}
