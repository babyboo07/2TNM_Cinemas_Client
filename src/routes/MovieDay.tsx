import { useParams } from "react-router-dom";
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
    <div className="grid grid-cols-3 mt-4">
      <div className="col-span-2">
        <img className="object-contain" src={URL_IMAGE + movie?.thumail} />
      </div>
      <div className="ml-5">
        <p>H</p>
        {movieDay &&
          movieDay.map((item, index) => (
            <div key={index} className="video-meta">
              <p className="video-meta-title">{item.showDate}</p>
              <div className="video-meta-genres">
                {item.lstShowTime.map((showTime: any, index) => (
                  <div key={index} className="video-meta-genre">
                    <p>{showTime}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
