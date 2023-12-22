import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <form className=" w-1/4 border border-orange-500 shadow-lg shadow-orange-300 p-5">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-gray-700">Name</span>
          </label>
          <input
            type="text"
            placeholder="Full-Name"
            name="name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-gray-700">Email</span>
          </label>
          <input
            type="text"
            placeholder="email"
            name="email"
            className="input input-bordered"
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
          />
          <label className="">
            <p className="text-gray-700">
              Already Have an account?{" "}
              <Link to="/login" className="text-orange-500">
                Please Login
              </Link>
            </p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn bg-orange-500">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
