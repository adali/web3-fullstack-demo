
import { client } from "./providers/client";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { ConnectButton } from "@consensys/connect-button";
import React from "react";
import ConnectWallet from "./components/ConnectWallet";
import UpdateString from "./components/UpdateString";
import TransferToken from "./components/TransferToken";
import DisplayToken from "./components/DisplayToken";
import ConnectAccount from './components/ConnetAccount';
import DisplayWallets from './components/DisplayWallets';


const App = () => {
  const [account, setAccount] = useState<string | null>(null);

  useEffect(() => {
    // 当 MetaMask 钱包连接时，获取账户信息
    const loadAccount = async () => {
      if (window.ethereum) {
        const [selectedAccount] = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(selectedAccount);
      } else {
        alert("Please install MetaMask to use this app.");
      }
    };

    loadAccount();
  }, []);

  // 模拟一些账户地址（在真实应用中，你可以从后端获取这些地址）
  const accounts = [
    "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",  // hardhat Account #0
    "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",  // hardhat Account #1
    "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",  // hardhat Account #2
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>StringStorage</h1>
      <ConnectWallet />
      <UpdateString />
      <br /><hr />

      <h1>ADA Token Tracker</h1>
      <TransferToken />
      <br /><hr />

      {/* 显示 ADA 代币余额列表 */}
      <h2>ADA Token Balances</h2>
      <DisplayToken accounts={accounts} /> {/* 调用 DisplayToken 组件并传递账户地址 */}
      <br /><hr />

      <h2>Wagmi connector demo</h2>
      <ConnectAccount />
      <DisplayWallets />

    </div>
  );
};

export default App;