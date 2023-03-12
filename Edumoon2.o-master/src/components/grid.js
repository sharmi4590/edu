import React, { Component } from 'react'



export default class Grid extends Component {
    render() {
        return (
         <div>


<i><h1  style={{textAlign: "center" ,color: "black" ,margin:"5%" ,marginBottom: "20px"}}>LIVE UPDATES</h1></i>
    <h5 style={{marginBottom: "50px"}}>expert team not only teaches but also organises webnars provide internships and many more</h5>
                
    
    
		<div style={{placeContent:"space-evenly" }} className="row">
            <div className="ed-course">
                <div className="col-md-3 col-sm-4 col-xs-12">
                    <div className="ed-course-in">
                        <a className="course-overlay" href="/events">
                            <img src="./images/webinars1.gif" alt="" />
                            <span>WEBINARS</span>
                        </a>
                    </div>
                </div>
                
                <div className="col-md-3 col-sm-4 col-xs-12">
                    <div className="ed-course-in">
                        <a className="course-overlay" href="/events">
                            <img src="./images/internships.png" alt="" />
                            <span>INTERNSHIPS</span>
                        </a>
                    </div>
                </div>
                <div className="col-md-3 col-sm-4 col-xs-12">
                    <div className="ed-course-in">
                        <a className="course-overlay" href="/events">
                            <img src="./images/workshop.gif" alt="" />
                            <span>WORKSHOPS</span>
                        </a>
                    </div>
                </div>
                
                </div>
            </div>


            
		<div style={{placeContent:"space-evenly"}}  className="row">
            <div className="ed-course">
                <div className="col-md-3 col-sm-4 col-xs-12">
                    <div className="ed-course-in">
                        <a className="course-overlay" href="/events">
                            <img src="./images/talks.jpg" alt="" />
                            <span>EDU-TALKS</span>
                        </a>
                    </div>
                </div>
                
                <div className="col-md-3 col-sm-4 col-xs-12">
                    <div className="ed-course-in">
                        <a className="course-overlay" href="/events">
                            <img src="./images/camp.jpg" alt="" />
                            <span>CAMPUS DRIVES</span>
                        </a>
                    </div>
                </div>
                <div className="col-md-3 col-sm-4 col-xs-12">
                    <div className="ed-course-in">
                        <a className="course-overlay" href="/events">
                            <img src="./images/sem.png" alt="" />
                            <span>SEMESTER TIPS</span>
                        </a>
                    </div>
                </div>
                
                </div>
            </div>

         </div>
        );
    }
}
