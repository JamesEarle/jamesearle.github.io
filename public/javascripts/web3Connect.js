// const web3 = require('web3');
if (!ethereum || !window.ethereum) {
    throw new Error("Please install MetaMask");
}

console.log("MetaMask is installed");

let contract; 
let accountAddress;

// Kovan test network contract deployment address
let contractAddress = "0xBfA6d18D43378BB11C96933f4E0871C27cD1536e";

function init() {
    contractAbiJson = await JSON.parse(contractAbi.toString());
    console.log("Got contract ABI");
    contract = new web3.eth.Contract(contractAbi, contractAddress);
    console.log("Got contract ABI");
}

init()
// Get address HTML Elements
let connectButton = document.getElementById("connectAccount");
let addressElement = document.getElementById("address");

// If already connected to a wallet display the address
// Set a timeout because the browser needs a few ms to load extensions (I)
setTimeout(() => {
    addressElement.textContent = ethereum.selectedAddress;
    console.log(ethereum.selectedAddress);
}, 100)

connectButton.onclick = async function () {
    // Log some information about ethereum
    console.log(ethereum.isConnected());
    console.log(ethereum.networkVersion);
    console.log(ethereum.selectedAddress);

    // Prompt connection with MetaMask
    accountAddress = await ethereum.request({ method: 'eth_requestAccounts' });

    console.log(address);
    addressElement.textContent += accountAddress;
};
