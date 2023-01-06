import React from 'react'
import Nav from "../../components/Nav/Nav"
import "./Detail.css"
function Details() {
  return (
    <div className="Details">
      <Nav />
      <div
        className="detailsCover"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/etj8E2o0Bud0HkONVQPjyCkIvpv.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></div>
      <div className="detailsContents">
        <h1 className="detailsTitle">House of the Dragons</h1>
        <button className="detailsbtn">Watchlist</button>
        <button className="detailsbtn">PlayNow</button>
      </div>
      <div className="leftDetails">
        <div
          className="detailsExtended"
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/z2yahl2uefxDCl0nogcRBstwruJ.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        ></div>
        <h1 className="overview">
          The Targaryen dynasty is at the absolute apex of its power, with more
          than 15 dragons under their yoke. Most empires crumble from such
        ...
        </h1>
      </div>
    </div>
  );
}

export default Details