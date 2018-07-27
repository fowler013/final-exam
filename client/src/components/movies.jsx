import React, { Component } from 'react';
import MovieForm from './MovieForm';
import MovieList from './MovieList';

class Movies extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: []

        };
    }

    componentDidMount() {
        this.getMovies();
    }

    getMovies() {
        fetch('/api/movie/')
            .then((response) => {
                return response.json();
            }).then((movies) => {
                console.log(movies);

                this.setState({
                    movies: movies
                });
            }).catch((err) => {
                console.log(err);
            });
    }

    addMovie(post) {
        console.log(post);
        fetch('/api/movie/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        }).then(() => {
            this.getMovies();
        }).catch((err) => {
            console.log(err);
        });
    }



    render() {
        return (
            <div className="container divContainer"style= {{'paddingBottom': '11em'}}>
                <MovieForm action="Create" postMovie={(post) => { this.addMovie(post); }} />
                <MovieList movies={this.state.movies} />
            </div>
        );
    }
}

export default Movies;