// components/DisplayToken.tsx
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

// ADA Token合约地址（替换为您的ADA合约地址）
const ADA_CONTRACT_ADDRESS = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707";

// ADA合约的ABI
const adaAbi = [
  "function balanceOf(address owner) view returns (uint256)",
];

interface DisplayTokenProps {
  accounts: string[];
}

const DisplayToken: React.FC<DisplayTokenProps> = ({ accounts }) => {
  const [balances, setBalances] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadBalances = async () => {
      if (window.ethereum) {
        try {
          const provider = new ethers.BrowserProvider(window.ethereum);
          const adaContract = new ethers.Contract(
            ADA_CONTRACT_ADDRESS,
            adaAbi,
            provider
          );

          const balances: Record<string, string> = {};

          // 查询每个账户的余额
          for (const accountAddress of accounts) {
            const balance = await adaContract.balanceOf(accountAddress);
            balances[accountAddress] = ethers.formatUnits(balance, 18); // 假设 ADA 代币的小数位为 18
          }

          setBalances(balances);
        } catch (error) {
          console.error("Error loading balances:", error);
        } finally {
          setIsLoading(false);
        }
      } else {
        alert("Please install MetaMask to use this app.");
      }
    };

    loadBalances();
  }, [accounts]);

  return (
    <div>
      <h2>ADA Token Balances</h2>
      {isLoading ? (
        <p>Loading balances...</p>
      ) : Object.entries(balances).length > 0 ? (
        Object.entries(balances).map(([address, balance]) => (
          <p key={address}>
            {address}: {balance} ADA
          </p>
        ))
      ) : (
        <p>No ADA holders found.</p>
      )}
    </div>
  );
};

export default DisplayToken;
