import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import '@nomicfoundation/hardhat-ethers';
import "@typechain/hardhat";
import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  paths: {
    sources: "./contracts",  // 合约文件夹
    artifacts: "./artifacts", // 输出的编译文件夹
  },
  typechain: {
    outDir: "typechain-types", // 生成的类型文件输出目录
    target: "ethers-v6", // 使用 ethers-v6 类型生成
  },
  networks: {
    "hardhat": {
      chainId: 1337
    },
    "sepolia": {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY!],
    },      
    "linea-testnet": {
      url: `https://linea-sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY!],
    },
  },
};

export default config;
