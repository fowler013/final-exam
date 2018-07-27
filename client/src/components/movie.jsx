import React from 'react';
import { Link } from 'react-router-dom';

//these are the cards that on the home page!

const Movie = (props) => {
    return (
        <div className="card m-1 bg-secondary" style = {{ width:" 350px" }}>
        <div className="card-body text-left text-light cardFont" >
        <img className="card-img-top" src={props.post.poster} alt="Card image cap"/>
        <blockquote className="blockquote mb-0">
        TITLE:
      <h5 className="card-title">{props.post.title}</h5>
                <div className= "scroll-box">
                DIRECTOR:
                    <p className="card-text">{props.post.director}</p>
                </div>
                <div className= "scroll-box ">
                Actor:
                    <p className="card-text">{props.post.actor}</p>
                </div>
          
        </blockquote><Link to={`/${props.post.id}`} className="btn btn-dark btn-sm">Expand</Link>
        </div>
        
      </div>
        
    );
};

export default Movie;

{/* <div class="card" style="width: 18rem;">
  <img class="card-img-top" src=".../100px180/" alt="Card image cap">
  <div class="card-body">
    
    
    <Link to={`/${props.post.id}`} className="btn btn-secondary btn-sm">Expand</Link>
  </div>
</div> */}