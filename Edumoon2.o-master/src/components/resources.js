import React, { Component } from 'react'



export default class Resources extends Component {
    render() {
        return (
         <div style={{fontStyle: "italic",
            color: "brown"
        }} >
<div className="container servicebody" id="myservice_section">
         <div className="service-are" id="service">
         	<p id="dim"  className="text-center mt-5">RESOURCES</p>
 			<p className="text-center">
 				This are the resources provided by us.
 			</p>
         	<div className="row">
         		

         		<div className="col-md-6 col-xs-12">
         			<div className="service-wrap text-center">
         				<div className="service-icon">
         					<i className="fa fa-laptop"></i>
         				</div>
         				<h3><a href="video">VIDEO TUTORIALS</a></h3>
         				<p>
         					Here you will find all the videos tutorials for all engineering branches.
         				</p>
         			</div>
         		</div>

         			<div className="col-md-6 col-xs-12">
         			<div className="service-wrap text-center">
         				<div className="service-icon">
         					<i className="fa fa-laptop"></i>
         				</div>
         				<h3><a href="materials">MATERIALS</a></h3>
         				<p>
         					Here you will find all the text materials for all engineering branches.
         				</p>
         			</div>
         		</div>
            </div>
        </div>
    </div>

    <div className="container">
    <div className="row mt-5 mb-5">
        <div className="col-12 col-md-6 pt-md-5">
            <p>Download and view all resources at one place</p>
            <p>Sign up free to get acess to all the beggest open source materials</p>
            <p>If you want to share materials please send them to edumoonhelpdesk@gmail.com</p>
        </div>
    </div>
    </div>
         </div>

           
        );
    }
}
