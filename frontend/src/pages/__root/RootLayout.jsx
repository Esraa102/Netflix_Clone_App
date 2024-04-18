import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../components";

const RootLayout = () => {
  return (
    <section>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </section>
  );
};

export default RootLayout;
