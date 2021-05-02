import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import "./Login.css";
const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://cdn2.downdetector.com/static/uploads/logo/amazon.png"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={signIn}
            className="login__signinButton"
          >
            Sign In
          </button>
        </form>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
          aspernatur at quibusdam dolor dicta quaerat ex in fugiat unde debitis
          aut numquam fuga molestias commodi excepturi, neque maiores eum
          similique.
        </p>
        <button onClick={register} className="login__reqisterButton">
          Create Your amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
