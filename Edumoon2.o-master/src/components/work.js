import React, { Component } from 'react'



export default class Work extends Component {
    render() {
        return (
         <div>

<div className="container">
    <div className="row">
      <div className="column">
        <h2 className="section_title" style={{fontSize: "3.5rem"}}>
          <u>Workshops</u>
          <br/><br/>
        </h2>
      </div>
    </div>
  </div>



<div className="container gallery-container">
    <div className="tz-gallery">
      <div className="row">
        <div className="col-sm-6 col-md-4 pb-4">
          <div className="p-2 zoom">
            <a className="lightbox">
              <img className="p-0 img-thumbnail" src="./images/wk-1.jpeg" alt="Traffic" />
            </a>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="p-2 zoom">
            <a className="lightbox" >
              <img className="p-0 img-thumbnail" src="./images/wk-2.jpeg" alt="Traffic" />
            </a>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="p-2 zoom">
            <a className="lightbox" >
              <img className="p-0 img-thumbnail" src="./images/wk-3.jpeg" alt="Traffic" />
            </a>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="p-2 zoom">
            <a className="lightbox" >
              <img className="p-0 img-thumbnail" src="./images/wk-4.jpeg" alt="Traffic" />
            </a>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="p-2 zoom">
            <a className="lightbox" >
              <img className="p-0 img-thumbnail" src="./images/wk-5.jpeg" alt="Traffic" />
            </a>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="p-2 zoom">
            <a className="lightbox" >
              <img className="p-0 img-thumbnail" src="./images/wk-6.jpeg" alt="Traffic" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

         </div>

           
        );
    }
}



