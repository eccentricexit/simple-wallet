# Simple Wallet
This is a simple wallet dapp built to study the integration angular and truffle for deployment on swarm.

## Deploy Locally

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
1. ```git clone https://github.com/mtsalenc/SimpleWallet.git```
2. ```cd SimpleWallet/app```
3. ```npm install```
4. ```truffle compile```
5. Copy the json inside build/contracts/SimpleWallet.json and paste it as an argument to the TruffleContract() function inside app/js/contracts-setup.js
6. Start ```testrpc``` on another terminal
7. ```truffle migrate```
8. Open index.html on any [modern](browsehappy.com) browser.


### Prerequisites
- [git](https://git-scm.com/-) - the  open source distributed vcs.
- [nodejs 5.0+](https://github.com/nodejs/node) - Node.js JavaScript runtime.
- [npm](https://github.com/npm/npm) - A package manager for javascript.
- [truffle](https://github.com/trufflesuite/truffle) - The most popular Ethereum development framework.
- [testrpc](https://github.com/ethereumjs/testrpc) - Fast Ethereum RPC client for testing and development.

## License

This project is licensed under the MIT License
