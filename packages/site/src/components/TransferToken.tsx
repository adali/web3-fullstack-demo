import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

const ADA_CONTRACT_ADDRESS = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707";

const adaAbi = [
  "function balanceOf(address owner) view returns (uint256)",
];

const TransferToken: React.FC = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [balances, setBalances] = useState<Record<string, string>>({});

  useEffect(() => {
    const load = async () => {
      if (window.ethereum) {
        try {
          // 请求连接 MetaMask
          const [selectedAccount] = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          setAccount(selectedAccount);

          const provider = new ethers.BrowserProvider(window.ethereum);
          const adaContract = new ethers.Contract(
            ADA_CONTRACT_ADDRESS,
            adaAbi,
            provider
          );

          // 查询余额
          const account1 = "第一个账户地址";
          const account2 = "第二个账户地址";

          const balance1 = await adaContract.balanceOf(account1);
          const balance2 = await adaContract.balanceOf(account2);

          setBalances({
            [account1]: ethers.formatUnits(balance1, 18),
            [account2]: ethers.formatUnits(balance2, 18),
          });
        } catch (error) {
          console.error("Error loading balances:", error);
        }
      } else {
        alert("Please install MetaMask to use this app.");
      }
    };
    load();
  }, []);

  return (
    <div>
      <p>Connected Account: {account || "Not connected"}</p>
      <p>Contract Address: {ADA_CONTRACT_ADDRESS}</p>
    </div>
  );
};

export default TransferToken;
