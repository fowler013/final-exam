import React, { Component } from 'react';
import MovieForm from './MovieForm';
import ActorsList from './ActorsList';

class Actors extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: []

        };
    }

    componentDidMount() {
        this.getActors();
    }

    getActors() {
        fetch('/api/actor/')
            .then((response) => {
                return response.json();
            }).then((actors) => {
                console.log(actors);

                this.setState({
                    actors: actors
                });
            }).catch((err) => {
                console.log(err);
            });
    }

    addActor(post) {
        console.log(post);
        fetch('/api/actor/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        }).then(() => {
            this.getActors();
        }).catch((err) => {
            console.log(err);
        });
    }



    render() {
        return (
            <div className="container divContainer"style= {{'paddingBottom': '11em'}}>
                <MovieForm action="Create" postActor={(post) => { this.addActor(post); }} />
                <ActorList movies={this.state.actors} />
            </div>
        );
    }
}

export default Actors;