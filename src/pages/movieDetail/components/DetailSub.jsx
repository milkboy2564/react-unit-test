import styled from 'styled-components';
import theme from '../../../styles/theme';
import { useState } from 'react';
import YouTube from 'react-youtube';

const url = process.env.REACT_APP_IMAGE_URL;
const handleOnErrorImage = event => {
  event.target.src = '/logo512.png';
};

const TabInfo = ({ data }) => {
  const { overview, production_companies } = data;
  return (
    <>
      <Description>{overview}</Description>
      <Section>
        <SectionTitle>제작</SectionTitle>
        <SectionContent>
          <Production>
            {production_companies.map(company => (
              <ProductionCard key={company.id}>
                <ProductionName>{company.name}</ProductionName>
                {company.logo_path && (
                  <ProductionLogo>
                    <img
                      src={url + 'w200' + company.logo_path}
                      alt="company"
                      onError={handleOnErrorImage}
                    />
                  </ProductionLogo>
                )}
              </ProductionCard>
            ))}
          </Production>
        </SectionContent>
      </Section>
    </>
  );
};

const TabProduction = ({ creditData }) => {
  const { cast } = creditData;
  const MAIN_CAST = cast.slice(0, 9);

  return (
    <>
      <Section>
        <SectionTitle>출연</SectionTitle>
        <SectionContent>
          <Cast>
            {MAIN_CAST.map(figure => (
              <CastCard key={figure.cast_id}>
                <CastImage>
                  <img
                    src={url + 'w200' + figure.profile_path}
                    alt="figure"
                    onError={handleOnErrorImage}
                  />
                </CastImage>
                <CastInfo>
                  <Name>{figure.name}</Name>
                  <Character>{figure.character} 역</Character>
                </CastInfo>
              </CastCard>
            ))}
          </Cast>
        </SectionContent>
      </Section>
    </>
  );
};

const TabMedia = ({ data, videoData }) => {
  const { results } = videoData;
  const { backdrop_path } = data;

  const TRAILER = results.filter(video => video.type === 'Trailer');

  return (
    <>
      {TRAILER[0] && (
        <Section>
          <SectionTitle>영상</SectionTitle>
          <SectionContent>
            <Video>
              <YouTube
                videoId={TRAILER[0].key}
                opts={{
                  height: '580',
                  width: '1100',
                  playerVars: {
                    autoplay: 0,
                    controls: 0,
                  },
                }}
              />
            </Video>
          </SectionContent>
        </Section>
      )}
      <Section>
        <SectionTitle>포토</SectionTitle>
        <SectionContent>
          <Image>
            <img src={url + 'w500' + backdrop_path} alt="movie" onError={handleOnErrorImage} />
          </Image>
        </SectionContent>
      </Section>
    </>
  );
};

function DetailSub({ data, videoData, creditData }) {
  const [isOnTab, setIsOnTab] = useState(2);

  const tab = [
    { name: '주요정보', content: <TabInfo data={data} /> },
    { name: '출연', content: <TabProduction creditData={creditData.data} /> },
    { name: '영상/포토', content: <TabMedia data={data} videoData={videoData.data} /> },
    { name: '평점', content: <></> },
  ];

  return (
    <Wrap className="detail_sub">
      <TabMenu>
        <ul>
          {tab.map((item, index) => (
            <li
              key={item.name}
              onClick={() => {
                setIsOnTab(index);
              }}
            >
              <span className={isOnTab === index ? 'isOnTab' : ''}>{item.name}</span>
            </li>
          ))}
        </ul>
      </TabMenu>
      <TabContent>{tab[isOnTab].content}</TabContent>
    </Wrap>
  );
}

export default DetailSub;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 200px;
`;

const TabMenu = styled.div`
  position: relative;
  height: 50px;
  ul {
    position: absolute;
    left: 0;
    right: 0;
    display: flex;
    height: 100%;
    ::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: -1px;
      border-bottom: 1px solid ${theme.GRAY_2};
    }
  }
  li {
    margin: 0 25px;
  }
  li:first-of-type {
    margin-left: 0px;
  }
  span {
    display: inline-block;
    position: relative;
    height: 50px;
    padding: 15px 0px;
    font-size: 17px;
    vertical-align: middle;
    cursor: pointer;
  }
  span.isOnTab::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    z-index: 1;
    border-bottom: 2px solid ${theme.BLACK};
    border-radius: 2px;
  }
`;

const TabContent = styled.div``;

const Description = styled.div`
  padding-top: 30px;
  line-height: 26px;
  font-size: 16px;
  width: 800px;
  word-break: keep-all;
`;

const Section = styled.section``;
const SectionTitle = styled.h5`
  padding: 50px 0 17px;
  border-bottom: 1px solid ${theme.GRAY_4};
  margin-bottom: 30px;
  font-size: 24px;
  line-height: 28px;
  font-weight: 600;
`;

const SectionContent = styled.div``;

const Production = styled.div`
  display: grid;
`;

const ProductionCard = styled.div`
  margin-bottom: 30px;
`;

const ProductionName = styled.div`
  margin-bottom: 8px;
  color: ${theme.BLUE};
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const ProductionLogo = styled.div`
  height: 40px;
  img {
    height: 100%;
    object-fit: cover;
  }
`;

const Video = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.div``;

const Cast = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px 25px;
`;

const CastCard = styled.div`
  display: flex;
`;

const CastImage = styled.div`
  width: 116px;
  aspect-ratio: 1 / 1.3;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 30px;
  border: 1px solid ${theme.GRAY_3};
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const CastInfo = styled.div`
  padding-top: 6px;
`;

const Name = styled.strong`
  color: ${theme.BLUE};
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }

  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
`;

const Character = styled.span`
  display: block;
  display: block;
  margin-top: 9px;
  font-size: 15px;
  line-height: 21px;
  color: ${theme.GRAY_1};
`;
