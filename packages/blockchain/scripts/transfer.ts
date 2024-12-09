import { ethers } from "hardhat";
import { parseUnits } from "ethers";

async function main() {
  const tokenAddress = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"; // 替换为部署的合约地址
  const [owner, recipient1, recipient2] = await ethers.getSigners();

  const ADA = await ethers.getContractAt("ADA", tokenAddress);

  // 转账代币
  const tx1 = await ADA.transfer(recipient1.address, parseUnits("666", 18));
  await tx1.wait();
  console.log(`Transferred 666 ADA to: ${recipient1.address}`);

  const tx2 = await ADA.transfer(recipient2.address, parseUnits("888", 18));
  await tx2.wait();
  console.log(`Transferred 888 ADA to: ${recipient2.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
