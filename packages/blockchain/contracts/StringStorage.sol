// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract StringStorage {
    string private storedString;

    constructor(string memory _initialString) {
        storedString = _initialString;
    }

    function set(string memory _newString) public {
        storedString = _newString;
    }

    function get() public view returns (string memory) {
        return storedString;
    }
}
