import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import MovieForm from './MovieForm';

class Single extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movie: {}
        };

       
    }

    componentDidMount() {
        this.getMovie();
    }

    getMovie() {
        fetch(`/api/movie/${this.props.match.params.id}`)
            .then((response) => {
                return response.json();
            }).then((movie) => {
                console.log(movie);

                this.setState({
                    movie: movie
                });
            }).catch((err) => {
                console.log(err);
            });
    }

    updateMovie(post) {
        fetch(`/api/movie/${this.props.match.params.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        }).then(() => {
            this.setState({
                movie: post
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    deleteMovie() {
        fetch(`/api/movie/${this.props.match.params.id}`, {
            method: 'DELETE',
        }).then(() => {
            this.props.history.push('/');

        }).catch((err) => {
            console.log(err);
        });
    }


   



    render() {
        let post = this.state.movie;
        
        return (
            <div>
                <div className="container" style = {{ width:" 550px"}} >
                    <MovieForm action="Update" postMovie={(post) => { this.updateMovie(post); }} />
                </div>
                
                <div className="card m-3 bg-light cardFont float" style = {{ width:" 550px"}}>
                    <div className="card-body   card-center text-center text-light bg-secondary ">
                    <label
                    htmlFor="title-input"
                    className="d-block m-2">{this.props.action}
                </label>
                        <div className="card-text">
                        <img className="card-img-top singleImg" src={post.poster} alt="Card image cap"/>
                        </div>
                        <label
                    htmlFor="title-input"
                    className="d-block m-2">{this.props.action} TITLE:
                </label>
                        <h3 className="card-text">
                            {post.title}
                        </h3>
                        <label
                    htmlFor="title-input"
                    className="d-block m-2">{this.props.action} DIRECTOR:
                </label>
                        <h5 className="card-text">
                            {post.director}
                        </h5>

                            
                        
                    </div>
                </div>


                <div className="container" style = {{ width:" 150px" }}>
                    <div key={this.state.movie.id} className="card m-1 deleteContainer">
                        <div className="card-body text-left">

                        </div>
                        <button type="button" className="btn btn-dark btn-lg cardFont" onClick={() => { this.deleteMovie(); }}>DELETE</button>

                    </div >
                </div>
                
                
            </div>

        )


    };
}


export default Single;






    // this is for the actors//
// componentDidMount() {
//     this.getActors();
// }

// getActors() {
//     fetch(`/api/actor/${this.props.match.params.id}`)
//         .then((response) => {
//             return response.json();
//         }).then((actor) => {
//             console.log(actor);

//             this.setState({
//                 actor: actor
//             });
//         }).catch((err) => {
//             console.log(err);
//         });
// }

// updateActor(post) {
//     fetch(`/api/actor/${this.props.match.params.id}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(post1)
//     }).then(() => {
//         this.setState({
//             actor: post1
//         });
//     }).catch((err) => {
//         console.log(err);
//     });
// }

// deleteActor() {
//     fetch(`/api/actor/${this.props.match.params.id}`, {
//         method: 'DELETE',
//     }).then(() => {
//         this.props.history.push('/');

//     }).catch((err) => {
//         console.log(err);
//     });
// }








{/* <label
                    htmlFor="title-input"
                    className="d-block m-2">{this.props.action} Actor:
                </label>
                        <h5 className="card-text">
                            {post.actor}
                        </h5> */}