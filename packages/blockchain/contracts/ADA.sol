// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ADA is ERC20 {
    constructor() ERC20("ADA", "ADA") {
        // 初始化铸造 10000 个代币（单位是最小分割单位）
        _mint(msg.sender, 10000 * (10 ** uint256(decimals())));
    }
}
