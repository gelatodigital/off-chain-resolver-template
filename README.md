# (BETA) Gelato Off-chain Resolver Template

Off-chain resolver enables you to automate smart contract function calls based on off-chain conditions.

- [Dependencies](#install-dependencies)
- [Env variables](#env-variables)
- [Creating off-chain resolver](#creating-off-chain-resolver)
  - [Define schema](#1-defining-schema-for-checker-arguments)
  - [Generate schema types](#2-generate-schema-types)
  - [Writing checker function](#3-writing-your-checker-function)
    - [Checker arguments](#accessing-checker-arguments)
    - [Using modules](#using-modules)
    - [Handling objects](#handling-objects)
    - [Debug message](#returning-debug-message)
- [Testing off-chain resolver](#testing-off-chain-resolver)
- [Deploying off-chain resolver](#deploying-off-chain-resolver)
- [Creating off-chain resolver task](#creating-off-chain-resolver-task)
- [Examples](#off-chain-resolver-examples)

## Install dependencies

- `nvm install && nvm use`

- `yarn install`

## Env variables

Create a `.env` file with your private config.

```typescript
PK= // required for task creation
CHAINID= // required for testing / task creation
RPC_URL= // required for testing / task creation
```

## Creating off-chain resolver

### 1. Define schema for checker arguments (optional)

In `src/schema.graphql` define the arguments which will be passed into `checker()`. Do not modify other types.

```typescript
type UserArgs {
  count: BigInt!
  counterAddress: string!
}
```

Passing arguments into `checker()` makes the resolver reusable. In this example, multiple tasks can be created with different `counterAddress` while only deploying 1 off-chain resolver.

### 2. Generate schema types

Do `yarn codegen` whenever `schema.graphql` is modified.

### 3. Writing your checker function

#### **Accessing checker arguments**

In `src/index.ts`, `checker(args: Args_checker)` is the function which Gelato will call. Do not rename this function.

Getting the arguments passed into `checker`:

```typescript
let userArgs = UserArgs.fromBuffer(args.userArgsBuffer);
let gelatoArgs = GelatoArgs.fromBuffer(args.gelatoArgsBuffer);

let count = userArgs.count;
let counterAddress = userArgs.counterAddress;

let gasPrice = gelatoArgs.gasPrice;
let timeStamp = gelatoArgs.timeStamp;
```

Gelato passes `gasPrice` & `timeStamp` as an argument as well. `gasPrice` can be helpful in estimating the transaction fee of the execution or limit executions to certain `gasPrice`.

#### **Using Modules**

```typescript
import {
  Ethereum_Module,
  Graph_Module,
  Http_Module,
  Logger_Module,
} from "./wrap";
```

- Ethereum_Module: similar to ethersJS library.

```typescript
import { Ethereum_Module } from "./wrap";

// calling view functions of smart contract
const lastExecuted = Ethereum_Module.callContractView({
  address: counterAddress,
  method: "function lastExecuted() external view returns(uint256)",
  args: null,
  connection: args.connection,
}).unwrap();

// encoding function data
const execData = Ethereum_Module.encodeFunction({
  method: "function increaseCount(uint256)",
  args: [count],
}).unwrap();
```

- Graph_Module: make subgraph queries.

```typescript
import { Graph_Module } from "./wrap";

const lpPair = Graph_Module.querySubgraph({
  subgraphAuthor: "uniswap",
  subgraphName: "uniswap-v2",
  query: `
  {
    users(first: 1){
      liquidityPositions(first: 1){
        pair {
          id
        }
      }
    }
  }
`,
}).unwrap();
```

- Http_Module: make HTTP requests

```typescript
import { Http_Module } from "./wrap";

let routerApi = `https://api.1inch.io/v4.0/1/approve/spender`;

let routerApiRes = Http_Module.get({
  request: null,
  url: routerApi,
}).unwrap();
```

- Logger_Module: do `console.log()` from your resolver. (Only for testing purporses)

```typescript
import { Logger_Logger_LogLevel, Logger_Module } from "./wrap";

Logger_Module.log({
  level: Logger_Logger_LogLevel.INFO,
  message: "Hello world",
});
```

#### **Handling objects**

Results returned from using Http_Module / Graph_Module can be an object string.

To convert and access the object values:

```typescript
import { BigInt, JSON } from "@polywrap/wasm-as";

// example data returned from api call
let resString = `{
  from: "0x0000000000000000000000000000000000000000",
  value: "169488101097",
}`;

let resObj = <JSON.Obj>JSON.parse(resString);

// accessing value of "value"
let valueJson = quoteResObj.getValue("value");
if (!valueJson) throw Error("No valueJson");
let valueString = valueJson.toString();

let valueBigInt = BigInt.fromString(valueString);
```

To access nested objects:

```typescript
// example data returned from api call
let resString = `{
  from: "0x0000000000000000000000000000000000000000",
  value: "169488101097",
  gas: { gasPrice: "161297033108" },
}`;

let resObj = swapResObj.getObj("resString");

// accessing value of "gasPrice"
let gasObj = swapResObj.getObj("gas");
if (!gasObj) throw Error("No gasObj");

let gasPriceJson = gasObj.getValue("gasPrice");
if (!gasPriceJson) throw Error("No gasPriceJson");
let gasPriceString = gasPriceJson.toString();

let gasPriceBigInt = BigInt.fromString(gasPriceString);
```

#### **Returning debug message**

To get information about why your task isn't executing after you have created your task, you can return encoded string messages in `execData`.

This message will be returned and shown on the Gelato Ops task page whenever Gelato calls your off-chain resolver.

```typescript
let execData = Ethereum_Module.solidityPack({
  types: ["string"],
  values: ["Time not elapsed"],
}).unwrap();

return { canExec: false, execData };
```

## Testing off-chain resolver

A unit testing template can be found in `src/__tests__/index.test.ts`

Fill in the off-chain resolver arguments if necessary.

```typescript
const userArgs: UserArgs = {
  counterAddress: "0x04bDBB7eF8C17117d8Ef884029c268b7BecB2a19",
  count: 1,
};
```

Fill in the expected returns from calling the off-chain resolver.

```typescript
const counterAbi = ["function increaseCount(uint256) external"];
const counterInterface = new ethers.utils.Interface(counterAbi);
const expectedExecData = counterInterface.encodeFunctionData("increaseCount", [
  1,
]);

const expected = {
  canExec: true,
  execData: expectedExecData,
};
```

`yarn test` to start the test.

## Deploying off-chain resolver

Once you have your off-chain resolver ready and tested run `yarn deploy`.

```typescript
> yarn deploy

> Successfully executed stage 'ipfs_deploy'. Result: 'wrap://ipfs/Qmd77yP8rEcjoMqzCpKJwU8DK1aApDZh5wjD7sn8gJw8cw'
```

Your off-chain resolver is now pinned on ipfs with the hash e.g. `Qmd77yP8rEcjoMqzCpKJwU8DK1aApDZh5wjD7sn8gJw8cw`

## Creating off-chain resolver task

Fill up the necessary parameters in `src/srcipts/createTask.ts`

```typescript
const taskName = "";
const execAddress = "";
const execSelector = "";
const offChainResolverHash = "";
const offChainResolverArgs = {};
```

`yarn createTask` to create the off-chain resolver task.

Since this feature is still in BETA, please reach out to us with your EOA address which created the task. You need to be whitelisted for your task to work.

## Off-chain resolver examples

You can find more examples of off-chain resolver in this [repo](https://github.com/gelatodigital/off-chain-resolver-examples)
.
