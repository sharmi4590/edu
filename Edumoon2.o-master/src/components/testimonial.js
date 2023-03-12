import React, { Component } from 'react'



export default class Testimonial extends Component {
    render() {
        return (
         <div>
<i><h1  style={{textAlign: "center" , color:  "black" , margin:"5%",marginBottom: "20px"}}>TESTIMONIAL</h1></i>

<h5>we value our learners and let's see what they said about us.</h5>

<div className="sai">
    <div className="container" style={{background: "linear-gradient(to bottom, #000428, #004683)", animation: "background-color 120s",minHeight: "58vh", marginTop: "80px" ,border: "5px solid white" ,borderRadius: "27px" ,  overflow: "hidden"}}>
        <div className="row">
            <div className="col-lg-4">
                <div style={{backgroundColor: "rgba(0,0,0,0)"}} className="card">
                    <div className="face front-face"> <img src="./images/sowmya.jpeg" alt="" className="profile" />
                        <div className="pt-3 text-uppercase name"> Sowmya Korada </div>
                        <div className="designation">B.tech</div>
                    </div>
                    <div className="face back-face"> <span className="fas fa-quote-left"></span>
                        <div className="testimonial">
                          It was a great workshop for the behinner's to understand the basics of web development and get to know different technologies used in it. I could explore the concepts further while working on the assignments. The instructors were very humble and patiently cleared all the doubts. Overall it was a good learning experience. Thanks to Edumoon. </div> <span className="fas fa-quote-right"></span>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div style={{backgroundColor: "rgba(0,0,0,0)"}} className="card">
                    <div className="face front-face"> <img src="./images/visali1.jpeg" alt="" className="profile" />
                        <div className="pt-3 text-uppercase name"> Pemmaraju Visali</div>
                        <div className="designation">B.tech</div>
                    </div>
                    <div className="face back-face"> <span className="fas fa-quote-left"></span>
                        <div className="testimonial"> I've taken the 2 day workshop of Web Development from Edumoon!. I've learnt basics about Javascript & MySQL. The assignments which were given on day 1,2 helped us to understand how much we've learned in the session. Instructors  very helpful, they've clarified the doubts and responded immediately. Thank you for this wonderful session! </div> <span className="fas fa-quote-right"></span>
                    </div>
                </div>
            </div>
            
            <div className="col-lg-4">
                <div style={{backgroundColor: "rgba(0,0,0,0)"}} className="card">
                    <div className="face front-face"> <img src="./images/srujan.jpeg" alt="" className="profile" />
                        <div className="pt-3 text-uppercase name">Cheemakurthi Srujan </div>
                        <div className="designation">B.tech</div>
                    </div>
                    <div className="face back-face"> <span className="fas fa-quote-left"></span>
                        <div className="testimonial">I am glad that i got this opportunity to learn new things and how to add new features. In this sessin everyone was super good and helped each and every student. Their dedication and effort towards this session was completely awesome. Even when we ask small/stupid questions they answered it in sweet and convenient way</div> <span className="fas fa-quote-right"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>


         </div>
        );
    }
}
