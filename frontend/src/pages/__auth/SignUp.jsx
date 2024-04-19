/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useNavigate } from "react-router-dom";
import { Form } from "../../components";
import { useCreateNewUserMutation } from "../../features/auth/api/authApi";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { registerUser } from "../../features/auth/authSlice";
const SignUp = () => {
  const [createNewUser, { data, isError, isSuccess, isLoading, error }] =
    useCreateNewUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (isError) {
      toast.error(error.data.message);
      dispatch(registerUser(null));
    }
    if (isSuccess) {
      dispatch(registerUser(data.userData));
      console.log(data);
      toast.success("Account has been created successfully");
      navigate("/");
    }
  }, [isError, isSuccess]);
  return (
    <div className="w-full lg:w-[90%]">
      <div className="flex  justify-center mb-4 items-center gap-1">
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
        Welcome To{" "}
        <span className="font-extrabold linear-text-gradient">Movix</span>,
        Please enter your account details to create an account
      </p>
      <Form isRegister sendData={createNewUser} isLoading={isLoading} />
      <p className="text-center mt-3 text-gray-300">
        Already have an account?{" "}
        <Link
          to={"/sign-in"}
          className="font-semibold hover:text-pink hover:underline transition"
        >
          Log In
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
