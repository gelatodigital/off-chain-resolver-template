import { ethers } from "ethers";

/* eslint-disable @typescript-eslint/naming-convention */
export enum Module {
  RESOLVER,
  TIME,
  PROXY,
  SINGLE_EXEC,
  POLYWRAP,
}

export type ModuleData = {
  modules: Module[];
  args: string[];
};

export const encodeResolverArgs = (
  resolverAddress: string,
  resolverData: string
): string => {
  const encoded = ethers.utils.defaultAbiCoder.encode(
    ["address", "bytes"],
    [resolverAddress, resolverData]
  );

  return encoded;
};

export const encodeTimeArgs = (startTime: number, interval: number): string => {
  const encoded = ethers.utils.defaultAbiCoder.encode(
    ["uint128", "uint128"],
    [startTime, interval]
  );

  return encoded;
};

export const encodePolywrapArgs = (
  polywrapCid: string,
  userArgsHex: string
): string => {
  const encoded = ethers.utils.defaultAbiCoder.encode(
    ["string", "bytes"],
    [polywrapCid, userArgsHex]
  );

  return encoded;
};

export const bufferToHex = (buffer: Uint8Array): string => {
  const hex = [...new Uint8Array(buffer)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  const hexPrefixed = "0x" + hex;
  return hexPrefixed;
};
