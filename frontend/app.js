const connectWalletButton = document.getElementById("connectWallet");
const airdropButton = document.getElementById("airdropButton");
const walletAddressDisplay = document.getElementById("walletAddress");
const statusDisplay = document.getElementById("status");

let provider = null;

connectWalletButton.onclick = async () => {
  try {
    const resp = await window.solana.connect();
    provider = window.solana;
    walletAddressDisplay.textContent = `Connected: ${resp.publicKey.toString()}`;
  } catch (err) {
    walletAddressDisplay.textContent = "Wallet connection failed";
  }
};

airdropButton.onclick = async () => {
  if (!provider) {
    statusDisplay.textContent = "Connect your wallet first!";
    return;
  }

  const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl("devnet"));
  const signature = await connection.requestAirdrop(
    provider.publicKey,
    solanaWeb3.LAMPORTS_PER_SOL
  );

  statusDisplay.textContent = "Airdrop requested, awaiting confirmation...";
  await connection.confirmTransaction(signature);
  statusDisplay.textContent = "Airdrop successful!";
};
