import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import GlobalStyle from './styles/Globalstyles';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<div>메인dsgsdgds 페이지</div>}></Route>
        <Route path="/movie/popular" element={<div>인기영화</div>}></Route>
        <Route path="/movie/top_rated" element={<div>별점 높은 순</div>}></Route>
        <Route path="/movie/upcoming" element={<div>개봉 예정 영화</div>}></Route>
        <Route path="/movie/now_playing" element={<div>현재 상영 영화</div>}></Route>
        <Route path="/movie/:movie_id" element={<div>영화 상세 페이지</div>}></Route>
        <Route path="/search" element={<div>검색</div>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
