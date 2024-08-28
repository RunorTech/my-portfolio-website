
export const  myFunction = () => {
    var navbar = document.getElementById("navbar");
    var hero = document.getElementById("home");
	var sticky = navbar.offsetTop;
    if (window.scrollY >= sticky) {
      navbar.classList.add("sticky")
      hero.classList.add("margin")
    } else {
      navbar.classList.remove("sticky");
      hero.classList.remove("margin")
    }
  };