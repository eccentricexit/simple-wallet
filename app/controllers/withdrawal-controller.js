function WithdrawalController($scope) {
  var vm = this;
  vm.accounts = web3.eth.accounts;

  vm.withdrawlFunds = function(address, amount) {
    SimpleWallet.deployed()
      .then(function(instance) {
        instance.sendFunds(web3.toWei(amount, "ether"), address, {
            from: web3.eth.accounts[0],
            gas: 200000
          })
          .then(function(transactionReceipt) {
            console.log(transactionReceipt.tx);
            vm.transfer_success = true;
            $scope.$apply();
          }).catch(function(error) {
            console.error(error);
            vm.has_errors = error;
            $scope.$apply();
          });
      });

  }
}
