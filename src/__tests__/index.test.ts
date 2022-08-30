import { encode } from "@msgpack/msgpack";
import "dotenv/config";
import { ethers } from "ethers";
import path from "path";
import { Template_CheckerResult } from "./types/wrap";
import { UserArgs } from "../wrap/UserArgs";
import client from "./utils/client";

jest.setTimeout(60000);

describe("Gelato simple resolver test", () => {
  let wrapperUri: string;
  let userArgsBuffer: Uint8Array;
  let gelatoArgsBuffer: Uint8Array;
  let expected: Template_CheckerResult;

  beforeAll(async () => {
    const dirname: string = path.resolve(__dirname);
    const wrapperPath: string = path.join(dirname, "..", "..");
    wrapperUri = `fs/${wrapperPath}/build`;

    const gelatoArgs = {
      gasPrice: ethers.utils.parseUnits("100", "gwei").toString(),
      timeStamp: Math.floor(Date.now() / 1000).toString(),
    };

    const userArgs: UserArgs = {};

    userArgsBuffer = encode(userArgs);
    gelatoArgsBuffer = encode(gelatoArgs);

    expected = {
      canExec: false,
      execData: "",
    };
  });

  it("calls checker", async () => {
    const job = await client.invoke({
      uri: wrapperUri,
      method: "checker",
      args: {
        userArgsBuffer,
        gelatoArgsBuffer,
      },
    });

    const error = job.error;
    const data = <Template_CheckerResult>job.data;

    expect(error).toBeFalsy();
    expect(data?.canExec).toEqual(expected.canExec);
    expect(data?.execData).toEqual(expected.execData);
  });
});
