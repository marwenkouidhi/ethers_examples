import { ethers } from "ethers";
import { INFURA_KEY } from "../config";

const ERC20_ABI = [
  // Read-Only Functions
  "function balanceOf(address owner) view returns (uint)",
  "function totalSupply() view returns (uint)",
  "function symbol() view returns (string)",
  "function name() view returns (string)",
];

const DAI_ADDRESS = "0x6b175474e89094c44da98b954eedeac495271d0f";

export const readFromSmartCotract = async () => {
  const provider = new ethers.InfuraProvider("homestead", INFURA_KEY);
  const contract = new ethers.Contract(DAI_ADDRESS, ERC20_ABI, provider);

  console.log("address: ", DAI_ADDRESS);
  console.log("name: ", await contract.name());
  console.log("symbol: ", await contract.symbol());
  console.log(
    "totalSupply: ",
    ethers.formatEther(await contract.totalSupply()),
    "ETH"
  );
};
