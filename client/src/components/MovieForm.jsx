import React, { Component } from 'react';
import { render } from 'react-dom';

class MovieForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '', 
            director: '',
            poster: '', 
            actor: ''
        };
        
        
    }
    handleNameChange(title){
        this.setState({title});
    }

    handleInputChange(director) {
        this.setState({ director });
    }

    handleContentChange(poster) {
        this.setState({ poster });
    }

    handleActorChange(actor){
        this.setState({ actor })
    }

    

    render() {
        return (
            <form className="card p-3 formContainer bg-dark" style={{marginTop: '5rem'}}>
                <label
                    htmlFor="title-input"
                    className="d-block m-1 text-light cardFont">{this.props.action} post:
                </label>
                <input
                    value={this.state.title}
                    onChange={(event) => { this.handleNameChange(event.target.value) }}
                    className="form-control w-5 m-1 d-inline text formAuthor cardFont"
                    placeholder="Title"
                />
                <input
                    value={this.state.director}
                    onChange={(event) => { this.handleInputChange(event.target.value) }}
                    className="form-control w-70 m-1 d-inline formTitle cardFont"
                    placeholder="Director"
                />
                <div className="form-group">
                    <input value={this.state.poster}
                 onChange={(event) => { this.handleContentChange(event.target.value) }}
                 className="form-control w-70 m-1 d-inline bg-light formContent cardFont"
                 placeholder="poster url" />
                </div>
               
                <button
                    onClick={() => { this.props.postMovie(this.state) }}
                    type="button"
                    className="btn btn-light btn-sm text-secondary m-2 cardFont">Post Movie!
                </button>
            </form>
        );
    }
}

export default MovieForm;


{/* <input
                    value={this.state.actor}
                    onChange={(event) => { this.handleActorChange(event.target.value) }}
                    className="form-control w-70 m-1 d-inline text formAuthor cardFont"
                    placeholder="actor"
                /> */}