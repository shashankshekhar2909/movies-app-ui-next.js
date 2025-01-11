// src/app/movies/layout.tsx
const MoviesLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div>
        <h2>Movies Page Layout</h2>
        {children}
      </div>
    );
  };
  
export default MoviesLayout;
  