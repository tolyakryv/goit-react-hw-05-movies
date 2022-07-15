import { useState } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { movieSearchAPI } from 'services/filmAPI';
const Movies = () => {
  const [queryParams, setQueryParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [searchFilm, setSearchFilm] = useState([]);
  function changeInput(e) {
    setQuery(e.currentTarget.value);
  }
  const submitForm = e => {
    e.preventDefault();
    if (query === '') {
      alert('enter text');
      return;
    }
    movieSearchAPI(query).then(data => {
      setSearchFilm(data.results);
      setQueryParams(query);
    });
    return;
  };
  return (
    <>
      <form onSubmit={submitForm}>
        <input type="text" onChange={changeInput}></input>
        <button type="submit">Search </button>
      </form>
      {queryParams && (
        <ul>
          {searchFilm.map(({ id, original_title }) => (
            <li key={id}>
              <NavLink to={`${id}`}>{original_title}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default Movies;
