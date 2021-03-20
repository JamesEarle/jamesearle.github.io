//SPDX-License-Identifier: UNLICENSED
pragma solidity => 0.7.4 <= 0.9.0;
pragma experimental ABIEncoderV2;
// import "https://github.com/JamesEarle/jamesearle.github.io/blob/main/solidity/IChargedParticleBroker.sol";
import "./IRoof.sol";
// import ".IChargedParticleBroker.sol";

abstract contract Roof is IRoof {
    
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
    
    function endRental (address _lease) external returns (uint256 _depositAmount, uint256 _interestAmount) {
        
    }
    
    function numberArray() internal returns (uint256 [] memory _array) {
        uint256 [] memory numbers = new uint256[](3);
        numbers[0] = 1;
        numbers[1] = 2;
        numbers[2] = 3;
        return numbers;
    }
    
    function stringArray() internal returns (string [] memory _array) {
        string [] memory strings = new string[](3);
        strings[0] = "a";
        strings[1] = "b";
        strings[2] = "c";
        return strings;
    }
    
    function payRent () override external returns (uint256 _paymentReference) {
        return block.timestamp;
    }
    
    function getEarningsData () override external returns (uint256 [] memory _depositAmount, uint256 [] memory _interestAccrued, uint256 [] memory _retrievalDate) {
        return (numberArray(), numberArray(), numberArray());
    }
    
    function giveNotice () override external returns (uint256 _noticeReference, uint256 _date) {
        return (1, 2);
    }
    
    function getLandlordLeaseData () override external returns (string [] memory _leaseID, uint256 [] memory _leaseStartDate, uint256 [] memory _leaseEndDate, uint256 [] memory _rentalAmount, uint256 [] memory _depositAmount, string [] memory _rentPaymentStatus, string [] memory _leaseStatus) {
        return (stringArray(), numberArray(), numberArray(), numberArray(), numberArray(), stringArray(), stringArray());
    }
    
    // Is this the same as above?
    function getLeaseDetail () override external returns (string memory _leaseID, string memory _address, string memory _tenantReference, uint256 _noticeReference, uint256 noticePeriod, uint256 _depositPayDate, uint256 _rentPayDate, uint256 _leaseStartDate, uint256 _leaseEndDate ) {
        return ("asd", "0xasdasfghasd", "tenantReference", 123, 3, 20210101, 20210401, 20210401, 2022031);
    }
    
    function payDeposit () override external returns (uint256 _paymentReference) {
        return (123456);
    }
    
    function setInterestPayoutPreference () override external returns (uint256 _date) {
        return (7890);
    }
    
}