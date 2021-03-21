


		var bso_address = "0xc1ba361a65F54AD81b515D9F79c11e0E1176436F";//rinkby test contract
		
		var bso_abi;
		
		var bso_contract; 
		
		function init() {
			console.log("loading abi: ");
			    loadJSON(async function(response) { 
			    bso_abi =  await JSON.parse(response);
			 	console.log(" got bso_abi " + bso_abi);
			 	bso_contract = new web3.eth.Contract(bso_abi, bso_address);
			 	await getAccount(); 
			 	getOracleEvents();
			 }, "abi/bso_contract_abi.json" );
			 console.log("bso_abi " + bso_abi);
		}
		
		
		var account;
		var web3;
		if (!ethereum || !ethereum.isMetaMask) {
		    throw new Error('Please install MetaMask.')
		} else {

		    console.log('MetaMask is installed');
		    if (ethereum.isConnected) {
		        ethereum.enable;
		        console.log('Connected to the network');
		        web3 = new Web3(ethereum);
				init();
		    } else {
		        console.log('Not connected to the network');
		    }
		}
		
		const showAccount = $("#showAccount");	
		const showPrice = $("#showPrice");
				
		const ethereumButton = $("#web3Connect");
		console.log(' ethereum button ' + ethereumButton + ' ethereum ' + ethereum);
		ethereumButton.on('click', () => {
		    //Will Start the metamask extension
		    ethereum.request({
		        method: 'eth_requestAccounts'
		    });
		});
		ethereumButton.on('click', () => {
		    getAccount();
		});
		
		const searchButton = $("#searchForPrice");
		searchButton.on('click', () => {
			findPrice(); 
		});
		
		
		async function getAccount() {
		    const accounts = await ethereum.request({
		        method: 'eth_requestAccounts'
		    });
		    account = accounts[0];
		    web3.eth.defaultAccount = account;
		    console.log(' got the account ');
		    console.log(' account :-  ' + account + " show account :- " + showAccount);
		    showAccount.html("Connected to Account: " + account);
		}
			
		function parseData(_data) {
			 const data = _data; 
			 
		    let option;
		    for (let i = 0; i < data.length; i++) {
		      option = document.createElement('option');
		      option.text = data[i];
		      option.value = data[i];
		      dropdown.add(option);
		    }
		}
		

		async function getOracleEvents() { 
			console.log("account: " + account);
			bso_contract.options.from = account; 
			var response = await bso_contract.methods.getOracleEvents().call();
			console.log("response: " + response);
			
			parseData(response);		
		}
		
		async function findPrice() { 
			
			var currencyPair  = document.getElementById('currencyPairSelector');
			console.log("currency Pair: " + currencyPair);
			var selectedCurrencyPair = currencyPair.value;
			var index = selectedCurrencyPair-1;
			var selectedCurrencyPairText = currencyPair.options[index].text; 
						
			var _event =  document.getElementById('eventSelector');
			console.log("event selector: " + _event);
			var selectedEvent = _event.value; 
			
			console.log(" event: " + selectedEvent + " pair: " + selectedCurrencyPair);
			
			bso_contract.options.from = account; 
			showPrice.html("<p align='center'><br/></br><img src='images/805.gif'height='50px' width='50px'/></br></p>");
			var response = await bso_contract.methods.getPriceOnEvent(selectedEvent, selectedCurrencyPair).send();
			var parsedResponse = JSON.stringify(response); 
			console.log("response: " +  parsedResponse );
			var _transactionhash = "<a href='https://rinkeby.etherscan.io/tx/"+response.transactionHash+"' target='_blank'>Ethscan Txn</a><br/>";
			var _text = "The price during "+selectedEvent+" for : "+selectedCurrencyPairText +" was " + response + "<br/><br/>";
			
			showPrice.html(_text+_transactionhash);			
		}
		
		
		function loadJSON(callback, path) {   

            var xobj = new XMLHttpRequest();
            xobj.overrideMimeType("application/json");

            xobj.open('GET', path, true); // Replace 'appDataServices' with the path to your file
            xobj.onreadystatechange = function () {
                if (xobj.readyState == 4 && xobj.status == "200") {
                    // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                    callback(xobj.responseText);
                }
            };
            xobj.send(null);  
        }