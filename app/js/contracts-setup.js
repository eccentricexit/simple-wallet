var SimpleWallet = TruffleContract({
  "contract_name": "SimpleWallet",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "isAllowedToSend",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "amount",
          "type": "uint256"
        },
        {
          "name": "receiver",
          "type": "address"
        }
      ],
      "name": "sendFunds",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "killWallet",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "allowAddressToSendMoney",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "disallowToSendMoney",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "inputs": [],
      "payable": true,
      "type": "constructor"
    },
    {
      "payable": true,
      "type": "fallback"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_sender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Deposit",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_sender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "_beneficiary",
          "type": "address"
        }
      ],
      "name": "Withdrawal",
      "type": "event"
    }
  ],
  "unlinked_binary": "0x60606040525b33600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b6108a9806100576000396000f3006060604052361561006b576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630bc605ad1461019e578063b2686774146101ec578063b67ba1b51461023f578063c400464814610251578063e526888d14610287575b61019c5b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061011e575060011515600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff161515145b15610193577fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c3334604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a1610199565b60006000fd5b5b565b005b34156101a657fe5b6101d2600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506102bd565b604051808215151515815260200191505060405180910390f35b34156101f457fe5b610229600480803590602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061036f565b6040518082815260200191505060405180910390f35b341561024757fe5b61024f61066e565b005b341561025957fe5b610285600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610707565b005b341561028f57fe5b6102bb600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506107c2565b005b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff16806103675750600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b90505b919050565b600061037a336102bd565b1561066757823073ffffffffffffffffffffffffffffffffffffffff1631101515610666578173ffffffffffffffffffffffffffffffffffffffff166108fc849081150290604051809050600060405180830381858888f1935050505015156103e35760006000fd5b7e1a143d5b175701cb3246058ffac3d63945192075a926ff73a19930f09d587a338484604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390a1600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000815480929190600101919050555081600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002016000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002016000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101548152602001908152602001600020600101819055503073ffffffffffffffffffffffffffffffffffffffff16319050610668565b5b5b92915050565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156106ca57610705565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610763576107bf565b6001600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548160ff0219169083151502179055505b50565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561081e5761087a565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548160ff0219169083151502179055505b505600a165627a7a72305820d6d7412e1639724ded44739fa573d7bbe349e7202fb9c5a2819f7e06a98978a20029",
  "networks": {
    "4": {
      "events": {
        "0xe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "_sender",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "Deposit",
          "type": "event"
        },
        "0x001a143d5b175701cb3246058ffac3d63945192075a926ff73a19930f09d587a": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "_sender",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "_beneficiary",
              "type": "address"
            }
          ],
          "name": "Withdrawal",
          "type": "event"
        }
      },
      "links": {},
      "address": "0xef53ddb0d863ddcc04b2571b286e78d3f2f26c84",
      "updated_at": 1498324075459
    }
  },
  "schema_version": "0.0.5",
  "updated_at": 1498324075459
}
);
