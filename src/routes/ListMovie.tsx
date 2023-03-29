import React, { useEffect, useState } from "react";
import { getListMovie } from "../API/movies/moviesUtil";
import CardSection from "../components/CardSection";
import { IMovie } from "../Util/FormInit";

export default function LstMovie(props: any) {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const movieData: IMovie[] = await getListMovie();

    if (movieData) {
      setMovies(movieData);
    }
  };
  return (
    <div className="ml-10 mr-10">
      {!movies ? (
        <div className="movie-section">
          <p className="movie-section-title">List Movie 👑</p>

          <div className="movie-section-loading">
            <i className="fa-solid fa-spinner-third"></i>
          </div>
        </div>
      ) : (
        <CardSection title="Now Showing 👑" items={movies} />
      )}
    </div>
  );
}
