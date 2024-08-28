import React from "react";
import "./About.css";
import experience from "../../assets/experience.png";
import education from "../../assets/education.png";
import about_pic from "../../assets/profile 2.jpg";
import arrow from "../../assets/arrow.png";
import LoaderNav from "../../assets/components/LoaderNav/LoaderNav";

const About = () => {
	return (
		<div id="about" className="about-section">
			<div className="about">
				<div className="about-title">
					<div>
						<p>Get To Know More</p>
						<h2>About Me</h2>
					</div>
					<div className="loader-nav-about">
						<LoaderNav />
					</div>
				</div>
				<div className="about-content">
					<img src={about_pic}  alt="" />
					<div className="about-content-div">
						<div className="about-content-div-div">
							<div className="education">
								<img
									src={education}
									style={{ width: 30 }}
									alt="education.png"
								/>
								<h3>Education</h3>
								<p>B.Sc. Banchelors Degree</p>
								<p>Business Administration</p>
							</div>
							<div className="experience">
								<img
									src={experience}
									style={{ width: 30 }}
									alt="experience.png"
								/>
								<h3>Experience</h3>
								<p>2+ years</p>
								<p>Full-stack Development</p>
							</div>
						</div>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Provident cupiditate aut odit, expedita esse nostrum facere?
							Beatae, porro. Dolore optio aperiam modi accusamus libero sed
							totam assumenda hic velit. Placeat. Lorem ipsum dolor sit, amet
							consectetur adipisicing elit. Maxime ullam animi eum reiciendis
							porro voluptatem molestiae necessitatibus at corporis quasi
							veritatis, eveniet fugit itaque aliquid temporibus deserunt ipsam
							praesentium recusandae?
						</p>
					</div>
				</div>
				<div  className="about-svg">
					<img src={arrow} style={{ width: 30 }} alt="arrow.png" />
				</div>
			</div>
		</div>
	);
};

export default About;
