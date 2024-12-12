import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Login as LoginComponent } from "../components/Login";

const Login = () => {
  const { user, signInWithGoogle, error } = useAuth();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      navigate("/products");
    }
  }, [user, navigate]);

  const handleGoogleSignIn = async () => {
    try {
      setLoginError(null);
      await signInWithGoogle();
    } catch (error: any) {
      setLoginError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Login in to your account
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
            Login in with Google
          </button>
        </div>
        <LoginComponent />
      </div>
    </div>
  );
};

export default Login;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { login as authLogin } from "../store/authSlice";
// import { Button, Input, Logo } from "./index";
// import { useDispatch } from "react-redux";
// import authService from "../appwrite/auth";
// import { useForm } from "react-hook-form";

// const Login = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { register, handleSubmit } = useForm();
//   const [error, setError] = useState("");

//   const login = async (data) => {
//     setError("");
//     try {
//       const session = await authService.login(data);
//       if (session) {
//         const userData = await authService.getCurrentUser();
//         if (userData) dispatch(authLogin(userData));
//         navigate("/");
//       }
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center w-full">
//       <div
//         className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
//       >
//         <div className="mb-2 flex justify-center">
//           <span className="inline-block w-full max-w-[100px]">
//             <Logo width="100%" />
//           </span>
//         </div>
//         <h2 className="text-center text-2xl font-bold leading-tight">
//           Sign in to your account
//         </h2>
//         <p className="mt-2 text-center text-base text-black/60">
//           Don&apos;t have any account?&nbsp;
//           <Link
//             to="/signup"
//             className="font-medium text-primary transition-all duration-200 hover:underline"
//           >
//             Sign Up
//           </Link>
//         </p>
//         {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
//         <form onSubmit={handleSubmit(login)} className="mt-8">
//           <div className="space-y-5">
//             <Input
//               label="Email: "
//               placeholder="Enter your email"
//               type="email"
//               {...register("email", {
//                 required: true,
//                 validate: {
//                   matchPatern: (value) =>
//                     /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
//                     "Email address must be a valid address",
//                 },
//               })}
//             />
//             <Input
//               label="Password: "
//               type="password"
//               placeholder="Enter your password"
//               {...register("password", {
//                 required: true,
//               })}
//             />
//             <Button type="submit" className="w-full">
//               Sign in
//             </Button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
