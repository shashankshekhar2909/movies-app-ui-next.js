// src/app/movies/layout.tsx
const MoviesLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="m-10">
        {children}
      </div>
    );
  };
  
export default MoviesLayout;
  