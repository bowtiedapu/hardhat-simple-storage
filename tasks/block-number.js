const { task } = require("hardhat/config")

task("block-number", "Prints the current block number").setAction(
    async (taskArgs, hre) => {
        const blockNumber = await hre.ethers.provider.getBlockNumber()
        console.log(`Current block number: ${blockNumber}`)
    }

    // this is the same as const blockTask = async function() = {}
    // or the same as async function blockTask() {}
)

module.exports = {}
