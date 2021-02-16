import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleKeyDown(event) {
        if (event.key == 'Enter') {
            this.props.setMovies(event.target.value);
        }
    }

    render() {
        const { title } = this.props;

        return (
            <div className="search search__container">
                <input 
                    type="text"
                    placeholder="Search something..."
                    value={title}
                    onChange={event => this.props.setTitle(event.target.value)}
                    onKeyDown={this.handleKeyDown}
                />
            </div>
        );  
    }
}

export default Search;
