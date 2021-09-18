// Initialize HDWalletProvider
const HDWalletProvider = require("@truffle/hdwallet-provider");

// 1. Initialize LoomTruffleProvider
//const LoomTruffleProvider = require('loom-truffle-provider');

// Set your own mnemonic here
const mnemonic = "stage embrace maple brief live churn crouch mercy simple author sound device";

// Module exports to make this configuration available to Truffle itself
module.exports = {
  // Object with configuration for each network
  networks: {
    //Configuration for mainnet
    mainnet: {
      provider: function () {
         //Setting the provider with the Infura Rinkeby address and Token
       return new HDWalletProvider(mnemonic, "https://mainnet.infura.io/v3/YOUR_TOKEN")
      },
      network_id: "1"
    },
    // Configuration for rinkeby network
    rinkeby: {
      // Special function to setup the provider
      provider: function () {
        // Setting the provider with the Infura Rinkeby address and Token
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/4024971c6fbc4b44a27f7eaa09e0c95f")
      },
      // Network id is 4 for Rinkeby
      network_id: 4
    },

  
loom_testnet: {
  provider: function() {
    const privateKey = "703bb313e6b6478089f63cb64f2c0031";    
    const chainId = 'extdev-plasma-us1';
    const writeUrl = 'http://extdev-plasma-us1.dappchains.com:80/rpc';
    const readUrl = 'http://extdev-plasma-us1.dappchains.com:80/query';
    return new LoomTruffleProvider(chainId, writeUrl, readUrl, privateKey);
    },
 network_id: '9545242630824'
}
  }
};
