const pypl = document.getElementById("paypal");
pypl.onclick = function () {
	payPop();
};

function payPop() {
	if (
		window.confirm(
			'Send your donations to the Paypal ID:\n@muhammadzain2005\n\nNote: Clicking "OK" will redirect you to the PayPal site.\n;D'
		)
	) {
		window.location.href =
			"https://www.paypal.com/paypalme/muhammadzain2005?locale.x=en_US";
	}
}

const btc = document.getElementById("btc");
btc.onclick = function () {
	btcPop();
};

function btcPop() {
	if (
		window.confirm(
			'Send your USDT (ERC20) donations to the ETH Wallet:\n0xbC3c95f54DB2f43CC49229272b39DF5718084112\n\nNote: Clicking "OK" will redirect you to the Wallet address.\n;D'
		)
	) {
		window.location.href =
			"https://www.paypal.com/paypalme/muhammadzain2005?locale.x=en_US";
	}
}

document.getElementById("year").innerHTML = new Date().getFullYear();
