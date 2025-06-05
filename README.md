# 🔄 Sol-Airdrop

<<<<<<< HEAD
A simple Anchor-based Solana program that enables one-click lamport airdrops to wallets — ideal for testing, demos, or dev tools.

## ✨ Features

- Smart contract written in Rust using Anchor framework
- Airdrops lamports from authority to recipient
- PDA-managed state for authority control
- TypeScript script for CLI usage

## 🛠️ Usage

### Deploy to Local Validator
=======
**Sol-Airdrop** is a lightweight Anchor-based smart contract + TypeScript CLI that allows developers to airdrop lamports (SOL) to any wallet address — ideal for localnet testing, dev onboarding, and tutorial demos.

> Built by [@Dpak1993](https://github.com/Dpak1993) using Rust, Anchor, and TypeScript.

---

## ✨ Features

- ✅ Simple lamport airdrop function
- ✅ PDA-based authority for security
- ✅ CLI script to interact with program
- ✅ Built & deployed on localnet using Anchor
- ✅ Easily extendable to SPL tokens (next step)

---

## 📦 Project Structure

sol-airdrop/
├── programs/sol-airdrop/        # Rust smart contract using Anchor
├── scripts/airdrop.ts           # TypeScript CLI to call `initialize()` + `airdrop()`
├── Anchor.toml                  # Anchor configuration
├── tsconfig.json                # TypeScript config
└── target/                      # Build artifacts

---

## 🧪 Usage

### 1. Build & deploy to localnet
>>>>>>> Update polished README

```bash
anchor build
anchor deploy
<<<<<<< HEAD
=======

### 2. Run the CLI airdrop script



export ANCHOR_PROVIDER_URL=http://127.0.0.1:8899
export ANCHOR_WALLET=~/.config/solana/id.json
yarn ts-node scripts/airdrop.ts

### Output:



✅ State initialized
✅ Airdrop TX Hash: <hash>
💸 Sent 1000000 lamports to <recipient>
>>>>>>> Update polished README
