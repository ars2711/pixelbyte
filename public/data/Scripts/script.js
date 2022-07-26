window.addEventListener('load', mktdFunction);
const menuButton = document.getElementById('mbutt');
const mnav = document.getElementById('monav');
menuButton.onclick = function () { mobileNav() };

function mobileNav() {
    if (mnav.style.height === "88vh"){
        mnav.style.height = "0";
        mnav.style.display = "none";
        menuButton.innerHTML = "menu";
    }
    else{
        mnav.style.height = "88vh";
        mnav.style.display = "grid";
        menuButton.innerHTML = "close";
    };
};

const mktopen0 = document.getElementById('mopen0');
const mktw0 = document.getElementById('mktw0');
const mktf0 = document.getElementById('mktf0');
const mktg0 = document.getElementById('mktg0');
mktopen0.onclick = function () { mkt0function() };
function mkt0function() {
    if (mktopen0.innerHTML === "expand_more") {
        mktw0.style.height = "80vh"
        mktf0.style.height = "80vh";
        mktg0.style.height = "110vh";
        mktf0.style.width = "90vw";
        mktf0.style.display = "block";
        mktopen0.innerHTML = "expand_less";
    }
    else {
        mktw0.style.height = "0"
        mktf0.style.height = "0";
        mktf0.style.border = "var(--main-color) solid 1px";
        mktg0.style.height = "30vh";
        mktf0.style.width = "0";
        mktf0.style.display = "none";
        mktopen0.innerHTML = "expand_more";
    };
};

const mktopen1 = document.getElementById('mopen1');
const mktw1 = document.getElementById('mktw1');
const mktf1 = document.getElementById('mktf1');
const mktg1 = document.getElementById('mktg1');
mktopen1.onclick = function () { mkt1function() };
function mkt1function() {
    if (mktopen1.innerHTML === "expand_more") {
        mktw1.style.height = "80vh"
        mktf1.style.height = "80vh";
        mktf1.style.border = "var(--main-color) solid 1px";
        mktg0.style.height = "110vh";
        mktf1.style.width = "90vw";
        mktf1.style.display = "block";
        mktopen1.innerHTML = "expand_less";
    }
    else {
        mktw1.style.height = "0"
        mktf1.style.height = "0";
        mktg0.style.height = "30vh";
        mktf1.style.width = "0";
        mktf1.style.display = "none";
        mktopen1.innerHTML = "expand_more";
    };
};
function mktdFunction() {
    if (mktopen0.innerHTML === "expand_less" && mktopen1.innerHTML === "expand_less"){
        mktg0.style.height = "210vh";
    }
};

const pypl = document.getElementById('paypal');
pypl.onclick = function () { payPop() };
function payPop() {
    if (window.confirm('Send your donations to the Paypal ID:\n@muhammadzain2005\n\nNote: Clicking "OK" will redirect you to the PayPal site.\n;D')) 
{
window.location.href='https://www.paypal.com/paypalme/muhammadzain2005?locale.x=en_US';
};
};
const btc = document.getElementById('btc');
btc.onclick = function () { btcPop() };
function btcPop() { 
    window.confirm("Send your donation to the Crypto Wallet:\n###\n;D");
};