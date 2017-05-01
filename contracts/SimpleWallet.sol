pragma solidity ^0.4.8;
contract SimpleWallet{

  address owner;

  struct WithdrawalStruct{
    address to;
    uint amount;
  }

  struct Senders {
    bool isAllowed;
    uint amount_sends;
    mapping(uint => WithdrawalStruct) withdrawals;
  }

  mapping(address => Senders) isAllowedToSendFundsMapping;

  event Deposit(address _sender, uint amount);
  event Withdrawal(address _sender, uint amount, address _beneficiary);

  function SimpleWallet(){
    owner = msg.sender;
  }

  function() payable{
    if(msg.sender==owner || isAllowedToSendFundsMapping[msg.sender].isAllowed==true){
      Deposit(msg.sender,msg.value);
    }else{
      throw;
    }
  }

  function sendFunds(uint amount, address receiver) returns (uint){
    if(msg.sender!=owner && isAllowedToSend(msg.sender)==false) return;
    if(this.balance<amount) return;

    if(!receiver.send(amount)) throw;
    Withdrawal(msg.sender,amount,receiver);
    isAllowedToSendFundsMapping[msg.sender].amount_sends++;
    isAllowedToSendFundsMapping[msg.sender].withdrawals[isAllowedToSendFundsMapping[msg.sender].amount_sends].to = receiver;
    isAllowedToSendFundsMapping[msg.sender].withdrawals[isAllowedToSendFundsMapping[msg.sender].amount_sends].amount = amount;
    return this.balance;
  }

  function allowAddressToSendMoney(address _address){
    if(msg.sender!=owner) return;
    isAllowedToSendFundsMapping[_address].isAllowed = true;
  }

  function disallowToSendMoney(address _address){
    if(msg.sender!=owner) return;
    isAllowedToSendFundsMapping[_address].isAllowed = false;
  }

  function isAllowedToSend(address _address) constant returns (bool){
    return isAllowedToSendFundsMapping[_address].isAllowed || _address == owner;
  }

  function killWallet(){
    if(msg.sender!=owner) return;
    suicide(owner);
  }


}
