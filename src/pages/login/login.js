import { useRef } from 'react';
import './login.css';

export default function login (){

// const sign_in_btn = useRef(null);
// const sign_up_btn = useRef(null);
const container = useRef(null)

function swapScreen(str){
    if(str=='signup'){
        container.current.classList = "container sign-up-mode";
    }
    else{
        container.current.classList = "container";
    }
}
// const sign_in_btn = document.querySelector("#sign-in-btn");
// const sign_up_btn = document.querySelector("#sign-up-btn");
// const container = document.querySelector(".container");

// sign_up_btn.addEventListener("click", () => {
//   container.classList.add("sign-up-mode");
// });

// sign_in_btn.addEventListener("click", () => {
//   container.classList.remove("sign-up-mode");
// });


    return(
        <>
            <div className="container" ref={container}>
		<div className="forms-container">
			<div className="signin-signup">
				<form action="#" className="sign-in-form">
					<h2 className="title">Sign in</h2>
					<div className="input-field">
						<i className="fas fa-user"></i>
						<input type="text" placeholder="Username" />
					</div>
					<div className="input-field">
						<i className="fas fa-lock"></i>
						<input type="password" placeholder="Password" />
					</div>
					<input type="submit" value="Login" className="btn solid" />
					<p className="social-text">Or Sign in with social platforms</p>
					<div className="social-media">
						<a href="#" className="social-icon">
							<i className="fab fa-facebook-f"></i>
						</a>
						<a href="#" className="social-icon">
							<i className="fab fa-twitter"></i>
						</a>
						<a href="#" className="social-icon">
							<i className="fab fa-google"></i>
						</a>
						<a href="#" className="social-icon">
							<i className="fab fa-linkedin-in"></i>
						</a>
					</div>
				</form>
				<form action="#" className="sign-up-form">
					<h2 className="title">Sign up</h2>
					<div className="input-field">
						<i className="fas fa-user"></i>
						<input type="text" placeholder="Username" />
					</div>
					<div className="input-field">
						<i className="fas fa-envelope"></i>
						<input type="email" placeholder="Email" />
					</div>
					<div className="input-field">
						<i className="fas fa-lock"></i>
						<input type="password" placeholder="Password" />
					</div>
					<input type="submit" className="btn" value="Sign up" />
					<p className="social-text">Or Sign up with social platforms</p>
					<div className="social-media">
						<a href="#" className="social-icon">
							<i className="fab fa-facebook-f"></i>
						</a>
						<a href="#" className="social-icon">
							<i className="fab fa-twitter"></i>
						</a>
						<a href="#" className="social-icon">
							<i className="fab fa-google"></i>
						</a>
						<a href="#" className="social-icon">
							<i className="fab fa-linkedin-in"></i>
						</a>
					</div>
				</form>
			</div>
		</div>

		<div className="panels-container">
			<div className="panel left-panel">
				<div className="content">
					<h3>New to our community ?</h3>
					<p>
						Discover a world of possibilities! Join us and explore a vibrant
          community where ideas flourish and connections thrive.
					</p>
					<button className="btn transparent" onClick={()=>swapScreen('signup')} id="sign-up-btn">
						Sign up
					</button>
				</div>
				<img  src="https://i.ibb.co/6HXL6q1/Privacy-policy-rafiki.png" className="image" alt="" />
			</div>
			<div className="panel right-panel">
				<div className="content">
					<h3>One of Our Valued Members</h3>
					<p>
						Thank you for being part of our community. Your presence enriches our
          shared experiences. Let's continue this journey together!
					</p>
					<button className="btn transparent" onClick={() => swapScreen('signin')} id="sign-in-btn">
						Sign in
					</button>
				</div>
				<img src="https://i.ibb.co/nP8H853/Mobile-login-rafiki.png"  className="image" alt="" />
			</div>
		</div>
	</div>
        </>
    )
}