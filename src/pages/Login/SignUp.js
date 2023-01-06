import React, { useState } from "react";
import "./Login.css";
import background from "../../assests/cinemaback.jpg";
import glass from "../../assests/3dGlass.png";
import clamp from "../../assests/clamp.png";
import { Link } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { firebaseAuth } from "../../utils/firebase-config";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <div>
      <div className="loginPage">
        <div className="background">
          <img src={glass} className="glass"></img>
          <img src={clamp} className="clamp"></img>
        </div>
        <form>
          <h3>Sign Up</h3>

          <label for="username">Username</label>
          <input
            type="email"
            placeholder="Email "
            onChange={(e) =>
              setFormValues({
                ...formValues,
                [e.target.name]: e.target.value,
              })
            }
            name="email"
            value={formValues.email}
          />

          <label for="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setFormValues({
                ...formValues,
                [e.target.name]: e.target.value,
              })
            }
            name="password"
            value={formValues.password}
          />
          <div className="btn">
            <button onClick={handleSignIn} className="btn-grad">
              Sign Up
            </button>
          </div>
          <div className="social">
            <div className="go" >
              <i className="fab fa-google"></i> Google
            </div>
            <div className="fb">
              <i className="fab fa-facebook"></i> Facebook
            </div>
          </div>
          <br></br>
          <p className='py-8'>
                  <span className='text-gray-600'>
                    Already subscribed to CiniDime?
                  </span>{' '}
                  <Link to='/login'>Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
