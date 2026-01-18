import { isTargetAddress } from "./address.utils.js";
import { parseMetadata } from "./metadata.parser.js";

export function scanNFTPortfolio(provider) {
  console.log("Scanning NFT portfolio...");
  provider.on("block", async (blockNumber) => {
    console.log("New Block:", blockNumber);
    console.log("Checking for NFT ownership changes...");
    parseMetadata(blockNumber);
  });
}
