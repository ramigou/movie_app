import React from "react";
import PropTypes from "prop-types";

// state가 필요 없으니까 그냥 함수로 작성
function Movie({ id, title, year, summary, poster }) {
  return <h5>{title}</h5>;
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default Movie;
