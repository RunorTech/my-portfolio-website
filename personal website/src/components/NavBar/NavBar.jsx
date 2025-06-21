import "./NavBar.css";
import { CiMenuFries } from "react-icons/ci";
import { CiSquareRemove } from "react-icons/ci";
import Button from "../../assets/components/Button/Button";
import { myFunction } from "../../utils";
import { useState } from "react";

const NavBar = () => {
	window.onscroll = function () { myFunction() };
	

	const [isOpen, setIsOpen] = useState(false);
	const handleToggle = () => setIsOpen(!isOpen);
	const closeMenu = () => setIsOpen(false);

	return (
		<div id="navbar" className="!z-50">
			<div className="center-nav" >
				<div className="nav-bar">
					<div >
						<h1 className="text-3xl font-extrabold">RunorTech</h1>

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
				<div >
					<h1 className="text-3xl font-extrabold">RunorTech</h1>

				</div>

				<div className="hamburger-menu">
					<div onClick={handleToggle} className="cursor-pointer"
					>
					{isOpen ? (
						<CiSquareRemove className="font-bold text-4xl" />
					) : (
						<CiMenuFries className="font-bold text-4xl" />
					)}
					</div>
				</div>
				<div className={`hamburger-links ${isOpen ? 'add' : ''}`}>
					<li onClick={closeMenu}><a href="#home">Home</a></li>
					<li onClick={closeMenu} ><a href="#about">About Me</a></li>
					<li onClick={closeMenu} ><a href="#experience">Experience</a></li>
					<li onClick={closeMenu} ><a href="#projects">Projects</a></li>
					<li onClick={closeMenu} ><a href="#contact">Contact me</a></li>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
