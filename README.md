# Simple Wallet

This is a serverless dapp wallet built to study the integration angular and truffle for deployment on swarm.
It Allows addresses that **the owner of the contract gave permission** to withdraw and deposit funds from it.

![](https://raw.githubusercontent.com/mtsalenc/SimpleWallet/master/screenshots/technologies.png)

## See it live
**Note 1**: The backend is not hosted on the main net. Instead it is hosted on the ethereum testnet Rinkeby.

**Note 2**: The frontend is hosted on swarm, which has also not been deployed to the main net at the time of writing. It may not be available.

Therefore is **no guarantee** that the frontend will be available when you access it. There is a chance that the Rinkeby testnet is lacking miners and/or has been abandoned, resulting in congestion.

See [Deploy Locally](#Deploy-Locally) section to run the dapp with testrpc.

See [Screenshots](#Screenshots) section below to understand quickly what this app does.

### Steps
1. Install [Metamask](https://metamask.io/) - Allows dapp browsing without the need for a full client.
2. Connect metamask to the Rinkeby testnet.
3. Access the dapp on swarm by clicking [here](http://swarm-gateways.net/bzz:/a1d425654b55662f76bd0cd558208984ac629fc9d9852f3b2224c74028c9c25e/index.html).
4. Be a little bit patient as this is the test environment is run by volunteers :)

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
8. Open index.html on any [modern](browsehappy.com) browser.

## Screenshots

![](https://raw.githubusercontent.com/mtsalenc/SimpleWallet/master/screenshots/2017-06-24-193652_1366x768_scrot.png)
![](https://raw.githubusercontent.com/mtsalenc/SimpleWallet/master/screenshots/2017-06-24-193729_1366x768_scrot.png)
![](https://raw.githubusercontent.com/mtsalenc/SimpleWallet/master/screenshots/2017-06-24-193744_1366x768_scrot.png)
![](https://raw.githubusercontent.com/mtsalenc/SimpleWallet/master/screenshots/2017-06-24-193828_1366x768_scrot.png)
![](https://raw.githubusercontent.com/mtsalenc/SimpleWallet/master/screenshots/2017-06-24-194253_1366x768_scrot.png)
## License

This project is licensed under the MIT License
