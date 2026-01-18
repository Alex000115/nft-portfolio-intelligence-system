export function simulateNFT(tokenId, owner) {
  return {
    tokenId,
    owner,
    status: "simulated",
    message: "This NFT record is a reference example"
  };
}
