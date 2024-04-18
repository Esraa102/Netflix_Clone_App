import { Routes, Route } from "react-router-dom";
import { AuthLayout, Home, RootLayout, SignIn, SignUp } from "./pages";
function App() {
  return (
    <section>
      <Routes>
        {/* Public Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Route>
        {/* Private Routes */}
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </section>
  );
}

export default App;
