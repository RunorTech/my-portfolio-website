
export const  myFunction = () => {
    var navbar = document.getElementById("navbar");
    var hero = document.getElementById("home");
	var sticky = navbar.offsetTop;
   console.log(sticky, window.scrollY, )
    if (window.scrollY >= hero.offsetHeight) {
      navbar.classList.add("sticky")
      // hero.classList.add("margin")
    } else {
      navbar.classList.remove("sticky");
      // hero.classList.remove("margin")
    }
  };