pragma solidity >0.7.0 <=0.9.0; 
pragma experimental ABIEncoderV2;


// Broker Interface 

interface IChargeParticleBroker { 
    
    
        function createLeaseDeposit(address _landLordAddress, string memory _leaseId, address _tenant, uint256 _depositAmount, uint256 _rentAmount ) external returns (uint256 );

        function closeLeaseDeposit(address _landLordAddress, address _tenant, string memory _leaseName) external returns (uint256 _depositPrinciple, uint256 _depositInterest );
        
        function getInterestOnRent(address _tenantAddress, string memory _leaseId)  external returns (uint256 _interestAmount);

        function createRentDeposit(address _tenantAddress, string memory _leaseId,  uint256 _rentAmount) external returns (uint256 _interest);

        function closeRentDeposit(address tenantAddress, string memory leaseId) external returns (uint256 _rent);
        
} 
