import React from "react";

function Card ({id, title, genres, poster, release, isUpcoming = false}){
    if(isUpcoming) {
        return (
            <div className="card-movies mx-5">
                <img className="" src={poster} alt="poster movie"/>
                <p className="movie-name">{title}</p>
                <span className="release-date">{release}</span>
                <div className="con-movie-genre">
                    { genres && genres.split(', ').map((genre, i) => {
                            return <p className="movie-genre" key={i}>{genre}</p>
                    })}
                </div>
                <div className="con-details-buy">
                    <a href={`/movie/${id}`}>Details</a>
                    <a className="btn-buy">Buy Ticket</a>
                </div>
            </div>
        )
    }

    return (
        <div className="card-movies mx-5">
            <img className="" src={poster} alt="poster movie"/>
            <p className="movie-name">{title}</p>
            <div className="con-movie-genre">
                { genres &&  genres.split(', ').map((genre, i) => {
                        return <p className="movie-genre" key={i}>{genre}</p>
                })}
            </div>
            <div className="con-details-buy">
                <a href={`/movie/${id}`}>Details</a>
                <a className="btn-buy">Buy Ticket</a>
            </div>
            {
                title == 'Avatar New' || 
                title == 'Tenet' ? 
                <>
                    <p className="recomended">Recomended</p>
                    <span className="mark-shadow"></span> 
                </> : ''
            }
        </div>
    )
}

export default Card;