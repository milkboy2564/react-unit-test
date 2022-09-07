import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieDetail from './pages/movieDetail/MovieDetail';
import Header from './components/Header';
import Search from './pages/search/Search';
import GlobalStyle from './styles/Globalstyles';
import MoviePage from './pages/movieList/MoviePage';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<div>메인dsgsdgds 페이지</div>}></Route>
        <Route path="/movie/popular" element={<MoviePage />}></Route>
        <Route path="/movie/upcoming" element={<MoviePage />}></Route>
        <Route path="/movie/top_rated" element={<MoviePage />}></Route>
        <Route path="/movie/:movie_id" element={<MovieDetail />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/movie/now_playing" element={<MoviePage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
