import React from 'react';

import Movie from './Movie.js';

function Movies(props) {
    const { movies } = props;

    return (
        <div className="movies__container container">
            {movies.map(item => {
                return <Movie key={item.imdbID} {...item}/>
            })}
        </div>
    );
}

export default Movies;
