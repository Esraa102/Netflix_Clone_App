import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../components";

const RootLayout = () => {
  return (
    <section className="bg-darkBlue text-white">
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </section>
  );
};

export default RootLayout;
