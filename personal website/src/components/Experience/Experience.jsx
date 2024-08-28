import React from "react";
import "./Experience.css";
import LoaderNav from "../../assets/components/LoaderNav/LoaderNav";
import checkmark from "../../assets/checkmark.png";
import ProgressExp from "../../assets/components/Progress/Exp/ProgressExp.jsx";
import Intermediate from '../../assets/components/Progress/Intermediate/Intermediate.jsx';
import Basic from "../../assets/components/Progress/Basic/Basic.jsx";
import arrow from "../../assets/arrow.png";

const Experience = () => {
	return (
		<div id="experience" className="experience-section">
			<div className="experience-body">
				<div className="experience-title">
					<div className="experience-text">
						<p>Explore My</p>
						<h2>Experience</h2>
					</div>
					<div className="exploadernav">
						<LoaderNav />
					</div>
				</div>
				<div className="experience-content">
					<div className="front-end">
						<h3>Frontend Development</h3>
						<div className="frontend-content">
							<img src={checkmark} style={{ width: 30, height: 30 }} alt="" />
							<div>
								<h4>HTML</h4>
								<p>Experience</p>
								<ProgressExp />
							</div>
						</div>
						<div className="frontend-content">
							<img src={checkmark} style={{ width: 30, height: 30 }} alt="" />
							<div>
								<h4>CSS</h4>
								<p>Experience</p>
								<ProgressExp />
							</div>
						</div>
						<div className="frontend-content">
							<img src={checkmark} style={{ width: 30, height: 30 }} alt="" />
							<div>
								<h4>JavaScript</h4>
								<p>Intermediate</p>
								<Intermediate/>
							</div>
						</div>
						<div className="frontend-content">
							<img src={checkmark} style={{ width: 30, height: 30 }} alt="" />
							<div>
								<h4>React</h4>
								<p>Intermediate</p>
								<Intermediate />
							</div>
						</div>
						<div className="frontend-content">
							<img src={checkmark} style={{ width: 30, height: 30 }} alt="" />
							<div>
								<h4>Bootstrap</h4>
								<p>Intermediate</p>
								<Intermediate />
							</div>
						</div>
					</div>
					{/* backend list */}

					<div className="back-end">
						<h3>Backend Development</h3>
						<div className="backend-content">
							<img src={checkmark} style={{ width: 30, height: 30 }} alt="" />
							<div>
								<h4>Node.js</h4>
								<p>Intermediate</p>
								<Intermediate />
							</div>
						</div>
						<div className="backend-content">
							<img src={checkmark} style={{ width: 30, height: 30 }} alt="" />
							<div>
								<h4>PostgresSQL</h4>
								<p>Basic</p>
								<Basic/>
							</div>
						</div>
						<div className="backend-content">
							<img src={checkmark} style={{ width: 30, height: 30 }} alt="" />
							<div>
								<h4>Express.js</h4>
								<p>Intermediate</p>
								<Intermediate />
							</div>
						</div>
						<div className="backend-content">
							<img src={checkmark} style={{ width: 30, height: 30 }} alt="" />
							<div>
								<h4>MoToKo / Web3 Developement</h4>
								<p>Basic</p>
								<Basic/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="experience-svg">
				<img src={arrow} style={{ width: 30 }} alt="arrow.png" />
			</div>
		</div>
	);
};

export default Experience;
