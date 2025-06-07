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
# 💧 Solana Token Faucet (Devnet)

This is a simple dApp that allows users to:

- Connect their Phantom wallet (on Devnet)
- Request 1 SOL airdrop using Solana Web3.js

## 🚀 Demo

1. Clone the repo
2. Start the frontend:
   ```bash
   cd frontend
   python3 -m http.server 8000
3.Open http://localhost:8000

4.Connect Phantom (on Devnet)

5.Click “Request Airdrop”

📦 Stack
HTML + JavaScript (Frontend)

@solana/web3.js for blockchain interactions

📌 Notes
This is Devnet-only.

Will evolve into a full SPL Token Faucet with Anchor backend.
