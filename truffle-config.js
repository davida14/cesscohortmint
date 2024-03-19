require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "192.168.1.7",
      port: 7545,
      network_id: "5777", // Match any network id
    },
    goerli: {
      provider: function () {
        return new HDWalletProvider(
          [process.env.DEPLOYER_PRIVATE_KEY],
          `wss://goerli.infura.io/ws/v3/${process.env.INFURA_API_KEY}` // URL to Ethereum Node
        );
      },
      network_id: 5, // Goerli network ID
    },

    sepolia: {
      provider: function () {
        return new HDWalletProvider(
          [process.env.DEPLOYER_PRIVATE_KEY],
          `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}` // Make sure this URL is correct
        );
      },
      network_id: 11155111, // This should match the Chain ID from MetaMask
    },

    arbitrumSepolia: {
      provider: function () {
        return new HDWalletProvider(
          process.env.DEPLOYER_PRIVATE_KEY,
          `https://arbitrum-sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`
        );
      },
      network_id: 421614, // Replace with the correct network ID for Arbitrum Sepolia
      gas: 8000000, // Arbitrum has slightly higher block limits
      gasPrice: 1000000000, // Adjust gas price as necessary, in wei
    },
  },

  contracts_directory: "./src/contracts/",
  contracts_build_directory: "./src/abis/",

  compilers: {
    solc: {
      version: "0.8.9",
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },

  plugins: ["truffle-plugin-verify"],

  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY,
  },
};
