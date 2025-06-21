import "./About.css";
import experience from "../../assets/experience.png";
import education from "../../assets/education.png";
import about_pic from "../../assets/profile 2.jpg";
import arrow from "../../assets/arrow.png";
import LoaderNav from "../../assets/components/LoaderNav/LoaderNav";
import LightLines from "../Hero/light";

const About = () => {
	return (
		<div id="about" className="relative flex items-center min-h-screen w-full">
			<div className="flex flex-col justify-center items-center  gap-20 w-full">
				<div className="flex justify-center text-center gap-12">
					<div>
						<p>Get To Know More</p>
						<h2 className="text-5xl">About Me</h2>
					</div>
					<div className="loader-nav-about">
						<LoaderNav />
					</div>
				</div>
				<div className="flex justify-center items-center flex-wrap gap-12">
					<img src={about_pic} alt="" className="max-w-96 rounded-4xl"/>
					<div className="flex flex-col gap-12">
						<div className="flex flex-wrap gap-12 justify-between">
							<div className="education min-w-2xs flex flex-grow flex-col justify-center items-center gap-1 rounded-4xl !py-9">
								<img
									src={education}
									style={{ width: 30 }}
									alt="education.png"
								/>
								<h3>Education</h3>
								<p>B.Sc. Banchelors Degree</p>
								<p>Business Administration</p>
							</div>
							<div className="experience min-w-2xs flex flex-grow flex-col justify-center items-center gap-1 rounded-4xl !py-9">
								<img
									src={experience}
									style={{ width: 30 }}
									alt="experience.png"
								/>
								<h3>Experience</h3>
								<p>3+ years</p>
								<p>Full-stack Development</p>
							</div>
						</div>
						<p className="max-w-3xl  !px-8">
							I&apos;m Oghenerunor Ighorodje, a passionate software engineer with a strong focus on frontend development. I specialize in building responsive, user-friendly web applications using modern technologies like React, TypeScript, Next.js, and Tailwind CSS. I&apos;ve worked on real-world projects ranging from dynamic UI components to full-stack integrations, combining technical skills with a strong attention to user experience. Based in Nigeria, I&apos;m committed to continuous learning and creating innovative solutions that make a real impact.
						</p>
					</div>
				</div>
				<div className="about-svg mb-3">
					<img src={arrow} style={{ width: 30 }} alt="arrow.png" />
				</div>
			</div>
			<div className="absolute h-full w-full !-z-10">
				<LightLines />
			</div>
		</div>
	);
};

export default About;
