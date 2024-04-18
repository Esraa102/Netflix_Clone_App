import { useForm } from "react-hook-form";

const Form = ({ isRegister }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      {isRegister && (
        <div className="field-container">
          <label htmlFor="username" className="label">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className={`input ${
              errors?.username && "border-2 border-red-700 focus:border-red-700"
            }`}
            placeholder="Enter your username"
            {...register("username", {
              required: true,
              maxLength: 40,
              minLength: 2,
            })}
          />
          {errors.username?.type === "required" && (
            <p className="error">Username is Required</p>
          )}
          {errors.username?.type === "maxLength" && (
            <p className="error">
              Username must not be greater than 40 character
            </p>
          )}
          {errors.username?.type === "minLength" && (
            <p className="error">Username must be at least 2 characters</p>
          )}
        </div>
      )}
      <div className="field-container">
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className={`input ${
            errors?.email && "border-2 border-red-700 focus:border-red-700"
          }`}
          placeholder="Enter your Email"
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          })}
        />
        {errors.email?.type === "required" && (
          <p className="error">Email Input is required</p>
        )}
        {errors.email?.type === "pattern" && (
          <p className="error">Invalid Eamil Input</p>
        )}
      </div>
      <div className="field-container">
        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className={`input ${
            errors?.password && "border-2 border-red-700 focus:border-red-700"
          }`}
          placeholder="Enter your Password"
          {...register("password", {
            required: true,
            minLength: 8,
            maxLength: 20,
          })}
        />
        {errors.password?.type === "required" && (
          <p className="error">Password is required</p>
        )}
        {errors.password?.type === "minLength" && (
          <p className="error">Password must be at least 8 characters</p>
        )}
        {errors.password?.type === "maxLength" && (
          <p className="error">
            Password must not be greater than 20 characters
          </p>
        )}
      </div>
      <button
        type="submit"
        className="linear-bg-gradient mt-4 transition hover:scale-105 py-2 rounded-md text-lg font-semibold"
      >
        {isRegister ? "Create Account" : "Sign In"}
      </button>
    </form>
  );
};

export default Form;
