# Assginment #3

## 🎯 프로젝트 목표

#### 영화 트레일러 사이트 만들기

## ⏰ 프로젝트 기간

#### 2022-09-06 ~ 2022-09-08

## :link: 프로젝트 링크

https://fourflix.netlify.app/

## :nut_and_bolt: 구현 기능

#### 공통

- [x] Loading 상태 표기
- [x]  Infinite scroll
- [x] 스크롤 감지하여 ScrollUp button 표시되도록, 누를 시 최상단으로 스크롤 이동
- [x] API Response 데이터 캐쉬 (라이브러리 사용)



#### movies / 리스트 페이지

- [x] 한번에 가져올 데이터 최대 20
- [x] 제목, 포스터, 별점 표시
- [x] 포스터 없는 경우, 대체 이미지 사용



#### movie / 상세 페이지

- [x] 비디오 있는 경우, 페이지 진입 시 자동으로 비디오 플레이
- [x] 제목, 포스터, 별점, 제작 연도, 장르 데이터 활용해서 UI 표기
- [x] 그 외의 데이터 추가 활용 여부는 자유



#### search

- [x] 제목, 포스터, 별점
- [x] 포스터 없는 경우, 대체 이미지 사용
- [x] 동영상 미리 보기 



## :hammer: 사용 스택

![ReactJS](https://img.shields.io/badge/ReactJS-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Styled-Components](https://img.shields.io/badge/StyledComponents-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)![React Query](https://img.shields.io/badge/React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=fff)



## 프로젝트 구조

```bash
src
│  App.js
│  index.js
│
├─assets
│  └─images
│          errImage.png
│          NotFound.svg
│
├─components
│      ErrorPosterImage.jsx
│      Header.jsx
│      ImageCard.jsx
│      Layout.jsx
│      Loading.jsx
│      NotFound.jsx
│      NotFoundImage.jsx
│      StarRate.jsx
│
├─pages
│  ├─movieDetail
│  │  │  MovieDetail.jsx
│  │  │
│  │  └─components
│  │      │  DetailMain.jsx
│  │      │  DetailSub.jsx
│  │      │
│  │      └─subTab
│  │              InfoList.jsx
│  │              SubTab.styles.js
│  │              TabCast.jsx
│  │              TabInfo.jsx
│  │              TabMedia.jsx
│  │
│  ├─movieList
│  │  │  MoviePage.jsx
│  │  │
│  │  ├─components
│  │  │      Movie.jsx
│  │  │
│  │  └─hook
│  │          useInterSect.js
│  │          useScrollFetchData.js
│  │
│  └─search
│      │  Search.jsx
│      │
│      └─components
│              PreviewVideo.jsx
│              SearchMovieCard.jsx
│
├─services
│      api.js
│
└─styles
       Globalstyles.js
       theme.js
```



## :handshake: 프로젝트 팀원

| 이름          |                             역할                             |
| ------------- | :----------------------------------------------------------: |
| 설재혁 / 팀장 | 프로젝트 초기 세팅, 공통 컴포넌트 제작, API 인스턴스 생성, 검색 기능 구현, 레이아웃 정의 |
| 김명원        | infinite scroll 구현,  영화 관련 페이지 컴포넌트 통합 , 배포 |
| 박보선        |         검색된 데이터 리스트를 보여주는 페이지 구현          |
| 김지혜        |          영화 상세페이지 탭을 포함한 하단 부분 구현          |
| 이시형        |        영화 관련 페이지 컴포넌트 통합, 별점 수정 도움        |
| 홍주완        |    카드 컨테이너의 별점 담당 및 카드 리스트 만드는데 일조    |
| 이후경        |                 디테일 페이지 상단 부분 구현                 |



## 📖 WiKi

- [Git-Flow](https://github.com/wanted-pre-onboarding-4/Fruitte/wiki/Convention-&-Git-Flow#git-flow)
- [Commit-Convention](https://github.com/wanted-pre-onboarding-4/Fruitte/wiki/Convention-&-Git-Flow#commit-convention)
- [프로젝트에서의 캐싱](https://github.com/wanted-pre-onboarding-4/Movie/wiki/%EC%BA%90%EC%8B%B1%EC%9D%B4%EB%9E%80)
- [지난 과제 피드백](https://github.com/wanted-pre-onboarding-4/Fourflix/wiki/%EC%A7%80%EB%82%9C-%EA%B3%BC%EC%A0%9C-%ED%94%BC%EB%93%9C%EB%B0%B1)


## 🖥 Getting Started

1. `Clone` the repository

   ```markdown
   $ git clone https://github.com/wanted-pre-onboarding-4/Movie.git
   ```

2. `Install` dependencies

   ```markdown
   $ npm install
   ```

3. `Set` environment variables

      1. 내려받은 프로젝트의 최상위 폴더 안에 `.env` 파일을 생성합니다.

      2. `.envTemplate` 파일에 존재하는 환경 변수 이름과 같은 이름의 환경 변수를 `.env` 파일 안에 생성합니다.

      3. `.env` 파일 내에 알맞은 환경 변수 값을 설정해 줍니다.

4. `start` the project

   ```markdown
   $ npm start
   ```



# 🎞 프로젝트 회고

## 재혁

팀원들과 즐거운 분위기로 협업할 수 있어서 좋았고 무엇보다 익숙하지 않은 기술을 프로젝트에 적용해 볼 수 있어서 좋았습니다.

앞으로는 더욱 더 넓은 시야로 프로젝트를 바라보고 이를 통해 효율적인 협업으로 이어질 수 있었으면 좋을 것 같습니다.

## 명원

infiite Scroll 구현을 하면서   Intersection Observer Api 를  알아볼수 있어서 좋았고   react-query를 처음 사용해 보아 좋은 경헙이 되었습니다.  팀원들과  재사용 가능한 컴포넌트를   만드는 과정이 재밌었습니다.

## 보선

팀 과제를 통해 새로운 경험들을 해보면서 성장할 수 있는 기회가 되는것 같습니다.

## 지혜

유튜브 영상을 라이브러리로만 구현할 수 있는 줄 알았는데 아니였습니다. 라이브러리에 너무 의존하지 말고 검색부터 잘 해야겠다 생각했습니다.

## 시형

각자 구현한 컴포넌트들을 합치면서 리팩토링하는 과정들이 재밌었습니다.

## 주완

카드 컴포넌트를 각자 구현하여 여러명이서 같이 의논하고 서로의 카드 컴포넌트에서 필요한 부분만 가져와서 사용한 것이 좋았습니다. 앞으로도 이런 방식으로 하면 좋을 것 같다고 생각하였습니다.

## 후경

단기간에 진행해야했기 때문에 체력적으로 힘든 부분도 있었지만 많은 부분을 배울 수 있었던 시간이었습니다. 부족한 부분을 재정비해서 다음 프로젝트는 더 재미있게 진행하고 싶습니다.

