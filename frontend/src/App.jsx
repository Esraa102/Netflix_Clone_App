import { Routes, Route, Navigate } from "react-router-dom";
import { AuthLayout, Home, RootLayout, SignIn, SignUp } from "./pages";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
function App() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <section>
      <Routes>
        {/* Public Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Route>
        {/* Private Routes */}
        <Route
          element={currentUser ? <RootLayout /> : <Navigate to={"/sign-in"} />}
        >
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Home />} />
        </Route>
      </Routes>
      <Toaster />
    </section>
  );
}

export default App;
