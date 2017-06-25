function SendFundsController($scope) {
  var vm = this;
  vm.accounts = web3.eth.accounts;
  vm.isAllowedToSendFunds = true;
  vm.selectedAccount = web3.eth.accounts[0];

  vm.depositFunds = function(address_from, amount) {
    var contract;
    SimpleWallet.deployed().then(function(instance) {
      contract = instance;
      vm.selectedAccount = address_from;
      return instance.isAllowedToSend(address_from);
    }).then(function(result) {
      vm.isAllowedToSendFunds = result;

      if (!vm.isAllowedToSendFund) return;

      web3.eth.sendTransaction({
        from: address_from,
        to: contract.address,
        value: web3.toWei(amount, "ether")
      }, function(error, result) {
        if (error) {
          vm.has_errors = true;
          console.log(error);
        } else {
          vm.transfer_success = true;
        }
      });
      
      $scope.$apply();
    });
  };
}
