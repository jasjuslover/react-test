import { Link } from "react-router-dom";
import { useMovies } from "../hooks/useMovies";
import { useSearch } from "../hooks/useSearch";

const Movies = () => {
  const { movies } = useMovies();
  const {
    searchTerm,
    setSearchTerm,
    filteredItems: filteredMovies,
  } = useSearch(movies);

  return (
    <section>
      <Link to="/counter">Counter</Link>
      <div>
        <label htmlFor="search">Search</label>
        <input
          type="search"
          id="search"
          value={searchTerm}
          data-testid="search-input-field"
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
      <ul data-testid="movies-list">
        {filteredMovies.map((movie, index) => (
          <li key={index}>
            <article>
              <h2>{movie.title}</h2>
              <p>Release on: {movie.release_date}</p>
              <p>Directed by: {movie.director}</p>
              <p>{movie.opening_crawl}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Movies;
