import { ethers } from "ethers";
import { INFURA_KEY } from "../config";

// ERC20_ABI is an array of read-only functions that can be called on an ERC20 token contract
const ERC20_ABI = [
  "function balanceOf(address owner) view returns (uint)",
  "function totalSupply() view returns (uint)",
  "function symbol() view returns (string)",
  "function name() view returns (string)",
];

// DAI_ADDRESS is a string that represents the address of a specific ERC20 token contract
const DAI_ADDRESS: string = "0x6b175474e89094c44da98b954eedeac495271d0f";

// This function reads data from the specified smart contract using the ERC20_ABI
export const readFromSmartCotract = async () => {
  // Creates a new InfuraProvider instance using the specified network and Infura API key
  const provider = new ethers.InfuraProvider("homestead", INFURA_KEY);

  // Creates a new Contract instance using the specified contract address and ABI
  const contract = new ethers.Contract(DAI_ADDRESS, ERC20_ABI, provider);

  // Logs the contract address, name, symbol, and total supply to the console
  console.log("address: ", DAI_ADDRESS);
  console.log("name: ", await contract.name());
  console.log("symbol: ", await contract.symbol());
  console.log(
    "totalSupply: ",
    ethers.formatEther(await contract.totalSupply()),
    "ETH"
  );
};
