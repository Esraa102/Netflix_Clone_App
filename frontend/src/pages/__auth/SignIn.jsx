import { Form } from "../../components";
import { Link } from "react-router-dom";
const SignIn = () => {
  return (
    <div className="w-full md:w-[90%]">
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
      <Form isRegister={false} />
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
