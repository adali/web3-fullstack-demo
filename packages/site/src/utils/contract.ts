export const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // 替换为部署时的合约地址
export const CONTRACT_ABI = [
    {
        inputs: [{ internalType: "string", name: "initialString", type: "string" }],
        name: "constructor",
        outputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        inputs: [],
        name: "get",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "string", name: "_string", type: "string" }],
        name: "set",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ];
