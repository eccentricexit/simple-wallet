function EventsController($scope){
  var vm = this;
  vm.events = [];

  SimpleWallet.deployed()
    .then(function(instance) {

      var eventsToWatch = instance.allEvents({fromBlock: 0, toBlock: 'latest'});

      eventsToWatch.watch(function(error,result){
        vm.events.push(result);
        $scope.$apply();
      });

  });

  $scope.$on('destroy',function(){
    eventsToWatch.stopWatching();
  });

}
