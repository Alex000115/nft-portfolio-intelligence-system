import { JsonRpcProvider } from "ethers";
import { NETWORKS, NETWORK } from "./network.config.js";

export function connectRPC() {
  const url = NETWORKS[NETWORK];
  console.log("Connecting to RPC:", url);
  return new JsonRpcProvider(url);
}
