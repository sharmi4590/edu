import React, { Component } from 'react'




export default class Patners extends Component {
    render() {
        return (
         <div >

<div className="features pt-4">
        <div className="container">
          <div className="row">
            <div className="col" style={{marginBottom: "-30px"}}>
              <div className=" text-center">
                <h2 className="section_title">Welcome To Edumoon E-Learning</h2>
                <div className="section_subtitle">
                  <p >
                   We are an e-learning platform providing Courses, online lectures,
                   workshops and webinars in web and app development, AP EAMCET and 
                   also offering internships in various fields such as content writing
                   and graphics designing.
                  </p>
                         
                </div>
              </div>
            </div>
          </div>
          <div className="row features_row">
           
            <div className="col-lg-4 feature_col">
              <div className="feature text-center trans_400">
                <div className="feature_icon">
                  <img src="./images/icon_3.png" alt="" />
                </div>
                <div className="milestone_counter pt-4" data-end-value="200" data-sign-after="+">200+</div>
                <h3 className="feature_title">Internships Offered</h3>
                <div className="feature_text">
                  <p >We are partnered with various companies like Schemax,  Antar IOT, OBSELE for providing paid internships.</p>
                </div>
              </div>
            </div>

         
            <div className="col-lg-4 feature_col">
              <div className="feature text-center trans_400">
                <div className="feature_icon">
                  <img src="./images/icon_2.png" alt="" />
                </div>
                <div className="milestone_counter pt-4" data-end-value="10,000" data-sign-after="+">10,000+</div>
                <h3 className="feature_title">Active Learners</h3>
                <div className="feature_text">
                  <p >All our workshop attendees are Contented with our content.</p>
                </div>
              </div>
            </div>

           
            <div className="col-lg-4 feature_col">
              <div className="feature text-center trans_400">
                <div className="feature_icon">
                  <img src="./images/icon_1.png" alt="" />
                </div>
                <div className="milestone_counter pt-4" data-end-value="100" data-sign-after="+">100+</div>
                <h3 className="feature_title">Industry Experts</h3>
                <div className="feature_text">
                  <p style={{fontStyle:"normal"}}>Guest webinars with industrial experts from ISRO, ANC security, IIM and IIT alumnis and Andhra university.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="partners mb-5">
        <div className="container">
          <h2 className="text-center">Our Intern Partners</h2>
          <div className="row text-center pt-4">
            <div className="col">
              <img src="./images/antar.jpeg" width="60px" alt="antar-iot" />
              <h3>Antar Iot</h3>
            </div>
            <div className="col">
              <img src="./images/obsel.jpeg" width="110px" alt="Obsel" />
              <h3>Obsel</h3>
            </div>
            <div className="col">
              <img src="./images/schemax.jpeg" width="110px" alt="Schemax Tech" />
              <h3>Schemax Tech</h3>
            </div>
          </div>
        </div>
      </div>

         </div>


        );}}