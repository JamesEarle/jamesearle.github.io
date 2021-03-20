// import web3 from 'web3';

if (!ethereum || !window.ethereum) {
    throw new Error("MetaMask");
}

console.log("MetaMask is installed");

let address;

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
    console.log("abc");
    // Log some information about ethereum
    console.log(ethereum.isConnected());
    console.log(ethereum.networkVersion);
    console.log(ethereum.selectedAddress);

    // Prompt connection with MetaMask
    address = await ethereum.request({ method: 'eth_requestAccounts' });
    
    console.log(address);
    addressElement.textContent += address;
};

// const chainId = await ethereum.request({
//     method: "eth_chainId"
// });

// handleChainChanged(chainId);

// ethereum.on("chainChanged", handleChainChanged);

// function handleChainChanged(_chainId) {
//     window.location.reload();
// }