const HDWalletProvider = require("@truffle/hdwallet-provider");
require('dotenv').config()  // Store environment-specific variable from '.env' to process.env
module.exports = {
  networks: {
    bsc_mainnet: {
      provider: () => new HDWalletProvider(process.env.PK, process.env.WEB3_HTTP_MAIN_URL),
      port: process.env.WEB3_HTTP_MAIN_PORT,
      network_id: "56",
      gas: 6000000,
      gasPrice: 46000000000
    },
    bsc_testnet: {
      provider: () => new HDWalletProvider(process.env.PK, process.env.WEB3_HTTP_TEST_URL),
      port: process.env.WEB3_HTTP_TEST_PORT,
      network_id: "97",
      gas: 6000000,
      gasPrice: 46000000000
    },
   development: {
     host: "ganache",
     port: 8545,
     network_id: "*"
   },
   test: {
     host: "localhost",
     port: 8545,
     network_id: "*"
   }
  }
  
};
