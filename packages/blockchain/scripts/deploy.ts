import { ethers } from "hardhat";

async function main() {
    const StringStorageFactory = await ethers.getContractFactory("StringStorage");

    // 部署合约并传递构造函数参数
    const stringStorage = await StringStorageFactory.deploy("Hello, world!");
    await stringStorage.waitForDeployment();

    // 获取合约地址和部署账户
    const contractAddress = await stringStorage.getAddress();
    const deployerAddress = (await ethers.provider.getSigner()).address;

    console.log("Contract deployed by:", deployerAddress);
    console.log("Contract deployed at address:", contractAddress);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
