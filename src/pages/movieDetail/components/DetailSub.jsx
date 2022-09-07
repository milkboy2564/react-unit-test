import styled from 'styled-components';
import { useState } from 'react';
import TabInfo from './subTab/TabInfo';
import TabCast from './subTab/TabCast';
import TabMedia from './subTab/TabMedia';

const url = process.env.REACT_APP_IMAGE_URL;
const handleOnErrorImage = event => {
  event.target.src = '/logo512.png';
};

function DetailSub({ movieData, videoData, creditData }) {
  const [isOnTab, setIsOnTab] = useState(2);

  const tab = [
    {
      name: '주요정보',
      content: <TabInfo movieData={movieData} url={url} handleOnErrorImage={handleOnErrorImage} />,
    },
    {
      name: '출연',
      content: (
        <TabCast creditData={creditData.data} url={url} handleOnErrorImage={handleOnErrorImage} />
      ),
    },
    {
      name: '영상/포토',
      content: (
        <TabMedia
          movieData={movieData}
          videoData={videoData.data}
          url={url}
          handleOnErrorImage={handleOnErrorImage}
        />
      ),
    },
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
      border-bottom: 1px solid ${({ theme }) => theme.GRAY_2};
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
    border-bottom: 2px solid ${({ theme }) => theme.BLACK};
    border-radius: 2px;
  }
`;

const TabContent = styled.div``;
