const { ethers } = require("hardhat")
const { expect, assert } = require("chai")

// could also do this, but the below is best practice: describe("SimpleStorage", () => {})
describe("SimpleStorage", function () {
    let simpleStorageFactory, simpleStorage
    beforeEach(async function () {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")

        simpleStorage = await simpleStorageFactory.deploy()
    })

    it("Should start with a favorite number of 0", async function () {
        const currentValue = await simpleStorage.retrieve()
        const expectedValue = "0"
        // we can use assert or expect here
        assert.equal(currentValue.toString(), expectedValue)
    })

    it("Should update when we call store", async function () {
        const expectedValue = "7"
        const txnResponse = await simpleStorage.store(expectedValue)
        await txnResponse.wait(1)

        const currentValue = await simpleStorage.retrieve()
        assert.equal(currentValue.toString(), expectedValue)
    })
})
