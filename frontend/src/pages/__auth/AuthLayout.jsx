import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <section className="h-screen overflow-hidden flex gap-4 justify-between bg-slate-900">
      <div className="text-white w-full lg:w-1/2 h-full flex items-center justify-center p-6">
        <Outlet />
      </div>
      <img
        src="/assets/hero.jpg"
        alt="hero-img"
        className="hidden lg:block w-1/2 h-full object-cover"
      />
    </section>
  );
};

export default AuthLayout;
