import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../appwrite/auth";

export const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setError("");
    try {
      const session = await authService.loginEmailPassword(formData);
      if (session) {
        const currentUser = await authService.getCurrentUser();
        console.log("🚀 ~ handleSubmit ~ currentUser:", currentUser);
        navigate("/");
      }
    } catch (err) {
      console.error("⚠️ ~ handleSubmit ~ err::", err);
    }
  };
  const handleGoogleSignIn = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setError("");
    try {
      const session = await authService.loginWithGoogle();
      console.log("🚀 ~ handleGoogleSignIn ~ session:", session)
      if (session) {
        const currentUser = await authService.getCurrentUser();
        console.log("🚀 ~ handleGoogleSignIn ~ currentUser:", currentUser)
        const currentgooglesession = await authService.getGoogleSession();
        console.log("🚀 ~ handleGoogleSignIn ~ currentgooglesession:", currentgooglesession)
        // navigate("/");
      }
    } catch (err) {
      console.error("⚠️ ~ handleSubmit ~ err::", err);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            {/* Replace with your logo component */}
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Log in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have an account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        <div className="mt-8">
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-900 bg-white hover:bg-gray-50 border-gray-300"
          >
            <img
              className="h-5 w-5 mr-2"
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google logo"
            />
            Login in with Google
          </button>
        </div>
        <h2>OR</h2>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email:
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password:
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
