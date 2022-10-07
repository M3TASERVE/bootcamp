const dotenv = require("dotenv"); dotenv.config(); // Make sure that .env file contains the variables: PRIVATE_KEY, PROJECT_ID
const ethers = require('ethers');

const network = "ropsten"; // testnet name
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
const provider = new ethers.providers.InfuraProvider(network, { projectId: process.env.PROJECT_ID });
const gateway = wallet.connect(provider);

async function run() {    
    console.log(
        (await gateway.getBalance()).toString(), 
        await gateway.getTransactionCount()
    );
}

(async function main() { 
    try {
        run();
    } catch(err) { 
        console.error(err); 
    } 
})();
