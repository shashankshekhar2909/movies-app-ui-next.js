// src/app/movies/page.tsx
"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
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
        const response = await axios.get("http://localhost:8000/movies");
        setMovies(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch movies", error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      <h1 className="text-4xl font-extrabold dark:text-white">Movies</h1>
      <div className="w-full my-4">
        <input
          type="text"
          id="small-input"
          placeholder="Search Movie"
          className="block w-50 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Movie
              </th>
              <th scope="col" className="px-6 py-3">
                Rating
              </th>
              <th scope="col" className="px-6 py-3">
                Release Date
              </th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr
                key={movie.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div>
                    {movie.poster ? (
                      <Image
                        src={movie.poster}
                        alt={`${movie.title} poster`}
                        width={500}
                        height={500}
                        className="w-12 h-16 object-cover rounded"
                        onError={(e) => {
                          // Fallback image if poster URL is invalid
                          (e.target as HTMLImageElement).src = "/noImage.png"; // Fallback image from public folder
                        }}
                      />
                    ) : (
                      <Image
                        src="/noImage.png" // Default fallback image if no poster is available
                        alt="No poster available"
                        width={500}
                        height={500}
                        className="w-12 h-16 object-cover rounded"
                      />
                    )}
                  </div>
                  {movie.title}
                </th>
                <td className="px-6 py-4">{movie.rated}</td>
                <td className="px-6 py-4">
                  {new Date(movie.released).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Movies;
