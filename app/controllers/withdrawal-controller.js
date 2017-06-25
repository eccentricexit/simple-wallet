function WithdrawalController($scope) {
  var vm = this;
  vm.accounts = web3.eth.accounts;
  vm.isAllowedToWithdrawFunds = true;
  vm.selectedAccount = vm.accounts[0];

  vm.withdrawlFunds = function(address, amount) {
    vm.selectedAccount = address;

    SimpleWallet.deployed()
      .then(function(instance) {
        vm.instance = instance;
        //console.log("got deployed contract instance");
        return instance.isAllowedToSend(address);
      })
      .then(function(result) {
        vm.isAllowedToWithdrawFunds = result;
        //console.log("is address is allowed to send funds? " + result);
        console.log("attempting transaction, please wait.");
        if (vm.isAllowedToWithdrawFunds) {
          vm.instance.sendFunds(web3.toWei(amount, "ether"), vm.selectedAccount, {
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
        } else {
          console.log("withdraw blocked, address cannot withdraw funds");
          $scope.$apply();
        }
      });
  }
}
