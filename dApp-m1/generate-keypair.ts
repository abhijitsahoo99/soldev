import "dotenv/config";
import { Keypair } from "@solana/web3.js";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

// const keypair = Keypair.generate();

// console.log(`public key - `, keypair.publicKey.toBase58());
// console.log(`private key - `, keypair.secretKey);

const keypair = getKeypairFromEnvironment("SECRET_KEY");
console.log(keypair);
console.log(
  `✅ Finished! We've loaded our secret key securely, using an env file!`
);
