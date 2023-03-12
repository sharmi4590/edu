import React, { Component } from 'react'



export default class Popularcourses extends Component {
    render() {
        return (
         <div>
  <h1  style={{textAlign: "center" ,color: "black" ,margin:"0%" ,marginBottom: "20px"}}>POPULAR ONLINE COURSES</h1>
<h5 style={{fontFamily:"normal"}}>expert team teaches all the popular courses like Web development, App development and EAMCET</h5>
                


 <div id="cards_landscape_wrap-2">
    <div className="container">
        <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="#/dbms">
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <img src="./images/vidyaLakshmii.jpeg" alt="" />
                            </div>
                            <div className="text-container">
                              <h6>Database Management System</h6>
                                <p style={{marginBottom: "30px"}}>Palisetty vidyaLakshmi</p>
                                <p style={{marginBottom: "30px",fontStyle:"italic",fontFamily:"volkhov"}}>Database management systems are essential for businesses  they offer an efficient way of handling large amounts and multiple types of data. The ability to access data efficiently allows companies to make informed decisions quicker.</p>
                                <b style={{float: "left",marginBottom: "10px"}}><i style={{color: "gold "}} className='fas fa-eye'></i>1,903 views</b><b style={{width:"20px" ,marginBottom: "10px" ,color:"rgb(12, 195, 250)" , float: "right" ,marginRight: "10px"}}>Free</b>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="#/flat">
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <img src="./images/samuelSusann.jpeg" alt="" />
                            </div>
                            <div className="text-container">                                    
                              <h6>
                                Formal Language & Automata Theory
                              </h6>
                              <p style={{marginBottom: "30px"}}>Samuel Susan</p>
                              <p style={{marginBottom: "30px",fontStyle:"italic",fontFamily:"volkhov"}}>The major objective of automata theory is to develop methods by which computer scientists can describe and analyze the dynamic behavior of discrete systems, in which signals are sampled periodically and dynamically.</p>
                              <b style={{float: "left" ,marginBottom: "10px"}}><i style={{color: "gold"}} className='fas fa-eye'></i>1,184 views</b><b style={{width:"20px" ,marginBottom: "10px" ,color:"rgb(12, 195, 250)", float: "right" ,marginRight: "10px"}}>Free</b>
                              </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="#/dld">
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <img src="./images/sohanaa.jpeg" alt="" />
                            </div>

                            <div className="text-container">
                              <h6>
                                Digital Logic Design
                              </h6>
                              <p style={{marginBottom: "43px" ,marginTop: "20px"}}>Sohana</p>
                              <p style={{marginBottom: "30px",fontStyle:"italic",fontFamily:"volkhov"}}>Digital logic is fundamental in creating electronic devices. It is used to create circuits and logic gates, as well as to check computer chips and also number systems ,boolean algebra and combinational logic design circuit.</p>
                              <b style={{float: "left" ,marginBottom: "10px"}}><i style={{color: "gold "}} className='fas fa-eye'></i>1,000 views</b><b style={{width:"20px" ,marginBottom: "10px" ,color:"rgb(12, 195, 250)", float: "right" ,marginRight: "10px"}}>Free</b>
                              </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="#/oop">
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <img src="./images/karthikk.jpg" alt="" />
                            </div>
                            <div className="text-container">
                              <h6>
                                Object Oriented Programming
                              </h6>
                              <p style={{marginBottom: "30px"}}>Karun Karthik</p>
                              <p style={{marginBottom: "30px",fontStyle:"italic",fontFamily:"volkhov"}}>C++ is one of the most widely-used programming languages in game development. It has been used to create: games, such as World of Warcraft,  game engines like Unreal Engine,and gaming consoles, including Xbox .</p>
                              <b style={{float: "left" , marginBottom: "10px"}}><i style={{color: "gold"}} className='fas fa-eye'></i>1,500 views</b><b style={{width:"20px" ,marginBottom: "10px" ,color:"rgb(12, 195, 250)", float: "right" ,marginRight: "10px"}}>Free</b>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>

<a href="#/video">
<button className="btn btn-primary" style={{margin:"auto" ,marginTop: "10px",display: "block" , borderRadius: "14px" ,backgroundColor: " #14bdee" ,padding: "10px" ,color: "white" ,fontWeight: "800" ,marginTop:"20px"}}>View All Courses</button></a>
         </div>
        );
    }
}
