import React, { useState } from "react";
import "./Login.css";
import background from "../../assests/cinemaback.jpg";
import glass from "../../assests/3dGlass.png";
import clamp from "../../assests/clamp.png";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../utils/firebase-config";
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error.code);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <div className="loginPage">
        <div className="background">
          <img src={glass} className="glass"></img>
          <img src={clamp} className="clamp"></img>
        </div>
        <form>
          <h3>Login Here</h3>
          <label for="username">Username</label>
          <input
            type="text"
            placeholder="Email or Phone"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            id="username"
          />
          <label for="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            id="password"
          />
          <div className="btn">
            <button onClick={handleLogin} className="btn-grad">
              Log In
            </button>
          </div>
          <div className="social">
            <div className="go">
              <i className="fab fa-google"></i> Google
            </div>
            <div className="fb">
              <i className="fab fa-facebook"></i> Facebook
            </div>
          </div>
          <br></br>
          <p className='py-8'>
                <span className='text-gray-600'>New to CiniDime?</span>{' '}
                <Link to='/SignUp'>Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
