import { ethers } from "ethers";
import { INFURA_KEY } from "../config";

// Export an async function called accounts that takes an address parameter
export const accounts = async (address: any) => {
  // Create a new instance of the InfuraProvider using the "goerli" network and INFURA_KEY
  const provider = new ethers.InfuraProvider("goerli", INFURA_KEY);

  // Retrieve the balance of the specified address using the provider's getBalance method
  const balance = await provider.getBalance(address);

  // Log the balance of the address in Ether units to the console
  console.log(address + " : " + ethers.formatEther(balance));
};
