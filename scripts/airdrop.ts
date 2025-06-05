import * as anchor from "@coral-xyz/anchor";
import { SolAirdrop } from "../target/types/sol_airdrop";
import { PublicKey, SystemProgram, Keypair } from "@solana/web3.js";

const main = async () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.SolAirdrop as anchor.Program<SolAirdrop>;

  // Derive PDA
  const [statePda] = PublicKey.findProgramAddressSync(
    [Buffer.from("state")],
    program.programId
  );

  // 1️⃣ Initialize the state (one-time setup)
  try {
    await program.methods.initialize().accounts({
      state: statePda,
      authority: provider.wallet.publicKey,
      systemProgram: SystemProgram.programId,
    }).rpc();
    console.log("✅ State initialized");
  } catch (err) {
    console.log("ℹ️ Skipping initialize (already done or failed):", err.message);
  }

  // 2️⃣ Airdrop
  const recipient = Keypair.generate();
  const amount = 1_000_000;

  const tx = await program.methods
    .airdrop(new anchor.BN(amount))
    .accounts({
      state: statePda,
      authority: provider.wallet.publicKey,
      recipient: recipient.publicKey,
      systemProgram: SystemProgram.programId,
    })
    .signers([])
    .rpc();

  console.log("✅ Airdrop TX Hash:", tx);
  console.log("💸 Sent", amount, "lamports to", recipient.publicKey.toBase58());
};

main();
