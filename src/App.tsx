import { Routes, Route } from "react-router-dom";

import Footer from "./views/Footer";
import TopBar from "./views/TopBar";

import Home from "./routes/Home";
import Movie from "./routes/Movie";
import E404 from "./routes/E404";
import Booking from "./routes/Booking";
import MovieDay from "./routes/MovieDay";
import Contact from "./routes/Contact";
import AboutUs from "./routes/AboutUs";
import SignIn from "./routes/authentication/Sign-in";
import SignUp from "./routes/authentication/Sign-up";
import { useEffect, useState } from "react";

function App() {
  const [auth, setAuth] = useState<String>();

  useEffect(() => {
    const token = localStorage.getItem("token") ? localStorage.getItem("token") : "";
    if (token) {
      setAuth(token);
    }

  }, []);

  return (
    <>
      {auth ? (
        <>
          <TopBar />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/movie/:id" element={<Movie />} />

            <Route path="/movie/booking/time/:movieId" element={<MovieDay />} />

            <Route path="/booking" element={<Booking />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/aboutus" element={<AboutUs />} />

            <Route path="/movie/booking/:movieId" element={<Booking />} />

            <Route path="*" element={<E404 />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
        </Routes>
      )}
    </>
  );
}

export default App;
