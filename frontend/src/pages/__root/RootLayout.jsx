import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../components";

const RootLayout = () => {
  return (
    <section className="bg-darkBlue min-h-screen text-white">
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </section>
  );
};

export default RootLayout;
