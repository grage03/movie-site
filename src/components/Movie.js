import React from 'react';

function Movie(props) {
    const { 
        Title: title,
        Year: year,
        Type: type,
        Poster: img
     } = props;

    return (
        <>
            <div className="movies">
                <div className="movies__inner">
                    {img === 'N/A' 
                        ? <img src="http://placehold.it/350x350"/>
                        : <img src={img}/>}
                    <div className="movies__information">
                        <h4>{title}</h4>
                        <h4>{year}</h4>
                    </div>
                    <div className="movies__type">
                        <h4>
                            {
                                type == 'movie' 
                                    ? 'Movie' 
                                    : 'Series'
                            }
                        </h4>
                    </div>
                </div>
            </div>
        </>
    );  
}

export default Movie;
