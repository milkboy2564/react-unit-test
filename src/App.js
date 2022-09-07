import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieDetail from './pages/movieDetail/MovieDetail';
import Header from './components/Header';
import Search from './pages/search/Search';
import NowPlaying from './pages/nowPlaying/NowPlaying';
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
        <Route path="/movie/:movie_id" element={<MovieDetail />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/movie/now_playing" element={<NowPlaying />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
