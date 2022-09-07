import React from 'react';
import styled from 'styled-components';
const ErrorPosterImage = () => {
  return <ReplaceImage src={process.env.PUBLIC_URL + '/errImage.png'} alt="포스터가 없습니다." />;
};
const ReplaceImage = styled.img`
  width: 100%;
`;
export default ErrorPosterImage;
