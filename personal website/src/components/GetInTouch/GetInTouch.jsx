import React from "react";
import "./GetInTouch.css";
import LoaderNav from "../../assets/components/LoaderNav/LoaderNav";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const GetInTouch = () => {
	return (
		<div id="contact" className="get-in-touch-section">
			<div className="get-in-touch">
				<div className="get-in-touch-title">
					<h2>Get in Touch</h2>
                    <div className="getintousloader">
						<LoaderNav />
					</div>
				</div>
				<div className="get-in-touch-body">
					<div className="contact-me">
						<h4>Lets talk</h4>
						<p>
							i'm currently available to take on a new project, so feel free to
							send me a message about anything you want me to work on.
                            You can contact me anytime.
						</p>
                        <p className="nowrapP"><EmailIcon/><span>:ighorodjeoghenerunor@gmail.com</span> </p>
                        <p className="nowrapP"><LocalPhoneIcon/> <span>: +234 913 0100 819</span></p>
					</div>
					<div >
                        <form className="send-form" action="">
                            <label htmlFor="name"> Your Name
                                <input placeholder="Enter your Name" type="text" />
                            </label>
                            <label htmlFor="email">Your Email
                                <input placeholder="Enter your Email" type="email" />
                            </label>
                            <label htmlFor="message">Write your message here
                                <textarea placeholder="Enter your message" name="message" id=""></textarea>
                            </label>
                            <button>submit</button>
                        </form>
                    </div>
				</div>
			</div>
		</div>
	);
};

export default GetInTouch;
