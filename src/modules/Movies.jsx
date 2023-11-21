import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMovies } from "@/hooks/useMovies";
import { useSearch } from "@/hooks/useSearch";
import { Link } from "react-router-dom";

const Movies = () => {
  const { movies } = useMovies();
  const {
    searchTerm,
    setSearchTerm,
    filteredItems: filteredMovies,
  } = useSearch(movies);

  return (
    <section className="container py-3">
      <div className="flex flex-row justify-end">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="search">Search</Label>
          <Input
            type="search"
            id="search"
            value={searchTerm}
            placeholder="Search something"
            data-testid="search-input-field"
            className="border rounded-lg"
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>
      </div>
      <ul data-testid="movies-list" className="mt-3">
        {filteredMovies.map((movie, index) => (
          <Card className="mb-3" key={index}>
            <CardHeader>
              <CardTitle>{movie.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Release on: {movie.release_date}</p>
              <p>Directed by: {movie.director}</p>
              <p className="mt-3">{movie.opening_crawl}</p>
            </CardContent>
          </Card>
        ))}
      </ul>
    </section>
  );
};

export default Movies;
