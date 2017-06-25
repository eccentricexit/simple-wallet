function EventsController($scope) {
  var vm = this;
  vm.events = [];
  console.log("fetching and watching for transactions, view will be updated.");
  SimpleWallet.deployed()
    .then(function(instance) {
      //console.log("contract instance aquired...");
      //console.log("requesting transactions, please wait.");
      var eventsToWatch = instance.allEvents({
        fromBlock: 200000,
        toBlock: 'latest'
      });

      eventsToWatch.watch(function(error, result) {
        if (!error) {
          vm.events.push(result);
          //console.log(vm.events);
          $scope.$apply();
        }else{
          console.log(error);
        }
      });

    });

  $scope.$on('destroy', function() {
    eventsToWatch.stopWatching();
  });

}
