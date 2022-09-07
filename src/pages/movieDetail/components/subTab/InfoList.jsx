import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';
const InfoList = () => {
  return (
    <InfoListItem>
      <MovieInfoTitle>개봉</MovieInfoTitle>
      <MovieInfoContents>ddd</MovieInfoContents>
    </InfoListItem>
  );
};
const InfoListItem = styled.dl`
  display: flex;
  align-items: center;
  line-height: 27px;
  font-size: 14px;
`;
const MovieInfoTitle = styled.dt`
  max-width: 100px;
  padding-right: 16px;
  font-weight: normal;
  color: ${props => theme.GRAY_1};
  white-space: nowrap;
`;
const MovieInfoContents = styled.dd`
  padding-right: 4px;
  word-break: break-all;
  word-wrap: break-word;
`;
export default InfoList;
