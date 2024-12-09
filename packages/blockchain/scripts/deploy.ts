import { ethers } from "hardhat";

async function main() {
    const StringStorageFactory = await ethers.getContractFactory("StringStorage");

    // 部署合约并传递构造函数参数
    const stringStorage = await StringStorageFactory.deploy("Hello, world!");
    await stringStorage.waitForDeployment();

    // 获取合约地址和部署账户
    const contractAddress = await stringStorage.getAddress();
    const deployerAddress = (await ethers.provider.getSigner()).address;

    console.log("StringStorage Contract deployed by:", deployerAddress);
    console.log("StringStorage Contract deployed at address:", contractAddress);


    const [deployer, account1, account2] = await ethers.getSigners();

    // 部署合约，初始供应量为 10,000 ADA（单位为最小分割单位）
    const ADA = await ethers.getContractFactory("ADA");
    const ada = await ADA.deploy();
  
    await ada.waitForDeployment();
    console.log(`ADA deployed to: ${await ada.getAddress()}`);

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
