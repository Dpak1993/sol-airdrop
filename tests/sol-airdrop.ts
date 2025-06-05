import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { SolAirdrop } from "../target/types/sol_airdrop";
import { PublicKey } from "@solana/web3.js";

describe("sol-airdrop", () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.SolAirdrop as Program<SolAirdrop>;

  let statePda: PublicKey;

  it("Is initialized!", async () => {
    // Derive the PDA for state
    [statePda] = await PublicKey.findProgramAddressSync(
      [Buffer.from("state")],
      program.programId
    );

    // Call initialize
    await program.methods
      .initialize()
      .accounts({
        state: statePda,
        authority: provider.wallet.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      })
      .rpc();

    console.log("✅ State initialized at:", statePda.toBase58());
  });
});
