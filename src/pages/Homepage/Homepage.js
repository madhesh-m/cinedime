import React from "react";
import Banner from "../../components/Banner/Banner";
import Nav from "../../components/Nav/Nav";
import "./Homepage.css";
import requests from "../../helpers/requests";
import Row from "../../components/Row/Row";
import LargeRow from "../../components/LargeRow/LargeRow";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <LargeRow
        title="CineDime Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
    </div>
  );
};

export default HomeScreen;
