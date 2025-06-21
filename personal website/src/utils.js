
export const  myFunction = () => {
    var navbar = document.getElementById("navbar");
    var hero = document.getElementById("home");
    var front_end = document.getElementById("front-end");
    var back_end = document.getElementById("back-end");

    var progress_int = document.querySelectorAll(".progress-int");
    var progress_exp = document.querySelectorAll(".progress-exp")
    var progress_basic = document.querySelectorAll(".progress-basic")
    if (window.scrollY >= hero.offsetHeight) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
    if (window.scrollY >= front_end.offsetHeight) {
      progress_int.forEach(el => {
        el.classList?.add("animate-progress-int");
      });
      progress_exp.forEach(el => el.classList?.add("animate-progress-exp"))
      progress_basic.forEach(el => el.classList?.add("animate-progress-basic"))
      console.log('opo')
    } else {
      progress_int.forEach(el => el.classList?.remove("animate-progress-int"))
      progress_exp.forEach(el => el.classList?.remove("animate-progress-exp"))
      progress_basic.forEach(el => el.classList?.remove("animate-progress-basic"))
    }
    if (window.scrollY >= back_end.offsetHeight) {
      progress_int.forEach(el => {
        el.classList?.add("animate-progress-int");
      });
      progress_exp.forEach(el => el.classList?.add("animate-progress-exp"))
      progress_basic.forEach(el => el.classList?.add("animate-progress-basic"))
      console.log('opo')
    } else {
      progress_int.forEach(el => el.classList?.remove("animate-progress-int"))
      progress_exp.forEach(el => el.classList?.remove("animate-progress-exp"))
      progress_basic.forEach(el => el.classList?.remove("animate-progress-basic"))
    }
  };