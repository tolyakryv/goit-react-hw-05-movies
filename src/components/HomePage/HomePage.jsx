import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { movieDayAPI } from 'services/filmAPI';

const HomePage = () => {
  // const location = useLocation();
  const [films, setFilms] = useState([]);
  useEffect(() => {
    movieDayAPI().then(resolve => setFilms(resolve.results));
  }, []);

  return (
    <>
      <h3>Trending today</h3>
      <ul>
        {films.map(({ id, title }) => {
          return (
            <li key={id}>
              <NavLink to={`movies/${id}`}>{title}</NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default HomePage;
