import "./Projects.css";
import project_video3 from "../../assets/ireach.mp4";
import arrow from "../../assets/arrow.png";
import project_video2 from '../../assets/food.mp4'
import project_video from '../../assets/video.mp4'

import LightLines from "../Hero/light";

const Projects = () => {
	return (
		<div id="projects" className="relative min-h-screen flex justify-center items-center w-full">
			<div className="flex flex-col items-center gap-12 w-full">
				<div className="text-center">
					<div>
						<p>Browse My Recent</p>
						<h2 className="text-5xl">Projects</h2>
					</div>
				</div>
				<div className="flex gap-12 flex-wrap items-center justify-center">
					<div className="projects-card flex flex-col items-center gap-5 rounded-4xl flex-grow !p-14">
						{/* <img src={project_pic1} style={{ width: 250, height: 240 }} alt="" /> */}
						<video style={{ width: 250, height: 240 }} src={project_video} autoPlay loop></video>
						<h4>Game App</h4>
						<div>
							<a href="https://github.com/RunorTech/nextapp/blob/4f1d026f39526fdeaa814e7bc5d37a20c38cdc9c/package.json" className="button">GitHub</a>
							<a href="https://project-zeta-gray.vercel.app/" className="button">Live Demo</a>
						</div>
					</div>
					<div className="projects-card flex flex-col items-center gap-5 rounded-4xl flex-grow !p-14">
						{/* <img src={project_pic} style={{ width: 250, height: 240 }} alt="" /> */}
						<video style={{ width: 250, height: 240 }} src={project_video2} autoPlay loop></video>

						<h4>Bulk Food</h4>
						<div>
							<a href="https://github.com/RunorTech/e_frontend/blob/cd89bd768d96fdd9ed74babdead98d323a9e87a0/package.json" className="button">GitHub</a>
							<a href="https://e-frontend-mauve.vercel.app/" className="button">Live Demo</a>
						</div>
					</div>
					<div className="projects-card flex flex-col items-center gap-5 rounded-4xl flex-grow !p-14">
						{/* <img src={project3} style={{ width: 250, height: 240 }} alt="" /> */}
						<video style={{ width: 250, height: 240 }} src={project_video3} autoPlay loop></video>

						<h4>Ireach Web App</h4>
						<div>
							<a href="https://github.com/RunorTech/ireach-systems-frontend/blob/b8e6f37f72d56a4f52919f78e1364d82661e645b/package.json" className="button">GitHub</a>
							<a href="https://ireach-systems-frontend-ir-customer.vercel.app/android/webkit/home" className="button">Live Demo</a>
						</div>
					</div>

				</div>
				<div className="projects-svg">
					<img src={arrow} style={{ width: 30 }} alt="arrow.png" />
				</div>
			</div>
			<div className="absolute h-full w-full !-z-10">
				<LightLines />
			</div>

		</div>
	);
};

export default Projects;
