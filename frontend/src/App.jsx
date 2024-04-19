import { Routes, Route, Navigate } from "react-router-dom";
import {
  AuthLayout,
  Home,
  Movies,
  PageError,
  Profile,
  RootLayout,
  SignIn,
  SignUp,
  TvShows,
} from "./pages";
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
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv-shows" element={<TvShows />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Route>
        <Route path="*" element={<PageError />} />
      </Routes>
      <Toaster />
    </section>
  );
}

export default App;
