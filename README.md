# Hardhat Simple Storage

## Steps to Recreate Your Own Hardhat Simple Storage App

1. `yarn init`
2. `yarn add --dev hardhat`
3. `yarn hardhat`
4. `yarn add --dev prettier prettier-plugin-solidity`
5. `yarn add --dev dotenv`

## How to Build, Run, and Deploy

1. `yarn hardhat compile`
2. `yarn hardhat test`
3. `yarn hardhat run scripts/deploy.js` or `yarn hardhat run scripts/deploy.js --network hardhat`
4. Start your own node with a set of test accounts by running `yarn hardhat node`. This is different than the default hardhat network. It's using the hardhat runtime environment, but is considered your localhost.
5. To deploy to the network started in #4, run `yarn hardhat run scripts/deploy.js --network YOUR_LOCAL_NETWORK_NAME_IN_HARDHAT_CONFIG_JS_HERE`. In this project, we called it `localhost`, so we'll just run `yarn hardhat run scripts/deploy.js --network localhost`
6. To run tests, run `yarn hardhat test`
7. If you would like to run a subset of the tests, run `yarn hardhat test --grep WHAT_YOU_WANT_TO_GREP_FOR_HERE`

## Small Tricks and Nice-to-Haves
1. If we want to start a repl, just run `yarn hardhat console --network localhost`, or whatever the name for your local node is. In this project, we called it `localhost`


## Hardhat Task Examples
- When adding `block-number`, we should now see `block-number` as a task when running `yarn hardhat`. If we run `yarn hardhat block-number`, we should get a block number of 0 since the default network is the hardhat (your local machine) network. However, if we run `yarn hardhat block-number --network goerli`, we'll see the current block number for the Goerli network.
- Scripts and tasks do (almost) the same thing. Tasks tend to be better for plugins, and scripts are better for your own development and deployments.

## Notes

- Adding `--dev` when we do `yarn add` is for development purposes. Regular dependencies are required to run your project, dev dependencies are required to develop/build your project.
- yarn == npm == npx
- `@` packages are scoped packages which allow NPM packages to be namespaced. Every user and organization on NPM has their own scope. This means that they are the only user(s) and organizations who can add packages to it. This helps with identifying which packages are "official". The package name only has to be unique to the scope it is published in, not the entire registry i.e. `@yarn/http` as opposed to plain old `http`
- `hardhat-ethers` is just another dependency
- chainlist dot org has all the chain ID details needed when developing

## Default README Generated by Hardhat

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
