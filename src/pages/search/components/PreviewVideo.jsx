import React from 'react';
import styled from 'styled-components';

function PreviewVideo({ handlePreviewClose, videoData }) {
  const {
    data: { results },
  } = videoData;
  return (
    <PreviewContainer onClick={handlePreviewClose}>
      <Video
        src={`http://www.youtube.com/embed/${results[0].key}?autoplay=1&mute=1`}
        frameBorder="0"
      ></Video>
    </PreviewContainer>
  );
}

const PreviewContainer = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Video = styled.iframe`
  width: 1100px;
  height: 580px;
`;

export default PreviewVideo;
