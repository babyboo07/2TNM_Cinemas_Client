import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import conf from "../Config";
import CardSection from "../components/CardSection";
import Loading from "../views/Loading";
import { getListMovie } from "../API/movies/moviesUtil";
import { IMovie } from "../Util/FormInit";
import { URL_IMAGE } from "../AppContains";

function Home() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [featured, setFeatured] = useState<IMovie>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const movieData: IMovie[] = await getListMovie();

    if (movieData) {
      setFeatured(movieData[0]);
      setMovies(movieData);
    }
  };

  // if (!featured) {
  //   return <Loading />;
  // }

  return (
    <>
      <Helmet>
        <title>Home - {conf.SITE_NAME}</title>
      </Helmet>
      <div className="container">
        {featured && (
          <Link
            to={`/movie/${featured.id}`}
            className="movie-hero"
            style={{
              background: `url(${URL_IMAGE + featured.thumail}) no-repeat center / cover`,
            }}
          >
            <div className="movie-hero-drop"></div>

            <div className="movie-hero-content">
              <p className="movie-hero-title">{featured.titile}</p>

              <div className="movie-hero-meta">
                <div className="movie-hero-stars">
                  <i className="fa-solid fa-star"></i>
                  {/* <p>{featured.stars}/10</p> */}
                </div>

                <p className="movie-hero-year">{featured.releaseDate}</p>

                <p className="movie-hero-length">
                  {Math.floor(Number(featured.runningTime) / 60)}h {Number(featured.runningTime) % 60}m
                </p>
              </div>

              <p className="movie-hero-desc">{featured.description}</p>

              <button className="movie-hero-play">
                <i className="fa-solid fa-ticket"></i>
                <p>Buy Ticket</p>
              </button>
            </div>
          </Link>
        )}

        {!movies ? (
          <div className="movie-section">
            <p className="movie-section-title">Top Rated Movies 👑</p>

            <div className="movie-section-loading">
              <i className="fa-solid fa-spinner-third"></i>
            </div>
          </div>
        ) : (
          <CardSection title="Top Rated Movies 👑" items={movies} />
        )}
      </div>
    </>
  );
}

export default Home;
