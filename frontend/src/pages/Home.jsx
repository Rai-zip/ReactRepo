import MovieCard from "../components/MovieCard"

function Home(){
    const movies = [
            {id: 1, title: "Anugrah", release_date: "2020"}, 
            {id: 2, title: "Hello", release_date: "2020"}, 
            {id: 3, title: "Matrix", release_date: "2020"}, 
            {id: 4, title: "Star Wars", release_date: "2020"}, 
    ]

    return (
        <div className="home">
            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>`
        </div>
    );
}

export default Home