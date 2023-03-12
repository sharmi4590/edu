import React, { Component } from 'react'



export default class Footer extends Component {
    render() {
        return (
         <div>


<footer className="footer-area">
                <div className="footer-wave-box">
                    <div className="footer-wave footer-animation"></div>
                </div>
                <div className="main">
                    <div className="footer">
                        <div className="single-footer">
                            <h4 style={{color:"black"}}>about us</h4>
                            <p style={{color:"white"}}>Edumoon provides one step solution to students.</p>
                            <div className="footer-social">
                                <a href=""><i className="fab fa-facebook-f"></i></a>
                                <a href=""><i className="fab fa-twitter"></i></a>
                                <a href=""><i className="fab fa-instagram"></i></a>
                                <a href=""><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="single-footer">
                            <h4 style={{color:"black"}}>main menu</h4>
                            <ul>
                                <li><a href="home"><i className="fas fa-chevron-right"></i> Home</a></li>
                                <li><a href="tutions"><i className="fas fa-chevron-right"></i> Tutions</a></li>
                                <li><a href="resources"><i className="fas fa-chevron-right"></i> Courses</a></li>
                                <li><a href="events"><i className="fas fa-chevron-right"></i> Events</a></li>
                                <li><a href="about"><i className="fas fa-chevron-right"></i> About Us</a></li>
                            </ul>
                        </div>
                        <div className="single-footer">
                            <h4 style={{color:"black"}}>quick links</h4>
                            <ul>
                                <li><a href=""><i className="fas fa-chevron-right"></i> privacy policy</a></li>
                                <li><a href=""><i className="fas fa-chevron-right"></i> terms & conditions</a></li>
                                <li><a href=""><i className="fas fa-chevron-right"></i> disclaimer</a></li>
                            </ul>
                        </div>
                        <div className="single-footer">
                            <h4 style={{color:"black"}}>contact us</h4>
                            <ul>
                                <li><a href=""><i className="fas fa-map-marker-alt"></i>Seetahamadhara,Visakhapatnam-530013</a></li>
                                <li><a href=""><i className="fas fa-mobile-alt"></i> 8555899332</a></li>
                                <li><a href="www.gmail.com"><i className="far fa-envelope"></i> theedumoon@gmail.com</a></li>
                                <li><a href="www.theedumoon.com"><i className="fas fa-globe-europe"></i> www.theedumoon.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="copy">
                        <p style={{color:"white"}}>&copy; 2022 all rights reserved</p>
                    </div>
                </div>
            </footer>

         </div>
        );
    }
}
