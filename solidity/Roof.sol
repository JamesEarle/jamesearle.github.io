//SPDX-License-Identifier: UNLICENSED
pragma solidity >0.7.0 <=0.9.0; 
pragma experimental ABIEncoderV2;
// import "https://github.com/JamesEarle/jamesearle.github.io/blob/main/solidity/IChargedParticleBroker.sol";
import "./IRoof.sol";
// import ".IChargedParticleBroker.sol";

contract Roof { // 
    
    address private tenant;
    address private landlord;
    
    struct Lease {
        address tenant;
        address landlord;
        uint256 rent;
        uint256 deposit;
        uint256 durationMonths;
    }
    
    constructor() {
        // Use MetaMask sample test account addresses
        tenant = 0x955A52f4F067cB1B5eC7B136995f93A82d3eb3bD;
        landlord = 0xF920f5E23983069CF36793E0E95F444fC4f4d388;
    }
    
    function setTenantAddress (address _tenant) public {
        tenant = _tenant;
    }
    
    function setLandlordAddress (address _landlord) public {
        landlord = _landlord;
    }
    
    function bytes32ToString(bytes32 _data) public returns (string memory) {
        bytes memory bytesString = new bytes(32);
        uint charCount = 0;
        for (uint j = 0; j < 32; j++) {
            byte char = byte(bytes32(uint(_data) * 2 ** (8 * j)));
            if (char != 0) {
                bytesString[charCount] = char;
                charCount++;
            }
        }
        
        bytes memory bytesStringTrimmed = new bytes(charCount);
        for (uint j = 0; j < charCount; j++) {
            bytesStringTrimmed[j] = bytesString[j];
        }
        return string(bytesStringTrimmed);
    }
    
    function createRental (uint256 _rent, uint256 _deposit, uint256 _durationMonths) public returns (string memory _accessHash) {
        //take the rental info and submit the right data to create a lease deposit
        Lease memory myLease = Lease({
            tenant: tenant,
            landlord: landlord,
            rent: _rent,
            deposit: _deposit,
            durationMonths: _durationMonths
        });
        
        bytes32 hash = keccak256(abi.encode(myLease));
        string memory accessHash = bytes32ToString(hash);

        return accessHash;
    }
    
    
}