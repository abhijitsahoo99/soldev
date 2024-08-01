import {
  getKeypairFromEnvironment,
  getExplorerLink,
} from "@solana-developers/helpers";
import { Connection, clusterApiUrl } from "@solana/web3.js";
import { createMint } from "@solana/spl-token";
import "dotenv/config";

const user = getKeypairFromEnvironment("SECRET_KEY");
const connection = new Connection(clusterApiUrl("devnet"));
console.log(
  `🔑 Loaded our keypair securely, using an env file! Our public key is: ${user.publicKey.toBase58()}`
);

// const tokenMint = await createMint(connection, user, user.publicKey, null, 2);

// const link = getExplorerLink("address", tokenMint.toString(), "devnet");
// console.log(`✅ Finished! Created token mint: ${link}`);
