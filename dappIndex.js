const ssAddress = '0x59C5635E7417aCA0E3C0BFc7728E414388D3F1db'

const ssABI =
[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "logIn",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "manager",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "minAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]


window.addEventListener('load', function () {
	if (typeof window.ethereum !== 'undefined') {
		console.log('window.ethereum is enabled')
		if (window.ethereum.isMetaMask === true) {
			console.log('MetaMask is active')
			let mmDetected = document.getElementById('mm-detected')
			let t1 = 'MetaMask is '
			let av1 = t1.fontcolor("white")
			let t2 = 'Available!'
			let av2 = t2.fontcolor("green")
			let av = av2.bold()
			mmDetected.innerHTML += av1 + av

			var web3 = new Web3(window.ethereum)

		} else {
			console.log('MetaMask is not available')
			let mmDetected = document.getElementById('mm-detected').style.color = 'blue';
			mmDetected.innerHTML += 'MetaMask Not Available!'
		}
	} else {
		console.log('window.ethereum is not found')
		let mmDetected = document.getElementById('mm-detected')
		mmDetected.innerHTML += '<p>MetaMask Not Available!<p>'
	}
})


var web3 = new Web3(window.ethereum)
const mmEnable = document.getElementById('mm-connect');
mmEnable.onclick = async () => {
	await ethereum.request({ method: 'eth_requestAccounts' })
	// grab mm-current-account
	// and populate it with the current address
	var mmCurrentAccount = document.getElementById('mm-current-account');
	let text = ethereum.selectedAddress
	let av1 = text.bold()
	mmCurrentAccount.innerHTML = 'Current Account: ' + av1
}
const sslogIn = document.getElementById('click1');
sslogIn.onclick = async () => {
	var web3 = new Web3(window.ethereum);
	const collateral = web3.utils.toBN(web3.utils.toWei('1', 'ether'));
	const schContract = new web3.eth.Contract(ssABI, ssAddress);
	schContract.setProvider(window.ethereum);
	try {
		const res = await schContract.methods.logIn().send({from: ethereum.selectedAddress, value: collateral});
		console.log(res);
		console.log('Done!5');
		alert('You have successfully logged in')
	}catch{
		alert('Sorry! Some thing Went Wrong.. Try again')
	}
}

