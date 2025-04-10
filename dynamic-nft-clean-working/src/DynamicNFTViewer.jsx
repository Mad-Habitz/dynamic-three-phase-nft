import { useEffect, useState } from "react";
import { ethers } from "ethers";

const CONTRACT_ADDRESS = "0x5717480eC9f52244769bE52c6eD4454F7360e0ab";
const ABI = [
  "function tokenURI(uint256 tokenId) public view returns (string memory)",
  "function mint(address to, uint256 tokenId) external",
  "function ownerOf(uint256 tokenId) public view returns (address)"
];

function getTimeLabel() {
  const hour = new Date().getUTCHours();
  if (hour >= 6 && hour < 18) return "Day";
  if ((hour >= 5 && hour < 6) || (hour >= 18 && hour < 20)) return "Dusk / Dawn";
  return "Night";
}

export default function DynamicNFTViewer() {
  const [tokenURI, setTokenURI] = useState("");
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);
  const [tokenId, setTokenId] = useState(1);
  const [timeLabel, setTimeLabel] = useState(getTimeLabel());

  useEffect(() => {
    if (window.ethereum) {
      const ethProvider = new ethers.BrowserProvider(window.ethereum);
      setProvider(ethProvider);
    }
    const interval = setInterval(() => {
      setTimeLabel(getTimeLabel());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const connectWallet = async () => {
    if (!provider) return;
    const signer = await provider.getSigner();
    const address = await signer.getAddress();
    setAccount(address);
  };

  const fetchTokenURI = async () => {
    if (!provider) return;
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
    const uri = await contract.tokenURI(tokenId);
    setTokenURI(uri);
  };

  const mintToken = async () => {
    if (!provider || !account) return;
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
    await contract.mint(account, tokenId);
    alert(`Token ${tokenId} minted to ${account}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center space-y-4">
      <h1 className="text-3xl font-bold">Dynamic NFT Viewer</h1>
      <p className="text-sm text-gray-400">Current Phase: {timeLabel}</p>
      <input
        type="number"
        min="1"
        value={tokenId}
        onChange={(e) => setTokenId(Number(e.target.value))}
        className="bg-gray-800 text-white px-4 py-2 rounded w-32 text-center"
        placeholder="Token ID"
      />
      <div className="space-x-4">
        <button onClick={connectWallet} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">
          {account ? `Wallet: ${account.slice(0, 6)}...` : "Connect Wallet"}
        </button>
        <button onClick={fetchTokenURI} className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded">
          Load TokenURI
        </button>
        <button onClick={mintToken} className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded">
          Mint Token
        </button>
      </div>
      {tokenURI && (
        <div className="mt-6">
          <p className="text-sm mb-2">IPFS Image:</p>
          <a href={tokenURI.replace("ipfs://", "https://ipfs.io/ipfs/")} target="_blank" rel="noreferrer">
            <img src={tokenURI.replace("ipfs://", "https://ipfs.io/ipfs/")} alt="Dynamic NFT" className="rounded-xl max-w-xs mx-auto" />
          </a>
        </div>
      )}
    </div>
  );
}
