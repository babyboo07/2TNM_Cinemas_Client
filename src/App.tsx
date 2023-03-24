import { Routes, Route } from "react-router-dom";

import Footer from "./views/Footer";
import TopBar from "./views/TopBar";

import Home from "./routes/Home";
import Movie from "./routes/Movie";
import E404 from "./routes/E404";
import Booking from "./routes/Booking";
import MovieDay from "./routes/MovieDay";

function App() {
  return (
    <>
      <TopBar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/movie/:id" element={<Movie />} />

        <Route path="/movie/booking/time/:movieId" element={<MovieDay />} />
        
        <Route path="/booking" element={<Booking />} />

        <Route path="*" element={<E404 />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
