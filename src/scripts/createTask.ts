import "dotenv/config";
import { GelatoOpsSDK } from "@gelatonetwork/ops-sdk";
import { ethers } from "ethers";

const env = process.env;

const rpcUrl = env.RPC_URL;
const pk = <string>env.PK;
const chainId = Number(env.CHAINID);

const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
const signer = new ethers.Wallet(pk, provider);

const main = async () => {
  const signerAddress = signer.address;
  console.log("Signer: ", signerAddress);

  const ops = new GelatoOpsSDK(chainId, signer);

  const taskName = "";
  const execAddress = ""; // to fill
  const execSelector = ""; // to fill
  const offChainResolverHash = ""; // to fill
  const offChainResolverArgs = {}; // to fill

  const res = await ops.createTask({
    name: taskName,
    execAddress,
    execSelector,
    offChainResolverHash,
    offChainResolverArgs,
  });

  console.log("tx: ", res.tx);
  console.log("taskId: ", res.taskId);
};

main();
