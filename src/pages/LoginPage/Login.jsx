/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const navigate=useNavigate()
  const {login}=useContext(AuthContext);

  
  const handleLogin=(event)=>{
    event.preventDefault();
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
    login(email, password)
    navigate('/')
  }
  return (
    <div className="min-h-screen flex justify-center items-center">
      <form onSubmit={handleLogin} className=" w-1/4 border border-orange-500 shadow-lg shadow-orange-300 p-5">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-gray-700">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-gray-700">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            name="password"
            className="input input-bordered"
            required
          />
          <label className="">
            <p className="text-gray-700">
              Don't Have an Account?
              <Link to="/register" className="text-orange-500">
                Please Register
              </Link>
            </p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn bg-orange-500">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
