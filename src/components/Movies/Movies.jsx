import { Suspense, useState, useEffect } from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import { movieSearchAPI } from 'services/filmAPI';
const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchFilm, setSearchFilm] = useState([]);
  function changeInput(e) {
    setQuery(e.currentTarget.value);
  }
  const submitForm = e => {
    e.preventDefault();
    movieSearchAPI(query).then(data => {
      setSearchFilm(data.results);
    });
    return;
  };
  return (
    <>
      <form onSubmit={submitForm}>
        <input type="text" onChange={changeInput}></input>
        <button type="submit">Search </button>
      </form>
      {searchFilm && (
        <ul>
          {searchFilm.map(({ id, original_title }) => (
            <li key={id}>
              <Link to={`${id}`}>{original_title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default Movies;
