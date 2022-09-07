import * as S from './SubTab.styles';

const TabMedia = ({ movieData, videoData, url, handleOnErrorImage }) => {
  const { results } = videoData;
  const { backdrop_path, poster_path } = movieData;

  const TRAILER = results.filter(video => video.type === 'Trailer');

  return (
    <>
      {TRAILER[0] && (
        <S.Section>
          <S.SectionTitle>영상</S.SectionTitle>
          <S.SectionContent>
            <S.Video>
              <iframe
                title="video"
                id="player"
                type="text/html"
                width="1100"
                height="580"
                src={`http://www.youtube.com/embed/${TRAILER[0].key}?autoplay=1&mute=1`}
                allow="autoplay"
                frameBorder="0"
              ></iframe>
            </S.Video>
          </S.SectionContent>
        </S.Section>
      )}
      <S.Section>
        <S.SectionTitle>포토</S.SectionTitle>
        <S.SectionContent>
          <S.ImageWrap>
            <S.MediaImage>
              <img src={url + poster_path} alt="movie" onError={handleOnErrorImage} />
            </S.MediaImage>
            <S.MediaImage>
              <img src={url + backdrop_path} alt="movie" onError={handleOnErrorImage} />
            </S.MediaImage>
          </S.ImageWrap>
        </S.SectionContent>
      </S.Section>
    </>
  );
};

export default TabMedia;
