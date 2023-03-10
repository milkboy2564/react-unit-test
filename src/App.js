import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import MovieDetail from './pages/movieDetail/MovieDetail';
import Search from './pages/search/Search';
import GlobalStyle from './styles/Globalstyles';
import Layout from './components/Layout';
import NotFound from './components/NotFound';
import MoviePage from './pages/movieList/MoviePage';

// Husky Test

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to={'/movie/popular'} />}></Route>
          <Route path="/movie/popular" element={<MoviePage />}></Route>
          <Route path="/movie/upcoming" element={<MoviePage />}></Route>
          <Route path="/movie/top_rated" element={<MoviePage />}></Route>
          <Route path="/movie/:movie_id" element={<MovieDetail />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/movie/now_playing" element={<MoviePage />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
