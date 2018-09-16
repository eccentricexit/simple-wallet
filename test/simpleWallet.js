var SimpleWallet = artifacts.require('SimpleWallet');

contract('SimpleWallet',function(accounts){
  var walletInstance;

  it('the owner is allowed to send funds',function(){
    return SimpleWallet.deployed()
      .then(function(instance){
        walletInstance = instance;
        return walletInstance.isAllowedToSendFunds(accounts[0]);
      })
      .then(function(wasAllowed){
        assert.equal(wasAllowed,true,'the owner should have been allowed to send funds.');
      });
  });

  it('the other account should not be allowed to send funds',function(){
    return SimpleWallet.deployed()
      .then(function(instance){
        walletInstance = instance;
        return walletInstance.isAllowedToSendFunds(accounts[2]);
      })
      .then(function(wasAllowed){
        assert.equal(wasAllowed,false,'the account should not have been able to send funds.');
      });
  });

  it('adding accounts to the allowed mapping',function(){
    return SimpleWallet.deployed()
      .then(function(instance){
        walletInstance = instance;
        return walletInstance.isAllowedToSendFunds(accounts[1]);
      })
      .then(function(wasAllowed){
        assert.equal(wasAllowed,false,'the account should not have been able to send funds.');
      })
      .then(function(){
        walletInstance.allowAddressToSendMoney(accounts[1]);
        return walletInstance.isAllowedToSendFunds(accounts[1]);
      })
      .then(function(wasAllowed){
        assert.equal(wasAllowed,true,'the account shoud have been able to send funds.');
      })
      .then(function(){
        walletInstance.disallowToSendMoney(accounts[1]);
        return walletInstance.isAllowedToSendFunds(accounts[1]);
      })
      .then(function(wasAllowed){
        assert.equal(wasAllowed,false,'the account should not have been able to send funds.');
      });
  });


});
