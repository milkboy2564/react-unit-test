import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import DetailMain from './components/DetailMain';
import DetailSub from './components/DetailSub';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState([]);

  const movieDetailAPI = async () => {
    await axios
      .get(`${BASE_URL}movie/438148?api_key=${API_KEY}&language=ko-KO`)
      .then(function (response) {
        setMovieDetail(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    movieDetailAPI();
  }, []);

  return (
    <Wrap>
      {/* {movieDetail && <p>Hello!</p>} */}
      <DetailMain movieDetail={movieDetail} />
      <DetailSub />
    </Wrap>
  );
};

export default MovieDetail;

const Wrap = styled.div``;
