import React from "react";
import "./Hero.css";
import profile_pic from "../../assets/profile-pic.jpg";
import github from "../../assets/github.png";
import linkdin from "../../assets/linkedin.png";

const Hero = () => {
	
	return (
		<div id="home" className="hero-section">
			<div className="hero">
				<img src={profile_pic}  alt="" />
				<div className="hero-content">
					<p>Hello I'm</p>
					<h1>Ighorodje Oghene<span className="name">runor</span></h1>
					<h2 className="title">Full-Stack Developer</h2>
					<div className="btn-hero">
						<button className="button-28" role="button">
							View CV
						</button>
						<button className="button-288" role="button">
							Contact info
						</button>
					</div>
					<div className="hero-svg">
						<img src={github} style={{ width: 30 }} alt="" />
						<img src={linkdin} style={{ width: 30 }} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
