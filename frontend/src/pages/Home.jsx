import MovieCard from "../components/MovieCard"
import { useState } from "react";
import "../css/Home.css"

function Home(){
    const [searchQuery, setSearchQuery] = useState(""); 

    const movies = [
            {id: 1, title: "Anugrah", release_date: "2020"}, 
            {id: 2, title: "Hello", release_date: "2020"}, 
            {id: 3, title: "Matrix", release_date: "2020"}, 
            {id: 4, title: "Star Wars", release_date: "2020"}, 
    ]

    const handleSearch = (a) => {
        a.preventDefault()
        alert(searchQuery);
        setSearchQuery("Sent!")
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                type="text" 
                placeholder="Serach for movies..." 
                className="search-input"
                value={searchQuery} 
                onChange={(a) => setSearchQuery(a.target.value)}
                />
                <button type="submit" className="search-btn" onClick={handleSearch}> Search </button>
            </form>

            <div className="movies-grid">
                {movies.map(
                    (movie) => 
                        movie.title.toLowerCase().startsWith(searchQuery) &&
                        (<MovieCard movie={movie} key={movie.id}/>
                    )
                )}
            </div>`
        </div>
    );
}

export default Home