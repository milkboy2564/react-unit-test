import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import UpComing from './pages/upComing/UpComing';
import TopRated from './pages/topRated/TopRated';
import MovieDetail from './pages/movieDetail/MovieDetail';
import Search from './pages/search/Search';
import NowPlaying from './pages/nowPlaying/NowPlaying';
import GlobalStyle from './styles/Globalstyles';
import Layout from './components/Layout';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to={'/movie/popular'} />}></Route>
          <Route path="/movie/popular" element={<div>인기영화</div>}></Route>
          <Route path="/movie/upcoming" element={<UpComing />}></Route>
          <Route path="/movie/top_rated" element={<TopRated />}></Route>
          <Route path="/movie/:movie_id" element={<MovieDetail />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/movie/now_playing" element={<NowPlaying />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
