function MainController($scope) {
  var vm = this;
  SimpleWallet.deployed().then(function(instance) {
    web3.eth.getBalance(instance.address, function(error, result) {
      if (!error) {
        vm.balance = result.toNumber();
        vm.balanceInEther = web3.fromWei(vm.balance, "ether");
        $scope.$apply();
      } else {
        console.log(error);
      }
    })
  });
}
