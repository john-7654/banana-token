require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');
require("hardhat-gas-reporter");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
    gasReporter: {
      enabled: true,
    },
  },

  networks: {
    base: {
      url: process.env.API_KEY_URL_BASE_MAINNET,
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 5000000,
    },
    bsc: {
      url: process.env.API_KEY_URL_BSC_MAINNET,
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 150000000,
    },

  }
};
