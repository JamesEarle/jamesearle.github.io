let contractAbi = `
[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_rent",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_deposit",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_durationMonths",
				"type": "uint256"
			}
		],
		"name": "createRental",
		"outputs": [
			{
				"internalType": "string",
				"name": "_accessHash",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_lease",
				"type": "address"
			}
		],
		"name": "endRental",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_depositAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_interestAmount",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getEarningsData",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "_depositAmount",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "_interestAccrued",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "_retrievalDate",
				"type": "uint256[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getLandlordLeaseData",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "_leaseID",
				"type": "string[]"
			},
			{
				"internalType": "uint256[]",
				"name": "_leaseStartDate",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "_leaseEndDate",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "_rentalAmount",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "_depositAmount",
				"type": "uint256[]"
			},
			{
				"internalType": "string[]",
				"name": "_rentPaymentStatus",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "_leaseStatus",
				"type": "string[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getLeaseDetail",
		"outputs": [
			{
				"internalType": "string",
				"name": "_leaseID",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_address",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_tenantReference",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_noticeReference",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "noticePeriod",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_depositPayDate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_rentPayDate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_leaseStartDate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_leaseEndDate",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "giveNotice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_noticeReference",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_date",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "payDeposit",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_paymentReference",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "payRent",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_paymentReference",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "setInterestPayoutPreference",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_date",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]`;
