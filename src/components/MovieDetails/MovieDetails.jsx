import { lazy, useState, useEffect } from 'react';
import { NavLink, useParams, Route, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { movieDetailsAPI } from 'services/filmAPI';
import s from './MovieDetails.module.css';
const Reviews = lazy(() => import('../Reviews'));
const Cast = lazy(() => import('../Cast'));
const MovieDetails = () => {
  const [movies, setMovies] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    movieDetailsAPI(movieId).then(result => {
      setMovies(result);
    });
  }, [movieId]);
  const history = createBrowserHistory();

  if (movies) {
    const {
      poster_path,
      genres,
      original_title,
      overview,
      release_date,
      vote_average,
    } = movies;
    return (
      <>
        <div className={s.container}>
          <button className={s.btn} onClick={() => history.back()}>
            go back
          </button>
          <div className={s.movie_details}>
            <img
              className={s.img}
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={original_title}
            />

            <div>
              <h2>
                {original_title} ({release_date})
              </h2>
              <p>User Score: {vote_average}</p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <ul>
                {genres.map(({ name }) => (
                  <li key={name}>{name} </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <p>Additional information</p>
            <ul>
              <li>
                <NavLink to="cast">Cast</NavLink>
              </li>
              <li>
                <NavLink to="reviews">Reviews</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <Routes>
          <Route path="reviews" element={<Reviews id={movieId} />} />
          <Route path="cast" element={<Cast id={movieId} />} />
        </Routes>
      </>
    );
  }
};
export default MovieDetails;
