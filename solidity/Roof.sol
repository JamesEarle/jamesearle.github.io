//SPDX-License-Identifier: UNLICENSED
pragma solidity >0.7.0 <=0.9.0;
pragma experimental ABIEncoderV2;
import "https://github.com/JamesEarle/jamesearle.github.io/blob/main/solidity/IChargedParticleBroker.sol";
import "./IRoof.sol";

contract Roof is IRoof {
    
   // IChargedParticleBroker Broker; 

    function createRental () external override returns (string memory _accesshash){
        //take the rental info and submit the right data to create a lease deposit
    }
    
    function endRental () external override returns (uint256 _depositAmount, uint256 _interestAmount){
        //Use existing data and call closeleasedeposit
    }
    
    function payRent () external override returns (uint256 _paymentReference){
        //using existing data call createrentdeposit 
    }
    
    function getEarningsData () external override returns (uint256 [] memory _depositAmount, uint256 [] memory _interestAccrued, uint256 [] memory _retrievalDate){
        //using existing data call getinterestondeposit
    }
    
    function giveNotice () external override returns (uint256 _noticeReference, uint256 _date){
        //purely a roof operation using existing data
    }
    
    function getLandlordLeaseData () external override returns (string [] memory _leaseID, uint256 [] memory _leaseStartDate, uint256 [] memory _leaseEndDate, uint256 [] memory _rentalAmount, uint256 [] memory _depositAmount, string [] memory _rentPaymentStatus, string [] memory _leaseStatus){
        //using existing data call getinterestonrent
    }
    
    function getLeaseDetail () external override returns (string memory _leaseID, string memory _address, string memory _tenantReference, uint256 _noticeReference, uint256 _noticePeriod, uint256 _depositPayDate, uint256 _rentPayDate, uint256 _leaseStartDate, uint256 _leaseEndDate){
        //using existing data
    }
    
    function payDeposit () external override returns (uint256 _paymentReference){
        //using existing data call createdeposit
    }
    
    function setInterestPayoutPreference () external override returns (uint256 _date){
        //internal roof operation
    }  
    
    
}
