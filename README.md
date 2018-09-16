# Simple Wallet

>**Warning**: This is outdated code and probably contains vulnerabilities. Use it to study only.

This is a serverless dapp wallet built to study the integration angular and truffle for deployment on swarm.
It Allows addresses that **the owner of the contract gave permission** to withdraw and deposit funds from it.
See [Screenshots](#screenshots) section below to quickly understand what this app does.

![](https://raw.githubusercontent.com/mtsalenc/SimpleWallet/master/screenshots/technologies.png)

## See it live

### Steps
1. Install [Metamask](https://metamask.io/) - Allows dapp browsing without the need for a full client.
2. Connect metamask to the **Rinkeby** testnet.
3. Access the dapp on swarm through  [swarm-gateways](http://swarm-gateways.net/bzz:/d086e073a25d6822af98ca363cb4115b3a49a286f2af7722b545902c1b144124/index.html) or, if swarm is misbehaving (this is experimental technology), access it [here](https://mtsalenc.github.io/project-pages/simple-wallet/#!/).

**Note 1**: The backend is not hosted on the main net. Instead, it is hosted on the Rinkeby testnet.

**Note 2**: The frontend is hosted on swarm, which has not been deployed to the main net at the time of writing. It may not be available or misbehave (this is experimental technology).
Therefore is **no guarantee** that the frontend will be available when you access it. There is a chance that the Rinkeby testnet is lacking miners and/or has been abandoned, resulting in congestion.

[Contract info](https://rinkeby.etherscan.io/address/0x0a33f70dd9c9ff02c6fe41f02a94fe78c8d24db9)

## Deploy Locally
### Prerequisites

- [git](https://git-scm.com/-) - the open source distributed vcs.
- [nodejs 5.0+](https://github.com/nodejs/node) - Node.js JavaScript runtime.
- [npm](https://github.com/npm/npm) - A package manager for javascript.
- [truffle](https://github.com/trufflesuite/truffle) - The most popular Ethereum development framework.
- [testrpc](https://github.com/ethereumjs/testrpc) - Fast Ethereum RPC client for testing and development.

### Steps

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

1. `git clone https://github.com/mtsalenc/SimpleWallet.git`
2. `cd SimpleWallet/app`
3. `npm install`
4. `truffle compile`
5. Start `testrpc` on another terminal
6. Back on the previous terminal: `truffle migrate`
7. Copy the json inside build/contracts/SimpleWallet.json and paste it as an argument to the TruffleContract() function inside app/js/contracts-setup.js
8. Open index.html on any [modern](https://browsehappy.com/) browser.

## Screenshots

![](https://raw.githubusercontent.com/mtsalenc/SimpleWallet/master/screenshots/2017-06-24-193652_1366x768_scrot.png)
![](https://raw.githubusercontent.com/mtsalenc/SimpleWallet/master/screenshots/2017-06-24-193729_1366x768_scrot.png)
![](https://raw.githubusercontent.com/mtsalenc/SimpleWallet/master/screenshots/2017-06-24-193744_1366x768_scrot.png)
![](https://raw.githubusercontent.com/mtsalenc/SimpleWallet/master/screenshots/2017-06-24-193828_1366x768_scrot.png)
![](https://raw.githubusercontent.com/mtsalenc/SimpleWallet/master/screenshots/2017-06-24-194253_1366x768_scrot.png)


## License
This project is licensed under the MIT License
