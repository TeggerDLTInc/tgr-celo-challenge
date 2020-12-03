// Require the Contract kit library
// Celo requires you to use contract kit to make transaction instead of web3
const Kit = require('@celo/contractkit')

// Show contractKit/Web3 where it needs to look for the Ethereum node
const kit = Kit.newKit('https://alfajores-forno.celo-testnet.org')

// Importing in the contract abi which the compiled contract data from json file
const ABI = require('./build/contracts/TeggerToken.json');

// Grabbing account details 
const getAccount = require('./getAccount').getAccount

// Creating a contract instance that is needed to actually interact with the contract within this file
const contractAdress = "0x45EC9D9F09912D42B706d4368E7BFd7498cb70D7"
const contract = new kit.web3.eth.Contract(ABI.abi, contractAdress)

//Transaction amount
const amount = 10



async function init() {

/// CODE FOR TRANSACTION TO RUN
const txo = await contract.methods.transfer(contractAdress,amount);
const tx = await kit.sendTransactionObject(txo, {
  from: kit.defaultAccount,
});
await tx.getHash();
await tx.waitReceipt();

}

init()
