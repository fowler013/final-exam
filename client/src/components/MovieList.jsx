import React, { Component, Fragment } from 'react';
import Movie from './movie';

class MovieList extends Component {
    render() {
        return (
            <Fragment> 
                <div className="d-flex flex-wrap blogContainer">
                {this.props.movies.map((movie) => {
                    return (
                        <Movie key={movie.id} post={movie} />
                    );
                })}
            </div>
            </Fragment>
        )
    }
}

export default MovieList;