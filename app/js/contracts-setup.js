var SimpleWallet = TruffleContract(
  {
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
    "unlinked_binary": "0x60606040525b60008054600160a060020a03191633600160a060020a03161790555b5b6103a8806100316000396000f300606060405236156100515763ffffffff60e060020a6000350416630bc605ad81146100e8578063b268677414610118578063b67ba1b514610149578063c40046481461015b578063e526888d14610179575b6100e65b60005433600160a060020a03908116911614806100905750600160a060020a03331660009081526001602081905260409091205460ff161515145b156100dd5760408051600160a060020a033316815234602082015281517fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c929181900390910190a16100e3565b60006000fd5b5b565b005b34156100f057fe5b610104600160a060020a0360043516610197565b604080519115158252519081900360200190f35b341561012057fe5b610137600435600160a060020a03602435166101d3565b60408051918252519081900360200190f35b341561015157fe5b6100e66102cd565b005b341561016357fe5b6100e6600160a060020a03600435166102f8565b005b341561018157fe5b6100e6600160a060020a036004351661033d565b005b600160a060020a03811660009081526001602052604081205460ff16806101cb5750600054600160a060020a038381169116145b90505b919050565b60006101de33610197565b156102c557600160a060020a033016318390106102c557604051600160a060020a0383169084156108fc029085906000818181858888f1935050505015156102265760006000fd5b60408051600160a060020a0333811682526020820186905284168183015290517e1a143d5b175701cb3246058ffac3d63945192075a926ff73a19930f09d587a9181900360600190a15033600160a060020a03908116600090815260016020818152604080842080840180548501808255865260029091019092528084208054600160a060020a03191687871617905590548352909120018390553016315b5b5b92915050565b60005433600160a060020a039081169116146102e8576100e3565b600054600160a060020a0316ff5b565b60005433600160a060020a039081169116146103135761033a565b600160a060020a0381166000908152600160208190526040909120805460ff191690911790555b50565b60005433600160a060020a039081169116146103585761033a565b600160a060020a0381166000908152600160205260409020805460ff191690555b505600a165627a7a7230582073836990005c4a42cd0955145c55b4f90eb21b1115a57a9deb544e6dc626f7d00029",
    "networks": {
      "1497117582211": {
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
        "address": "0x55525164ae118211d463514f996b42aa49325cac",
        "updated_at": 1497121523662
      },
      "1497121585522": {
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
        "address": "0xdea513f28086347f41b97a08620dd5c7eb714f3d",
        "updated_at": 1497121599711
      },
      "1497122947863": {
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
        "address": "0xe036150c79a7638576fbe4d76140dc23ceeec217",
        "updated_at": 1497122953722
      }
    },
    "schema_version": "0.0.5",
    "updated_at": 1497122953722
  }
);
