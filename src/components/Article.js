import React        from 'react';

import Movies       from './Movies.js';
import Search       from './Search.js';
import Pages        from './Pages.js';

class Article extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            title: 'harry potter',

            isFound: true,

            currentPage: 1,
            totalPages: 0
        }

        this.setMovies          = this.setMovies.bind(this);
        this.setTitle           = this.setTitle.bind(this);
        this.setCurrentPage     = this.setCurrentPage.bind(this);
    }

    componentDidMount() {
        const { 
            currentPage, 
            title 
        } = this.state;

        fetch(`http://www.omdbapi.com/?apikey=68dd085f&page=${currentPage}&s=${title}`)
            .then(responce => responce.json())
            .then(data => this.setState({
                movies: data.Search,
                currentPage: 1,
                totalPages: Math.floor(+(data.totalResults / 10))
            }));
    }

    setTitle(value) {
        this.setState({
            title: value
        });
    }

    setCurrentPage(event) {
        const { 
            currentPage, 
            title 
        } = this.state;

        switch(event.target.name) {
            case 'next': {
                this.setState({
                    currentPage: this.state.currentPage + 1
                });

                break;
            }
            case 'back': {
                this.setState({
                    currentPage: this.state.currentPage - 1
                });
                
                break;
            }
        }

        fetch(`http://www.omdbapi.com/?apikey=68dd085f&page=${currentPage}&s=${title}`)
            .then(responce => responce.json())
            .then(data => {
                this.setState({
                    movies: data.Search
                });
            });
    }

    setMovies(value) {
        fetch(`http://www.omdbapi.com/?apikey=68dd085f&s=${value}`)
            .then(responce => responce.json())
            .then(data => {
                    typeof(data.Search) === 'undefined' 
                        ? this.setState({
                            isFound: false
                        }) 
                        : this.setState({
                            movies: data.Search,
                            currentPage: 1,
                            totalPages: Math.floor(+(data.totalResults / 10)),
                            isFound: true
                        })
                });
    }

    render() {
        const { 
            movies, 
            title,
            isFound,
            totalPages,
            currentPage
        } = this.state;

        return (
            <>
                <Search 
                    setMovies={this.setMovies} 
                    setTitle={this.setTitle} 
                    title={title}
                />
                {
                    isFound 
                        ? <Movies movies={movies}/> 
                        : <h1 className="movies__found">Ничего не найдено!</h1>
                }
                {
                    totalPages > 1 && isFound
                        ? <Pages 
                            setCurrentPage={this.setCurrentPage}
                            totalPages={totalPages}
                            currentPage={currentPage}
                            /> 
                        : null
                }
            </>
        );
    }
}

export default Article;
