import "dotenv/config";
import { ethers } from "ethers";
import { CHAIN_ID, GELATO_ADDRESSES } from "./constants";
import { Ops__factory } from "./types";

const env = process.env;
const rpcUrl = env.RPC_URL;
const pk = <string>env.PK;

const provider = new ethers.providers.JsonRpcProvider(rpcUrl);

export const signer = new ethers.Wallet(pk, provider);

export const ops = Ops__factory.connect(
  GELATO_ADDRESSES[CHAIN_ID.MUMBAI].ops,
  provider
);
