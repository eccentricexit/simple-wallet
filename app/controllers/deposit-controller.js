function SendFundsController($scope) {
  var vm = this;
  vm.accounts = web3.eth.accounts;


  vm.depositFunds = function(address_from, amount_from) {

    SimpleWallet.deployed().then(function(instance){
      var contract = instance;

      web3.eth.sendTransaction({
        from: address_from,
        to: contract.address,
        value: web3.toWei(amount_from, "ether")
      }, function(error, result) {
        if(error){
          vm.has_errors = true;
          console.log(error);
        }else{
          vm.transfer_success = true;
        }
        $scope.$apply();
      });
    });

  }

}
