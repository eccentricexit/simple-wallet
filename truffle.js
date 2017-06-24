module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      host: "localhost",
      port: 8545,
      network_id: "*",
    }
  }
};

/*
Migrations address on rinkeby: 0x9cf2d9e7ebc9752db47aa7e507c1bb71e749f9a5
SimpleWallet address on rinkeby: 0xef53ddb0d863ddcc04b2571b286e78d3f2f26c84

swarm frontend address: /bzz:/a1d425654b55662f76bd0cd558208984ac629fc9d9852f3b2224c74028c9c25e/index.html
*/
