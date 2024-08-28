import React from "react";
import "./Projects.css";
import project_pic1 from "../../assets/projectss.png";
import LoaderNav from "../../assets/components/LoaderNav/LoaderNav";
import arrow from "../../assets/arrow.png";
import project_pic from '../../assets/projectd.jpg'
import project3 from '../../assets/project-3.png'

const Projects = () => {
	return (
		<div id="projects" className="projects-section">
			<div className="projects-body">
				<div className="projects-title">
					<div>
						<p>Browse My Recent</p>
						<h2>Projets</h2>
					</div>

					<div className="project-loadernav">
						<LoaderNav />
					</div>
				</div>
				<div className="projects-card-div">
					<div className="projects-card">
						<img src={project_pic1} style={{ width: 250, height:240 }} alt="" />
						<h4>NoteWeb</h4>
						<div>
							<button>GitHub</button>
							<button>Live Demo</button>
						</div>
					</div>
					<div className="projects-card">
						<img src={project_pic} style={{ width: 250, height:240  }} alt="" />
					
						<h4>DBank app</h4>
						<div>
							<button>GitHub</button>
							<button>Live Demo</button>
						</div>
					</div>
					<div className="projects-card">
						<img src={project3} style={{ width: 250, height:240  }} alt="" />
						<h4>lorem ipsum</h4>
						<div>
							<button>GitHub</button>
							<button>Live Demo</button>
						</div>
					</div>
					
				</div>
			</div>
            <div className="projects-svg">
				<img src={arrow} style={{ width: 30 }} alt="arrow.png" />
			</div>
		</div>
	);
};

export default Projects;
