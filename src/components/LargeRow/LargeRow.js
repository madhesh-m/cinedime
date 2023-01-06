import axios from "../../helpers/axios";
import React, { useEffect, useRef, useState } from "react";
import "./Row.css";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const LargeRow = ({ title, fetchUrl }) => {
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
    <div className="largerow">
      <h2>{title}</h2>
      <div className="posterContainer">
        <FaArrowCircleLeft onClick={() => scroll(-400)} className="larrow" />
        <div ref={ref} className="row__posters">
          {movies.map((movie) => (
            <div className="poster">
              <img
                key={movie.id}
                className="row__posterLarge"
                src={`${base_url}${movie.poster_path}`}
                alt=""
              />
            </div>
          ))}
        </div>
        <FaArrowCircleRight onClick={() => scroll(400)} className="rarrow" />
      </div>
    </div>
  );
};

export default LargeRow;
