// SPDX-License-Identifier: UNLICENSED
pragma solidity >0.7 <=0.9;
pragma experimental ABIEncoderV2;

interface IRoof {
    
    function createRental () external returns (string memory _accesshash);
    
    function endRental () external returns (uint256 _depositAmount, uint256 _interestAmount);
    
    function payRent () external returns (uint256 _paymentReference);
    
    function getEarningsData () external returns (uint256 [] memory _depositAmount, uint256 [] memory _interestAccrued, uint256 [] memory _retrievalDate);
    
    function giveNotice () external returns (uint256 _noticeReference, uint256 _date);
    
    function getLandlordLeaseData () external returns (string [] memory _leaseID, uint256 [] memory _leaseStartDate, uint256 [] memory _leaseEndDate, uint256 [] memory _rentalAmount, uint256 [] memory _depositAmount, string [] memory _rentPaymentStatus, string [] memory _leaseStatus);
    
    function getLeaseDetail () external returns (string memory _leaseID, string memory _address, string memory _tenantReference, uint256 _noticeReference, uint256 noticePeriod, uint256 _depositPayDate, uint256 _rentPayDate, uint256 _leaseStartDate, uint256 _leaseEndDate );
    
    function payDeposit () external returns (uint256 _paymentReference);
    
    function setInterestPayoutPreference () external returns (uint256 _date);
    
    
}
