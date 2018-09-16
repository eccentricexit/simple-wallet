pragma solidity 0.4.24;
pragma experimental "v0.5.0";

import "../installed_contracts/zeppelin/contracts/ownership/Ownable.sol";


contract SimpleWallet is Ownable {

    struct WithdrawalStruct {
        address to;
        uint amount;
    }

    struct Senders {
        bool isAllowed;
        uint256 amountSends;
        mapping(uint => WithdrawalStruct) withdrawals;
    }

    mapping(address => Senders) public senderData;

    event Deposit(address _sender, uint _amount);
    event Withdrawal(address _sender, uint _amount, address _beneficiary);

    modifier onlyAllowed() {
        require(
            msg.sender == owner
            || senderData[msg.sender].isAllowed,
            "msg.sender must be authorized"
        );
        _;
    }

    function() external payable onlyAllowed {
        emit Deposit(msg.sender, msg.value);
    }

    function sendFunds(uint256 _amount, address _receiver) external onlyAllowed returns (uint256) {
        require(address(this).balance >= _amount, "not enough funds in contract");

        senderData[msg.sender].amountSends++;
        senderData[msg.sender].withdrawals[senderData[msg.sender].amountSends].to = _receiver;
        senderData[msg.sender].withdrawals[senderData[msg.sender].amountSends].amount = _amount;
        emit Withdrawal(msg.sender, _amount, _receiver);
        _receiver.transfer(_amount);
        return address(this).balance;
    }

    function disallowToSendMoney(address _address) external onlyOwner {
        senderData[_address].isAllowed = false;
    }

    function killWallet() external onlyOwner {
        selfdestruct(owner);
    }

    function allowAddressToSendMoney(address _address) external onlyOwner {
        senderData[_address].isAllowed = true;
    }

    function isAllowedToSendFunds(address _address) public view returns (bool) {
        return _address == owner || senderData[_address].isAllowed;
    }

}
