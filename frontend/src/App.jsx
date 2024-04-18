import { Routes, Route, Navigate } from "react-router-dom";
import { AuthLayout, Home, RootLayout, SignIn, SignUp } from "./pages";
import { useSelector } from "react-redux";
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
        </Route>
      </Routes>
    </section>
  );
}

export default App;
