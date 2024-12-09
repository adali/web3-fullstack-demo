import { ethers } from "hardhat";

async function main() {
  const [sender, receiver] = await ethers.getSigners();
  console.log(`Sender: ${sender.address}`);
  //console.log(`Receiver: ${receiver.address}`);

  // 要接收转账的账户地址
  const receiverAddress = "0x6D9a75C0Dae9c499Bb74475DEaA7A09615DccBF2";
  console.log(`Receiver: ${receiverAddress}`);

  const tx = await sender.sendTransaction({
    //to: receiver.address,
    to: receiverAddress,
    value: ethers.parseUnits("100.0", 18), // 18 是以太坊的默认小数位数
  });

  console.log(`Transaction hash: ${tx.hash}`);
  await tx.wait();
  console.log("Transaction mined!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
