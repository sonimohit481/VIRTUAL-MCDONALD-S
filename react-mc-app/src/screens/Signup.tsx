import { Signup as SignupComponent } from "../components/Signup.tsx";
const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        {/* {(loginError || error) && (
              <div
                className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <p className="text-sm">{loginError || error}</p>
              </div>
            )} */}
        <div className="mt-8">
          <button
            // onClick={handleGoogleSignIn}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-900 bg-white hover:bg-gray-50 border-gray-300"
          >
            <img
              className="h-5 w-5 mr-2"
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google logo"
            />
            Sign in with Google
          </button>
        </div>
        <SignupComponent />
      </div>
    </div>
  );
};

export default Signup;
