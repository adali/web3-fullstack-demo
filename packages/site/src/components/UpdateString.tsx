import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../utils/contract";

const UpdateString = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [contract, setContract] = useState<ethers.Contract | null>(null);
  const [currentString, setCurrentString] = useState<string | null>(null);
  const [newString, setNewString] = useState("");

  // Connect to MetaMask and initialize contract
  useEffect(() => {
    const init = async () => {
      if (!window.ethereum) {
        alert("MetaMask not detected");
        return;
      }
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        setAccount(accounts[0]);

        const signer = provider.getSigner();
        const contractInstance = new ethers.Contract(
          CONTRACT_ADDRESS,
          CONTRACT_ABI,
          signer
        );
        setContract(contractInstance);

        const storedString = await contractInstance.get();
        setCurrentString(storedString);
      } catch (error) {
        console.error("Error connecting to contract:", error);
      }
    };
    init();
  }, []);

  const updateString = async () => {
    if (!contract) return;
    try {
      const tx = await contract.set(newString);
      await tx.wait();
      setCurrentString(newString);
      setNewString("");
    } catch (error) {
      console.error("Error updating string:", error);
    }
  };

  return (
    <div>
      <p>Connected Account: {account || "Not connected"}</p>
      <p>Contract Address: {CONTRACT_ADDRESS}</p>
      <p>Current String: {currentString || "Loading..."}</p>
      <input
        type="text"
        value={newString}
        onChange={(e) => setNewString(e.target.value)}
        placeholder="Enter new string"
      />
      <button onClick={updateString}>Update String</button>
    </div>
  );
};

export default UpdateString;
