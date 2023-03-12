import React, { Component } from 'react'




export default class Carslider extends Component {
    render() {
        return (
         <div>
<div className="carousel slide" data-bs-ride="carousel" id="carouselExampleIndicators">
        <div className="carousel-indicators">
          {/* <button aria-label="Slide 1" className="active" data-bs-slide-to="0" data-bs-target="#carouselExampleIndicators" type="button"></button> <button aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#carouselExampleIndicators" type="button"></button> <button aria-label="Slide 3" data-bs-slide-to="2" data-bs-target="#carouselExampleIndicators" type="button"></button>  <button aria-label="Slide 4" data-bs-slide-to="3" data-bs-target="#carouselExampleIndicators" type="button"></button> */}
        </div>
        <div className="carousel-inner">
          <div  className="carousel-item active">
            <img  className="d-block w-100" src={"./images/img-example.jpg"} />
            <div className="carousel-caption">
              <h1 className="animated bounceInRight pup" style={{animationDelay: "1s" ,color:"white"}}>Become a Campus Ambassador</h1>
              <p className="animated bounceInLeft " style={{animationDelay: "2s" ,color:"white"}}><span>Avail this opportunity to bring out the best in you.</span></p>
              <p className="animated bounceInRight" style={{animationDelay: "3s",color:"white"}}><a href="https://forms.gle/5V1xFGBmAbJv9Dft5">Apply Now</a></p>
            </div>
          </div>
         
         
        </div>{/*<button className="carousel-control-prev" data-bs-slide="prev" data-bs-target="#carouselExampleIndicators" type="button"><span aria-hidden="true" className="carousel-control-prev-icon"></span> <span className="visually-hidden">Previous</span></button> <button className="carousel-control-next" data-bs-slide="next" data-bs-target="#carouselExampleIndicators" type="button"><span aria-hidden="true" className="carousel-control-next-icon"></span> <span className="visually-hidden">Next</span></button> */}
      </div>
         </div>
        );
    }
}
