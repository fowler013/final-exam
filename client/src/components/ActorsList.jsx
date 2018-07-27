import React, { Component, Fragment } from 'react';
import Movie from './movie';

class ActorsList extends Component {
    render() {
        return (
            <Fragment> 
                <div className="d-flex flex-wrap blogContainer">
                {this.props.actors.map((actor) => {
                    return (
                        <Movie key={actor.id} post={actor} />
                    );
                })}
            </div>
            </Fragment>
        )
    }
}

export default ActorsList;