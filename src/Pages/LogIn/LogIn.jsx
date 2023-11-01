import { Link } from "react-router-dom";
import image from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const LogIn = () => {
  const {googleLogIn, logIn} = useContext(AuthContext);
  const handleLogIn = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
    .then(res => console.log(res.user))
    .catch(err => console.log(err.message))
  }
  const handleGoogleSignIn = () => {
    googleLogIn()
    .then(res => {
      console.log(res.user)
    })
    .catch(err => {
      console.log(err.message)
    })
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left mr-10">
          <img src={image} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogIn} className="card-body">
            <h2 className="text-3xl font-bold text-center">Log In</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn bg-[#FF3811] text-white">Login</button>
            </div>
            
            <div>
              <p>
                New to Car DOctor?{" "}
                <Link
                  to={"/register"}
                  className="font-bold text-blue-600 underline"
                >
                  Register
                </Link>{" "}
              </p>
            </div>
          </form>
          <div className="py-5">
              <p className="text-center pb-5">Or Sign In With</p>
              <div className="flex justify-center items-center gap-5">
                <button onClick={handleGoogleSignIn}>
                  <img
                    className="h-14 w-14 p-3 rounded-full bg-base-300"
                    src="https://seeklogo.com/images/G/google-logo-28FA7991AF-seeklogo.com.png"
                    alt=""
                  />
                </button>
                <button>
                  <img
                    className="h-14 w-14 p-3 rounded-full bg-base-300"
                    src="https://i.ibb.co/wYdQVgh/download-2.png"
                    alt=""
                  />
                </button>
                <button>
                  <img
                    className="h-14 w-14 p-3 rounded-full bg-base-300"
                    src="https://i.ibb.co/cghwtpv/download-3.png"
                    alt=""
                  />
                </button>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
