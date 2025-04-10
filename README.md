# DynamicThreePhaseNFT

This project is a dynamic NFT smart contract built with [Hardhat](https://hardhat.org) and deployed to Ethereum. The NFT metadata changes based on the time of day — switching between **day**, **dusk/dawn**, and **night** images hosted on IPFS.

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
npx hardhat verify --network goerli DEPLOYED_CONTRACT_ADDRESS "dayURI" "duskDawnURI" "nightURI"
```

---

## 🛒 Future Plans

- Integrate TikTok Shop and merch via Fourthwall
- Create frontend gallery to preview NFT time shifts
- Launch on `mad-habitz.com` as part of the creative portfolio

---

## © Mad Habitz Produktionz

Crafted with love and shade-shifting creativity.  
Follow on [TikTok](https://www.tiktok.com/@madhabitzprod) | [SoundCloud](https://soundcloud.com) | [YouTube](https://youtube.com/@madhabitzprod)
