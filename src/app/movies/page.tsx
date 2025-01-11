// src/app/movies/page.tsx
'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
// Define a TypeScript interface for a movie

interface Movie {
  id: number;
  title: string;
  year: string;
  rated: string;
  released: string;
  runtime: string;
  genre: string;
  director: string;
  writer: string;
  actors: string;
  plot: string;
  language: string;
  country: string;
  awards: string;
  poster: string;
  metascore: string;
  imdb_rating: string;
  imdb_votes: string;
  imdb_id: string;
  type: string;
  dvd?: string;
  box_office?: string;
  production?: string;
  website?: string;
  response: string;
}

const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:8000/movies');
        setMovies(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch movies', error);
        setLoading(false);
      }
    };
    
    fetchMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.plot}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
