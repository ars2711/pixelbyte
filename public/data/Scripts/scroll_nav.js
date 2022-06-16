window.onscroll = () => {scrollNavbar()};

scrollNavbar = () => {
    // Target elements
  var navBar = document.getElementById("navbar");
  const links = document.querySelectorAll("#navbar .active");
  const text = document.querySelectorAll("#navbar .topnav-text");

  if (document.documentElement.scrollTop > 10) {
    navBar.classList.add("fixed-header");

    // Change the color of links on scroll
    for (let i = 0; i < links.length; i++) {
        const element = links[i];
        element.classList.add('scrolled-active');
    }
    for (let i = 0; i < text.length; i++) {
        const element = text[i];
        element.classList.add('topnav-text-active');
    }

  } else {
    navBar.classList.remove("fixed-header");
    
    // Change the color of links back to default
    for (let i = 0; i < links.length; i++) {
        const element = links[i];
        element.classList.remove('scrolled-active');
    }
    for (let i = 0; i < text.length; i++) {
        const element = text[i];
        element.classList.remove('topnav-text-active');
    }
  }
}