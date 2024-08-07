import {
  LAMPORTS_PER_SOL,
  Connection,
  Transaction,
  sendAndConfirmTransaction,
  SystemProgram,
  PublicKey,
  Keypair,
} from "@solana/web3.js";
import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const suppliedPubKeys = process.argv[2];
if (!suppliedPubKeys) {
  console.log(`Please provide a public key to send to`);
  process.exit(1);
}

// const keypair = Keypair.generate();
// console.log(keypair.publicKey.toBase58());

const senderKeypair = getKeypairFromEnvironment("SECRET_KEY");
const toPubkey = new PublicKey(suppliedPubKeys);

const connection = new Connection("https://api.devnet.solana.com", "confirmed");
console.log(
  `✅ Loaded our own keypair, the destination public key, and connected to Solana`
);

const transaction = new Transaction();
const LAMPORTS_TO_SEND = 1000000000;
const sendSolInstruction = SystemProgram.transfer({
  fromPubkey: senderKeypair.publicKey,
  toPubkey: toPubkey,
  lamports: LAMPORTS_TO_SEND,
});
transaction.add(sendSolInstruction);

const signature = await sendAndConfirmTransaction(connection, transaction, [
  senderKeypair,
]);
console.log(
  `💸 Finished! Sent ${LAMPORTS_TO_SEND} to the address ${toPubkey}. `
);
console.log(`Transaction signature is ${signature}!`);

// How much SOL did the transfer take? What is this in USD?
// Can you find your transaction on https://explorer.solana.com? Remember we are using the devnet network.
// How long does the transfer take?
// What do you think "confirmed" means?
