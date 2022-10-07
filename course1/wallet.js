const CoinKey = require('coinkey'); 
var wallet = new CoinKey.createRandom();
console.log("PrivateKey:", wallet.privateKey.toString('hex'));
console.log("Address:", wallet.publicAddress);

const ethers = require('ethers'); 
const wallet = ethers.Wallet.createRandom()
console.log("PrivateKey:", wallet.privateKey);
console.log("Address:", wallet.address);
console.log('Mnemonic:', wallet.mnemonic.phrase);
