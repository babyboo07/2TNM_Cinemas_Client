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
// import AboutUs from "./routes/AboutUs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
      </Routes>
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
  );
}

export default App;
