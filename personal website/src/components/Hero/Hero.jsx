import "./Hero.css";
import profile_pic from "../../assets/profile-pic.jpeg";
import github from "../../assets/github.png";
import linkdin from "../../assets/linkedin.png";
import LightLines from "./light";

const Hero = () => {

	return (
		<div id="home" className="flex grow items-center justify-center mb-3">
			<div className=" relative flex gap-7 flex-wrap items-center justify-center !z-10">
				<img src={profile_pic} className="max-w-96 max-h-96 rounded-4xl" alt="" />
				<div className="hero-content">
					<p>Hello I&apos;m</p>
					<h1 className="text-4xl font-bold">Ighorodje Oghene<span className="name text-4xl font-bold">runor</span></h1>
					<h2 className="title">Full-Stack Developer</h2>
					<div className="flex flex-wrap items-center justify-center gap-3">
						<button className="button-28" role="button">
							View CV
						</button>
						<button className="button-288" role="button">
							Contact info
						</button>
					</div>
					<div className="hero-svg">
						<a href="https://github.com/RunorTech" target="_blank" rel="noopener noreferrer">
							<img src={github} style={{ width: 30 }} alt="GitHub Profile" />
						</a>
						<a href="https://www.linkedin.com/in/oghenerunor-ighorodje-40881a2aa/" target="_blank" rel="noopener noreferrer">
							<img src={linkdin} style={{ width: 30 }} alt="LinkedIn Profile" />
						</a>
					</div>
				</div>
				
			</div>
			<div className="absolute h-full w-full !-z-10">
				<LightLines/>
			</div>
		</div>
	);
};

export default Hero;
