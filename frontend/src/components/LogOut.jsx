/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from "react-redux";
import { useLogOutUserMutation } from "../features/auth/api/authApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { logOutUserAction } from "../features/auth/authSlice";
import { IoMdLogOut } from "react-icons/io";
const LogOut = () => {
  const [logOutUser, { data, isError, isSuccess, error, isLoading }] =
    useLogOutUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOutUser();
  };
  useEffect(() => {
    if (isError) {
      toast.error(error.data.message);
    }
    if (isSuccess) {
      dispatch(logOutUserAction());
      toast.success(data);
      navigate("/sign-in");
    }
  }, [isError, isSuccess]);
  return (
    <button
      type="button"
      onClick={handleLogOut}
      disabled={isLoading}
      className={`linear-bg-gradient block w-fit font-extrabold px-3 py-2 text-lg rounded-md ${
        isLoading && "cursor-not-allowed opacity-45"
      }`}
    >
      <IoMdLogOut size={22} />
    </button>
  );
};

export default LogOut;
