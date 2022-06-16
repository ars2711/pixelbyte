const menuButton = document.getElementById('mbutt');
const mnav = document.getElementById('monav');
menuButton.onclick = function () { mobileNav() };

function mobileNav() {
    if (mnav.style.height === "86vh"){
        mnav.style.height = "0";
        mnav.style.display = "none";
        menuButton.innerHTML = "menu";
    }
    else{
        mnav.style.height = "86vh";
        mnav.style.display = "grid";
        menuButton.innerHTML = "close";
    };
};
