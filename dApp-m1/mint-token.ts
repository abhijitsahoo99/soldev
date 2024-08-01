import {
  getKeypairFromEnvironment,
  getExplorerLink,
} from "@solana-developers/helpers";
import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";
import { mintTo } from "@solana/spl-token";
import "dotenv/config";

const connection = new Connection(clusterApiUrl("devnet"));
const user = getKeypairFromEnvironment("SECRET_KEY");
const MINOR_UNITS_PER_MAJOR_UNITS = Math.pow(10, 2);
const tokenMintAccount = new PublicKey(
  "7Gty1HPPT45r9nBu91zL6XyBBrgUzDmbXiqup5MYCAsi"
);
const recipientAssociatedTokenAccount = new PublicKey(
  "89Jm7LPyMhNxyYpKvmT3spX7YYPUdagw5RSqn8uMqsKb"
);

const transactionSignature = await mintTo(
  connection,
  user,
  tokenMintAccount,
  recipientAssociatedTokenAccount,
  user,
  10 * MINOR_UNITS_PER_MAJOR_UNITS
);

const link = getExplorerLink("transaction", transactionSignature, "devnet");

console.log(`✅ Success! Mint Token Transaction: ${link}`);
