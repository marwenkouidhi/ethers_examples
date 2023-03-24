import { ethers } from "ethers";
import { ACCOUNT_1, ACCOUNT_2, INFURA_KEY, PRIVATE_KEY_1 } from "../config";
import { accounts } from "./01_accounts";

// Create a provider for connecting to the Goerli test network using the Infura API key
const provider = new ethers.InfuraProvider("goerli", INFURA_KEY);

// Create a wallet object using the private key for ACCOUNT_1 and the provider object
const wallet = new ethers.Wallet(PRIVATE_KEY_1, provider);

// Define an async function that creates a transaction
export const creatTransaction = async () => {
  // Print the balance of ACCOUNT_1 and ACCOUNT_2 using the accounts() function
  accounts(ACCOUNT_1);
  accounts(ACCOUNT_2);

  // Define the transaction parameters, including the recipient address and the amount of ether to send
  const tx = await wallet.sendTransaction({
    to: ACCOUNT_2,
    value: ethers.parseEther("0.025"),
  });

  // Wait for the transaction to be mined and then print the transaction details
  await tx.wait();
  console.log(tx);

  // Print the updated balances of ACCOUNT_1 and ACCOUNT_2 using the accounts() function
  accounts(ACCOUNT_1);
  accounts(ACCOUNT_2);
};
