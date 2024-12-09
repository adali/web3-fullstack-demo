import React, { useState } from "react";
import { ethers } from "ethers";

const ConnectWallet: React.FC = () => {
    const [walletAddress, setWalletAddress] = useState("");

    const connectWallet = async () => {
        if (!window.ethereum) {
            alert("MetaMask is not installed!");
            return;
        }

        const provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address);
    };

    return (
        <div>
            <button onClick={connectWallet}>Connect Wallet</button>
            {walletAddress && <p>Wallet Address: {walletAddress}</p>}
        </div>
    );
};

export default ConnectWallet;
