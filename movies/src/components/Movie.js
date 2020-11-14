import React from "react";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
	if (vote >= 8) {
		return "green";
	} else if (vote >= 6) {
		return "orange";
	} else {
		return "red";
	}
};

const Movie = ({ title, poster_path, overview, vote_average }) => (
	<div className="movie">
		<img
			src={
				poster_path
					? IMGPATH + poster_path
					: "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
			}
			alt={title}
		/>
		<div className="movie-info">
			<h3>{title}</h3>
			<span className={`tag ${setVoteClass(vote_average)}`}>
				{vote_average}
			</span>
		</div>

		<div className="movie-over">
			<h2>Overview:</h2>
			<p>{overview}</p>
		</div>
	</div>
);

export default Movie;
