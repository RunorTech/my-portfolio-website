import React from "react";
import "./NavBar.css";
import logo from "../../assets/runor-high-resolution-logo-white-transparent.svg/";
import Button from "../../assets/components/Button/Button";
import LoaderNav from "../../assets/components/LoaderNav/LoaderNav";
import { myFunction } from "../../utils";

const NavBar = () => {
	window.onscroll = function() {myFunction()};
	
  
	
  const toggleMenu =() => {
    const menu = document.querySelector(".hamburger-links");
	const icon = document.querySelector(".hamburger-icon");
	menu.classList.toggle("add");
	icon.classList.toggle("add");
  }

	return (
		<div id="navbar">
			<div className="center-nav" >
				<div className="nav-bar">
					<div>
						<LoaderNav />
						<img style={{ width: 200 }} src={logo} alt="nav bar logo" />
					</div>

					<ul className="nav-items">
						<li><a href="#home">Home</a></li>
						<li><a href="#about">About Me</a></li>
						<li><a href="#experience">Experience</a></li>
						<li><a href="#projects">Projects</a></li>
						<li><a href="#contact">Contact me</a></li>
					</ul>
					<div className="request">
						<Button />
					</div>
				</div>
			</div>
			<div id="hamburger-nav">
				<div>
					<LoaderNav />
					<img style={{ width: 200 }} src={logo} alt="nav bar logo" />
				</div>

				<div className="hamburger-menu">
					<div className="hamburger-icon" onClick={toggleMenu} >
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div className="hamburger-links">
						<li  onClick={toggleMenu}><a href="#home">Home</a></li>
						<li onClick={toggleMenu} ><a href="#about">About Me</a></li>
						<li  onClick={toggleMenu} ><a href="#experience">Experience</a></li>
						<li onClick={toggleMenu} ><a href="#projects">Projects</a></li>
						<li onClick={toggleMenu} ><a href="#contact">Contact me</a></li>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
