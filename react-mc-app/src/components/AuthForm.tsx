import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axiosInstance from "../lib/axios";

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingGoogle, setIsLoadingGoogle] = useState(false);
  const navigate = useNavigate();
  const { signInWithGoogle, sighUpWithEmail, signInWithEmail } = useAuth();

  const validationSchema = Yup.object({
    name: isSignUp
      ? Yup.string().required("Name is required")
      : Yup.string().notRequired(),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      setIsLoading(true);
      try {
        if (isSignUp) {
          await sighUpWithEmail(values.email, values.password, values.name);
        } else {
          await signInWithEmail(values.email, values.password);
        }
        await axiosInstance.get("/");
        navigate("/");
      } catch (err: any) {
        setErrors({ email: err.message || "An error occurred" });
      } finally {
        setSubmitting(false);
        setIsLoading(false);
      }
    },
  });

  const handleGoogleSignIn = async () => {
    setIsLoadingGoogle(true);
    try {
      await signInWithGoogle();
      // navigate("/");
    } catch (err: any) {
      formik.setErrors({ email: err.message || "An error occurred" });
    } finally {
      setIsLoadingGoogle(false);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col items-center justify-center px-6 py-8">
      <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6">
          <h1 className="text-xl font-bold text-gray-900 md:text-2xl dark:text-white">
            {isSignUp ? "Sign up an account" : "Sign in to your account"}
          </h1>
          <form className="space-y-4" onSubmit={formik.handleSubmit}>
            {isSignUp && (
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  className={`bg-gray-50 border ${
                    formik.touched.name && formik.errors.name
                      ? "border-red-500"
                      : "border-gray-300"
                  } text-sm rounded-lg focus:ring-yellow-600 focus:border-yellow-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
                  placeholder="Your name"
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.name}
                  </p>
                )}
              </div>
            )}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={`bg-gray-50 border ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : "border-gray-300"
                } text-sm rounded-lg focus:ring-yellow-600 focus:border-yellow-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
                placeholder="name@company.com"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.email}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className={`bg-gray-50 border ${
                  formik.touched.password && formik.errors.password
                    ? "border-red-500"
                    : "border-gray-300"
                } text-sm rounded-lg focus:ring-yellow-600 focus:border-yellow-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
                placeholder="••••••••"
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.password}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full text-white bg-yellow-600 hover:bg-yellow-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700"
              disabled={formik.isSubmitting || isLoading}
            >
              {isLoading ? "Loading..." : isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </form>
          <div className="flex items-center justify-between my-4">
            <hr className="w-full border-gray-300" />
            <span className="mx-4 text-gray-500 font-medium">OR</span>
            <hr className="w-full border-gray-300" />
          </div>

          <button
            onClick={handleGoogleSignIn}
            className="w-full text-gray-900 bg-white border border-gray-300 hover:bg-gray-50 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center justify-center mt-4"
            disabled={isLoadingGoogle}
          >
            {isLoadingGoogle ? (
              "Loading..."
            ) : (
              <>
                <img
                  className="h-5 w-5 mr-2"
                  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                  alt="Google logo"
                />
                {isSignUp ? "Sign Up with Google" : "Log In with Google"}
              </>
            )}
          </button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400 flex flex-row">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
            <span
              onClick={() => setIsSignUp((pre) => !pre)}
              className="font-medium text-yellow-600 hover:underline dark:text-yellow-500 ml-1 cursor-pointer"
            >
              {isSignUp ? " Log in here" : " Sign up here"}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AuthForm;
