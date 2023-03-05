import { Link } from "react-router-dom";

const Account = () => {
  return (
    <div className="account">
      <div className="account-top bg-gray-400 py-28 text-center flex flex-col gap-10">
        <h2 className="text-6xl text-gray-50 font-semibold">My Account</h2>
        <span className=" block w-28 h-[2px] bg-slate-50 mx-auto"></span>
        <p className="text-2xl text-gray-50">
          We always take care of your desire
        </p>
      </div>
      <div className="account-form container mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="login flex flex-col gap-10">
          <h2 className="text-3xl text-gray-900 font-semibold">Login</h2>
          <form className="form w-4/5 border py-10 px-7 flex flex-col gap-5">
            <div className="form-control flex flex-col gap-1">
              <label htmlFor="username" className="cursor-pointer">
                Username or email address
                <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter your name.."
                required
                className="py-3 px-1 border outline-none focus:border-gray-500 duration-500"
              />
            </div>
            <div className="form-control flex flex-col gap-1">
              <label htmlFor="password" className="cursor-pointer">
                Password <span className="text-red-600">*</span>
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password.."
                required
                className="py-3 px-1 border outline-none focus:border-gray-500 duration-500"
              />
            </div>

            <div className="form-control">
              <input type="checkbox" />
              <span className="ml-1">Remember me</span>
            </div>
            <button
              type="submit"
              className="inline-block w-[6rem] border py-2 px-4 text-center bg-transparent hover:bg-gray-900 hover:text-gray-50 duration-300"
            >
              Log in
            </button>
            <Link className="hover:underline hover:text-green-900 duration-300 font-semibold">
              Lost your password?
            </Link>
          </form>
        </div>
        <div className="login flex flex-col gap-10">
          <h2 className="text-3xl text-gray-900 font-semibold">Register</h2>
          <form className="form w-4/5 border py-10 px-7 flex flex-col gap-5">
            <div className="form-control flex flex-col gap-1">
              <label htmlFor="username" className="cursor-pointer">
                Username <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter your name.."
                required
                className="py-3 px-1 border outline-none focus:border-gray-500 duration-500"
              />
            </div>
            <div className="form-control flex flex-col gap-1">
              <label htmlFor="password" className="cursor-pointer">
                Email address <span className="text-red-600">*</span>
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password.."
                required
                className="py-3 px-1 border outline-none focus:border-gray-500 duration-500"
              />
            </div>
            <p>
              A link to set a new password will be sent to your email address.
            </p>
            <p>
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </p>

            <button
              type="submit"
              className="inline-block w-[6rem] border py-2 px-4 text-center bg-transparent hover:bg-gray-900 hover:text-gray-50 duration-300"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;
