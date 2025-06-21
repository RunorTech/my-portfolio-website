import "./Experience.css";
import checkmark from "../../assets/checkmark.png";
import ProgressExp from "../../assets/components/Progress/Exp/ProgressExp.jsx";
import Intermediate from '../../assets/components/Progress/Intermediate/Intermediate.jsx';
import Basic from "../../assets/components/Progress/Basic/Basic.jsx";
import arrow from "../../assets/arrow.png";
import LightLines from "../Hero/light.jsx";

const Experience = () => {
	return (
		<div id="experience" className="relative min-h-screen flex flex-col justify-center items-center w-full">
			<div className="flex justify-center items-center flex-col gap-20 w-full">
				<div className="flex gap-12">
					<div className="text-center">
						<p>Explore My</p>
						<h2 className="text-5xl">Experience</h2>
					</div>
				</div>
				<div className="flex items-center justify-center gap-12 flex-wrap">
					<div className="front-end flex flex-col gap-5 rounded-4xl !p-8 ">
						<h3 className="text-4xl">Frontend Development</h3>
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

					<div className="back-end front-end flex flex-col gap-5 rounded-4xl !p-8">
						<h3 className="text-4xl">Backend Development</h3>
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
				<div className="experience-svg">
					<img src={arrow} style={{ width: 30 }} alt="arrow.png" />
				</div>
			</div>
			<div className="absolute h-full w-full !-z-10">
				<LightLines />
			</div>
			
		</div>
	);
};

export default Experience;
