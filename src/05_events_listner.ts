import { Contract, ethers } from "ethers";
import { INFURA_KEY } from "../config";

const ERC20_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint)",

  "event Transfer(address indexed from, address indexed to, uint amount)",
];

const ERC20_ADDRESS = "0x514910771AF9Ca656af840dff83E8264EcF986CA";

export const listenToEvents = async () => {
  const provider = new ethers.InfuraProvider("homestead", INFURA_KEY);
  const ERC20 = new ethers.Contract(ERC20_ADDRESS, ERC20_ABI, provider);
  const transferEvents = await ERC20.queryFilter(
    "Transfer",
    "0x415512",
    "0x41A3A3"
  );
};
