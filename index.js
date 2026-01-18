import { connectRPC } from "./rpc.client.js";
import { scanNFTPortfolio } from "./nft.scanner.js";
import { NETWORK, WALLET_ADDRESS } from "./network.config.js";

console.log("NFT Portfolio Intelligence System");
console.log("Network:", NETWORK);
console.log("Wallet:", WALLET_ADDRESS);

const provider = connectRPC();
scanNFTPortfolio(provider);
