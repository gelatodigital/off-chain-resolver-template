import "dotenv/config";
import { PolywrapClient } from "@polywrap/client-js";
import { ethereumPlugin, Connections, Connection } from "@polywrap/ethereum-plugin-js";

const env = process.env;

const chain = env.CHAINID ?? "testnet";
const provider = env.RPC_URL ?? "http://localhost:8545";

const polywrapClient = new PolywrapClient({
  plugins: [
    {
      uri: "ens/ethereum.polywrap.eth",
      plugin: ethereumPlugin({
        connections: new Connections({
          networks: {
            [chain]: new Connection({ provider }),
          },
          defaultNetwork: chain,
        }),
      }),
    },
  ],
});

export default polywrapClient;
