import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getListMovieById, getListMovieDayByMovieId } from "../API/movies/moviesUtil";
import { IMovie, IMovieDay } from "../Util/FormInit";
import { URL_IMAGE } from "../AppContains";
export default function MovieDay() {
  const { movieId } = useParams();

  const [movieDay, setMovieDay] = useState<IMovieDay[]>([]);
  const [movie, setMovie] = useState<IMovie>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data: IMovieDay[] = await getListMovieDayByMovieId(Number(movieId));
    const data2: IMovie = await getListMovieById(Number(movieId));
    if (data) {
      setMovieDay(data);
    }

    if (data2) {
      setMovie(data2);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 mt-4">
        <div className="col-span-2">
          <div className="container">
            <img className="w-1/2" src={URL_IMAGE + movie?.thumail} />
          </div>
        </div>
        <div className="ml-5">
          <p>H</p>
          {movieDay &&
            movieDay.map((item, index) => (
              <div key={index} className="video-meta">
                <p className="video-meta-title">{item.roomName}</p>
                {item.lstSubMovied.map((sub, i) => (
                  <div key={i}>
                    <p className="video-meta-title pl-10"></p>
                    <div className="video-meta-genres pl-12">
                    {sub.showDate}
                    {sub.lstShowTime.map((itemSub: any, index) => (
                      <Link key={index} to={"/movie/booking/" + itemSub.movieDayId} className="ml-2">
                        <div className="video-meta-genre-show-time">
                          <p>{itemSub.showTime}</p>
                        </div>
                      </Link>
                    ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
