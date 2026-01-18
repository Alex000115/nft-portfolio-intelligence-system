export function calculatePortfolioValue(nfts) {
  if (!Array.isArray(nfts)) return 0;

  let total = 0;
  nfts.forEach((nft) => {
    total += nft.estimatedValue || 0;
  });

  return total;
}
