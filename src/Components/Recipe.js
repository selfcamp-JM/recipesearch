import React, { Component } from 'react'

export default class Recipe extends Component {
  render() {
     console.log(this.props.recipe);
    const{image_url,
          publisher,
          source_url,
          title} = this.props.recipe;
    
          return (
      <React.Fragment>
  <div className ="col-10 mx-auto col-md-6 col-lg-4 my-3">
            <div className="card">
                <img src={image_url} 
                className="img-card-top"
                alt="recipe"/>
                <div className="card-body text-capitilize">
                  <h4><b>{title}</b></h4> 
                  <p>{publisher},{source_url}</p> 
                </div>
          </div>
        </div>




      </React.Fragment>
    )
  }
}
