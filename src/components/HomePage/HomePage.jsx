import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { movieDayAPI } from 'services/filmAPI';
const HomePage = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    movieDayAPI().then(resolve => setFilms(resolve.results));
  }, []);
  console.log(films);
  return (
    <ul>
      {films.map(({ id, title }) => {
        return (
          <li key={id}>
            <NavLink to={`movies/${id}`}>{title}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};
export default HomePage;
