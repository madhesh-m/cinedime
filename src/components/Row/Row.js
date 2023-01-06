import axios from "../../helpers/axios";
import React, { useEffect, useRef, useState } from "react";
import "./Row.css";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);
  const ref = useRef(null);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="posterContainer">
        <FaArrowCircleLeft onClick={() => scroll(-400)} className="larrow" />
        <div ref={ref} className="row__posters">
          {movies.map(
            (movie) =>
              ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && (
                <div className="poster">
                  {/* <p className="posterContent">{movie.name}</p> */}
                  <img
                    key={movie.id}
                    className={`row__poster ${
                      isLargeRow && "row__posterLarge"
                    }`}
                    src={`${base_url}${
                      isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`}
                    alt=""
                  />
                </div>
              )
          )}
        </div>
        <FaArrowCircleRight onClick={() => scroll(400)} className="rarrow" />
      </div>
    </div>
  );
};

export default Row;
