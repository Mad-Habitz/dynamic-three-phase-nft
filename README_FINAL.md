# DynamicThreePhaseNFT

This project is a dynamic NFT smart contract built with [Hardhat](https://hardhat.org) and deployed to Ethereum. The NFT metadata changes based on the time of day — switching between **day**, **dusk/dawn**, and **night** images hosted on IPFS.

---

## ✅ Verified Smart Contract

This contract has been verified on Etherscan:

[![Etherscan Verified](https://img.shields.io/badge/Verified%20on-Etherscan-4c6ef5?style=flat-square&logo=ethereum&logoColor=white)](https://etherscan.io/address/0x5717480eC9f52244769bE52c6eD4454F7360e0ab)

---

## 🛠 Features

- 🌓 Dynamic `tokenURI()` based on time
- 📦 Built using OpenZeppelin ERC721 standards
- 💸 Royalty support via ERC2981
- 🎨 Designed for IPFS-hosted artwork
- 🔐 Ownable, mintable by contract owner

---

## 📁 Project Structure

```bash
dynamic-three-phase-nft/
├── contracts/
│   └── DynamicThreePhaseNFT.sol
├── scripts/
│   └── deploy.js
├── hardhat.config.js
└── README.md
```

---

## 🚀 Quick Start

### 1. Clone the Repo

```bash
git clone https://github.com/Mad-Habitz/dynamic-three-phase-nft.git
cd dynamic-three-phase-nft
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Compile Contracts

```bash
npx hardhat compile
```

---

## ⚙️ Deploy Contract

Edit `scripts/deploy.js` and replace:

```js
const day = "ipfs://YOUR_DAY_URI";
const dusk = "ipfs://YOUR_DUSK_DAWN_URI";
const night = "ipfs://YOUR_NIGHT_URI";
```

Then run:

```bash
npx hardhat run scripts/deploy.js --network goerli
```

Or use `localhost` if you're running a local node:

```bash
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost
```

---

## 🔍 Verify Contract on Etherscan

```bash
npx hardhat verify --network goerli 0x5717480eC9f52244769bE52c6eD4454F7360e0ab "dayURI" "duskDawnURI" "nightURI"
```

---

## 🌐 Coming Soon: NFT Viewer Frontend

We'll be releasing a custom frontend that:

- Shows the current NFT based on time (Day / Dusk / Night)
- Loads metadata live from IPFS
- Integrates wallet connection (MetaMask)
- Links to your TikTok Shop + Fourthwall Merch

It will be built using **React + Tailwind CSS + Ethers.js**  
📦 Packaged and deployed with [Vercel](https://vercel.com) or [mad-habitz.com]

---

## © Mad Habitz Produktionz

Crafted with love and shade-shifting creativity.  
Follow on [TikTok](https://www.tiktok.com/@madhabitzprod) | [SoundCloud](https://soundcloud.com) | [YouTube](https://youtube.com/@madhabitzprod)
