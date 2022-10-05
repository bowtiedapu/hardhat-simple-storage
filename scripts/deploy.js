// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat")
// We need to add hardhat's ethers, and "run" allows us to run any hardhat task
const { ethers, run, network } = require("hardhat")

async function main() {
    const SimpleStorageFactory = await ethers.getContractFactory(
        "SimpleStorage"
    )

    console.log("Deploying contract(s)")
    const simpleStorage = await SimpleStorageFactory.deploy()
    await simpleStorage.deployed()
    console.log(`Deployed contract(s) to: ${simpleStorage.address}`)
    /**
     * 4 == 4 is true, 4 == "4" is true, and 4 === "4" is false
     */
    if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
        // console.log(network.config)
        // etherscan may not know right away, so it's best to wait a few blocks to be mined
        // instead of hardcoding 6, we could make this configurable, but we'll leave this as-is for now
        await simpleStorage.deployTransaction.wait(6)
        verify(simpleStorage.address, [])
    }

    const currentValue = await simpleStorage.retrieve()
    console.log(`Current value: ${currentValue}`)

    // Update the current value
    const txnResponse = await simpleStorage.store(7)
    await txnResponse.wait(1)
    const updatedValue = await simpleStorage.retrieve()
    console.log(`Update value: ${updatedValue}`)
}

async function verify(contractAddress, args) {
    console.log("Starting contract verification")
    try {
        // We wrap the 'await' with a try/catch since the contract may already be verified.
        // If a contract is already verified, it will throw an error
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Contract has already been verified")
        } else {
            console.log(e)
        }
    }

    console.log("Ending contract verification")
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
