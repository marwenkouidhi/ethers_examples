import { Contract, ethers } from "ethers";
import { ACCOUNT_1, ACCOUNT_2, INFURA_KEY, PRIVATE_KEY_1 } from "../config";
import { accounts } from "./01_accounts";

const ERC20_ABI = [
  "function balanceOf(address owner) view returns (uint)",
  "function transfer(address to, uint amount) returns (bool)",
];

const ERC20_ADDRESS = "0x326C977E6efc84E512bB9C30f76E30c160eD06FB";

export const sendTokens = async () => {
  const provider = new ethers.InfuraProvider("goerli", INFURA_KEY);
  const wallet = new ethers.Wallet(PRIVATE_KEY_1);
  const signer = wallet.connect(provider);

  const ERC20 = new ethers.Contract(ERC20_ADDRESS, ERC20_ABI, signer);

  // How many tokens?
  let numberOfTokens = ethers.parseUnits("1", 18);
  console.log(`numberOfTokens: ${numberOfTokens}`);

  // Send tokens
  ERC20.transfer(ACCOUNT_2, numberOfTokens).then((transferResult) => {
    console.dir(transferResult);
    console.log("sent token");
  });
};
