import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UpComing from './pages/upComing/UpComing';
import TopRated from './pages/topRated/TopRated';
import MovieDetail from './pages/movieDetail/MovieDetail';
import Header from './components/Header';
import Search from './pages/search/Search';
import GlobalStyle from './styles/Globalstyles';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<div>메인dsgsdgds 페이지</div>}></Route>
        <Route path="/movie/popular" element={<div>인기영화</div>}></Route>
        <Route path="/movie/upcoming" element={<UpComing />}></Route>
        <Route path="/movie/top_rated" element={<TopRated />}></Route>
        <Route path="/movie/now_playing" element={<div>현재 상영 영화</div>}></Route>
        <Route path="/movie/:movie_id" element={<MovieDetail />}></Route>
        <Route path="/search" element={<Search />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
