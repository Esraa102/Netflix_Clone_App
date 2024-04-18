import { Link } from "react-router-dom";
import { Form } from "../../components";

const SignUp = () => {
  return (
    <div className="w-full md:w-[90%]">
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
        Welcome To Our Webiste,Please enter your account details to create an
        account
      </p>
      <Form isRegister />
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
