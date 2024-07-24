// import "dotenv/config";
import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  clusterApiUrl,
} from "@solana/web3.js";
// import { getKeypairFromEnvironment } from "@solana-developers/helpers";

// const keypair = getKeypairFromEnvironment("SECRET_KEY");
// const address = new PublicKey(keypair.publicKey.toBase58());
// console.log(address);
// https://api.mainnet-beta.solana.com

// // const address = new PublicKey("2PR4nvKo3T3NL5iCvQ9in82j2aFMR55TsMD5Kb5L3uik");
// const connection = new Connection("https://api.devnet.solana.com", "confirmed");
// const balanceInLamports = await connection.getBalance(address);
// const balanceInSol = balanceInLamports / LAMPORTS_PER_SOL;

// console.log(
//   `the balance of the account at ${address} is ${balanceInLamports} or ${balanceInSol}`
// );

// CHECK FRIENDS SOL BALANCE;

const suppliedPubKey = process.argv[2];
if (!suppliedPubKey) {
  throw new Error("Provide a public key to check the balance of!");
}

const connection = new Connection(
  "https://api.mainnet-beta.solana.com",
  "confirmed"
);
const address = new PublicKey(suppliedPubKey);
if (PublicKey.isOnCurve(address)) {
  console.log("invalid wallet address");
}
console.log(PublicKey.isOnCurve(address));

const balanceInLamports = await connection.getBalance(address);
const balanceInSol = balanceInLamports / LAMPORTS_PER_SOL;
console.log(
  `the balance of the account at ${address} is ${balanceInLamports} or ${balanceInSol}`
);

// Challenge
// Add instructions to handle invalid wallet addresses.
// Modify the script to connect to mainNet and look up some famous Solana wallets. Try toly.sol, shaq.sol or mccann.sol. ✅DONE
