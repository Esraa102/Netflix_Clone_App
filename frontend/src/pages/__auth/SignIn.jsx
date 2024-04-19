/* eslint-disable react-hooks/exhaustive-deps */
import { Form } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import { useLogInUserMutation } from "../../features/auth/api/authApi";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { logInUserAction } from "../../features/auth/authSlice";
const SignIn = () => {
  const [logInUser, { data, isError, isSuccess, error, isLoading }] =
    useLogInUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (isError) {
      toast.error(error.data.message);
      dispatch(logInUserAction(null));
    }
    if (isSuccess) {
      dispatch(logInUserAction(data.userData));
      toast.success("Logged In Successfully");
      navigate("/");
    }
  }, [isError, isSuccess]);

  return (
    <div className="w-full lg:w-[90%]">
      <div className="flex justify-center mb-4 items-center gap-1">
        <img
          src="/assets/movix-logo.png"
          alt="logo"
          className="w-[45px] h-[45px]"
        />
        <span className="text-3xl md:text-5xl font-extrabold linear-text-gradient">
          Movix
        </span>
      </div>
      <p className="text-gray-400 mb-6 text-center">
        Welcome Back,Please enter your account details to Log In
      </p>
      <Form isRegister={false} sendData={logInUser} isLoading={isLoading} />
      <p className="text-center mt-3 text-gray-300">
        Don&apos;t have an account?{" "}
        <Link
          to={"/sign-up"}
          className="font-semibold hover:text-pink hover:underline transition"
        >
          Create One!
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
