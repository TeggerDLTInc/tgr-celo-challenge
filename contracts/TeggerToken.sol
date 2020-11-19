// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

contract TeggerToken {
    string public name;
    string public symbol;
    uint8 public decimals;
    uint256 public totalSupply;
    address public wallet;

    constructor() public {
        name = "TeggerToken";
        symbol = "UID";
        decimals = 18;
        totalSupply = 1750000000 * (10**18);
        wallet = 0xD7154ecfD0Ec0CBb4Ce0b21Fd70E66a11d467132;
    }

    function getName() public view returns (string memory) {
        return name;
    }

    function setName(string calldata newName) external {
        name = newName;
    }
}
