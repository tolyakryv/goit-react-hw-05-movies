import { useEffect, useState } from 'react';
import { movieCreditsAPI } from 'services/filmAPI';
const Cast = ({ id }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    movieCreditsAPI(id).then(({ cast }) => {
      console.log(cast);
      setCast(cast);
    });
  }, [id]);
  return (
    <>
      <ul>
        {cast.map(({ cast_id, character, name, profile_path }) => {
          return (
            <li key={cast_id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
              />
              <p>{name}</p>
              <p>{character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Cast;
