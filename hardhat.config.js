require("@nomiclabs/hardhat-waffle");
require("hardhat-etherscan-abi");
// Set up a Hardhat project using mainnet fork testing
module.exports = {
  networks: {
    hardhat: {
      chainId: 1,
      forking: {
        url: "https://eth-mainnet.g.alchemy.com/v2/<key>",
        blockNumber: 13308800,
      },
    },
  },
  etherscan: {
    apiKey: "<key>",
  },
  solidity: "0.8.0",
};
