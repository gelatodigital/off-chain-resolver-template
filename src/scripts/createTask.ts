import { encode } from "@msgpack/msgpack";
import { bufferToHex, encodePolywrapArgs, Module, ModuleData } from "./utils";
import { ethers } from "ethers";
import { ops, signer } from "./utils";

const ZERO = ethers.constants.AddressZero;

const main = async () => {
  const signerAddress = signer.address;
  console.log("Signer: ", signerAddress);

  const execAddress = ""; // to fill
  const execSelector = ""; // to fill
  const userArgs = {}; // to fill
  const offChainResolverHash = ""; // to fill

  const userArgsBuffer = encode(userArgs);
  const userArgsHex = bufferToHex(userArgsBuffer);

  const polywrapArgs = encodePolywrapArgs(offChainResolverHash, userArgsHex);
  const moduleData: ModuleData = {
    modules: [Module.POLYWRAP],
    args: [polywrapArgs],
  };

  const res = await (
    await ops
      .connect(signer)
      .createTask(execAddress, execSelector, moduleData, ZERO)
  ).wait();

  console.log("txn: ", res.transactionHash);
};

main();
