require("@nomicfoundation/hardhat-toolbox")

// This allows us to pull the rinkeby RPC URL from our .env
require("dotenv").config()
require("@nomiclabs/hardhat-etherscan")
require("./tasks/block-number")
require("hardhat-gas-reporter")
require("solidity-coverage")

/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL || "goerli_rpc_url_default"
const PRIVATE_KEY = process.env.PRIVATE_KEY || "private_key_default"
const ETHERSCAN_API_KEY =
    process.env.ETHERSCAN_API_KEY || "etherscan_api_key_default"
const COINMARKETCAP_API_KEY =
    process.env.COINMARKETCAP_API_KEY || "coinmarketcap_api_key_default"

module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        goerli: {
            url: GOERLI_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 5,
        },
        localhost: {
            url: "http://127.0.0.1:8545/",
            // No need to provide accounts here.
            chainId: 31337, // It has the same chain ID as the hardhat network
        },
    },
    solidity: "0.8.17",
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    gasReporter: {
        enabled: false,
        outputFile: "gas-report.txt",
        noColors: true, // colors can get messed up when writing to a file
        currency: "USD",
        coinmarketcap: COINMARKETCAP_API_KEY,
    },
}
