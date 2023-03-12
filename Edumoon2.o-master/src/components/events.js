// import React, { Component } from 'react'



// export default class Events extends Component {
//     render() {
//         return (
//          <div style={{backgroundColor:"#80bebd"}}>

// <div className="home">  
//         <div className="carousel_index">
//         <div id="carouselExampleIndicators" className="carousel carouselCSS slide m-3" data-ride="carousel" data-interval="3000">

//             <ol className="carousel-indicators">
//               <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
//               <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//               <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//               <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
//             </ol>
//             <div className="carousel-inner">
//               <div className="carousel-item item active">
//                 <div className="carousel_bg">
//                   { <h1 className="main_head"><span className="Edu">Edu<span className="Moon">Moon</span></span> Events</h1> }
//                 </div>

//               </div>
//               <div className="carousel-item">
//                 <div className="carousel_bg3">
//                   { <h1 className="main_head1"><span className="Edu">Web<span className="Moon">inars</span></span></h1> }
//                 </div>           
//               </div>                
//               <div className="carousel-item ">
//                 <div className="carousel_bg2">
//                   { <h1 className="main_head3"><span className="Edu">Work<span className="Moon">Shops</span></span></h1> }
//                 </div>                             
//               </div>
//               <div className="carousel-item ">
//                 <div className="carousel_bg1">
//                   { <h1 className="main_head2"><span className="Edu">Live<span className="Moon">Sessions</span></span></h1> }
//                 </div>              
//               </div>
            
//             </div>
//             <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//               <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//               <span className="sr-only">Previous</span>
//             </a>
//             <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//               <span className="carousel-control-next-icon" aria-hidden="true"></span>
//               <span className="sr-only">Next</span>
//             </a>
//           </div>        
//           </div>

//           <div className="sections">
//             <div className="sec webinar ">
//               <i className='fas fa-laptop-code icon_sec' ></i>   
//               <h4 className="sub_head">Webinars</h4>       
//               <p className="sub_para">Register for our engaging webinars to get insights and strategies in shaping your career...</p>
//               <button className="sub_button">Register Now</button>
//             </div>
//             <div className="sec workshop ">
//               <i className="fas fa-user-cog icon_sec"></i>
//               <h4 className="sub_head">Workshops</h4>
//               <p className="sub_para">Attend workshops, prepare & build confidence with on-demand skills and Get Certified...</p>
//               <a href="/workshop.html#"><button className="sub_button">Register Now</button></a>
//             </div>
//             <div className="sec sessions">
//               <i className='fas fa-chalkboard-teacher icon_sec'></i>
//               <h4 className="sub_head">Live Sessions</h4>
//               <p className="sub_para">Join our Lively Sessions and interact virtually with highly skilled and talented educators for improving your skillset...</p>
//               <button className="sub_button">Join Now</button>
//             </div>
//             <div className="sec sessions ">
//               <i className='fas fa-book-reader icon_sec'></i>
//               <h4 className="sub_head">Tuitions</h4>
//               <p className="sub_para">Available from level-1 till graduation with great knowledgeble tutors.Join us and get best out of you...</p>
//               <button className="sub_button">Coming Soon...</button>
//             </div>
//         </div>

//         <div className="mt-4 latest_events">        
//           <h1 className="latest_events_head pl-4 mb-0">Latest Events</h1>
//         <div type="button" className="modal_section sec1 " data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
//           <i className="fas fa-play sub_icon"></i>
//         </div>

//         <div type="button" className="modal_section sec2" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
//           <i className="fas fa-play sub_icon"></i>
//         </div>

//         <div type="button" className="modal_section sec3" data-bs-toggle="modal" data-bs-target="#staticBackdrop3">
//           <i className="fas fa-play sub_icon"></i>
//         </div>

//         <div type="button" className="modal_section sec4" data-bs-toggle="modal" data-bs-target="#staticBackdrop4">
//           <i className="fas fa-play sub_icon"></i>
//         </div>     
//    <div className="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//           <div className="modal-dialog ">
//             <div className="modal-content sub_modal">
//               <div className="modal-header">
//                 <h4 className="modal-title modal_title" id="staticBackdropLabel">Crack Job At TCS</h4>
//                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//               </div>
//               <div className="modal-body">
//                 <div className="modal-body">
//                   <iframe className="embed_video" src="https://www.youtube.com/embed/dG4MnKt-XIg"></iframe>
//                 </div>
//               </div>
//               <div className="modal-footer">
//                 <button type="button" className="btn btn-danger modal_button" data-bs-dismiss="modal">Close</button>  
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//           <div className="modal-dialog ">
//             <div className="modal-content sub_modal">
//               <div className="modal-header">
//                 <h4 className="modal-title modal_title" id="staticBackdropLabel">All About Wipro</h4>
//                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//               </div>
//               <div className="modal-body">
//                 <div className="modal-body">
//                   <iframe className="embed_video" src="https://www.youtube.com/embed/pmN6-rChfjk"></iframe>
//                 </div>
//               </div>
//               <div className="modal-footer">
//                 <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>  
//               </div>
//             </div>
//           </div>
//         </div>

 
//         <div className="modal fade" id="staticBackdrop3" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//           <div className="modal-dialog ">
//             <div className="modal-content sub_modal">
//               <div className="modal-header">
//                 <h4 className="modal-title modal_title" id="staticBackdropLabel">How to crack Mathworks</h4>
//                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//               </div>
//               <div className="modal-body">
//                 <div className="modal-body">
//                   <iframe className="embed_video" src="https://www.youtube.com/embed/vf0bFM2FzBQ"></iframe>
//                 </div>
//               </div>
//               <div className="modal-footer">
//                 <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>  
//               </div>
//             </div>
//           </div>
//         </div>


      
//         <div className="modal fade" id="staticBackdrop4" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//           <div className="modal-dialog ">
//             <div className="modal-content sub_modal">
//               <div className="modal-header">
//                 <h4 className="modal-title modal_title" id="staticBackdropLabel">Digital Marketing Webin</h4>
//                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//               </div>
//               <div className="modal-body">
//                 <div className="modal-body">
//                   <iframe className="embed_video" src="https://www.youtube.com/embed/oYSKu6BZ9BY"></iframe>
//                 </div>
//               </div>
//               <div className="modal-footer">
//                 <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>  
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>
// </div>







//             </div>

           
// );
// }
// }









import React, { Component } from 'react'



export default class Events extends Component {
    render() {
        return (
         <div>


<div className="home">
    <div className="carousel_index">
       <div id="carouselExampleIndicators" className="carousel carouselCSS slide m-3" data-ride="carousel" data-interval="2000">
          <ol className="carousel-indicators">
             <li data-target="#carouselExampleIndicators" data-slide-to="0" className=""></li>
             <li data-target="#carouselExampleIndicators" data-slide-to="1" className="active"></li>
             <li data-target="#carouselExampleIndicators" data-slide-to="2" className=""></li>
             <li data-target="#carouselExampleIndicators" data-slide-to="3" className=""></li>
          </ol>
          <div className="carousel-inner">
             <div className="carousel-item item">
                <div className="carousel_bg">
                   <h1 className="main_head"><span className="Edu">Edu<span className="Moon">Moon</span></span> Events</h1>
                </div>
             </div>
             <div className="carousel-item active">
                <div className="carousel_bg3">
                   <h1 className="main_head1"><span className="Edu">Web<span className="Moon">inars</span></span></h1>
                </div>
             </div>
             <div className="carousel-item">
                <div className="carousel_bg2">
                   <h1 className="main_head3"><span className="Edu">Work<span className="Moon">Shops</span></span></h1>
                </div>
             </div>
             <div className="carousel-item">
                <div className="carousel_bg1">
                   <h1 className="main_head2"><span className="Edu">Live<span className="Moon">Sessions</span></span></h1>
                </div>
             </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev"><span className="carousel-control-prev-icon" aria-hidden="true"></span><span className="sr-only">Previous</span></a><a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next"><span className="carousel-control-next-icon" aria-hidden="true"></span><span className="sr-only">Next</span></a>
       </div>
    </div>
    <div className="sections">

       <div className="sec webinar service-wrap">
          <i className="fas fa-laptop-code icon_sec"></i>
          <h4 className="sub_head">Webinars</h4>
          <p className="sub_para">Register for our engaging webinars to get insights and strategies in shaping your career...</p>
        
          <a href="web"><button className="sub_button">View Webinars</button></a>
       </div>
       <div className="sec workshop service-wrap">
          <i className="fas fa-user-cog icon_sec"></i>
          <h4 className="sub_head">Workshops</h4>
          <p className="sub_para">Attend workshops, prepare &amp; build confidence with on-demand skills and Get Certified...</p>
          <a href="work"><button className="sub_button">View Workshops</button></a>
       </div>
       <div className="sec sessions service-wrap">
          <i className="fas fa-chalkboard-teacher icon_sec"></i>
          <h4 className="sub_head">Live Sessions</h4>
          <p className="sub_para">Join our Lively Sessions and interact virtually with highly skilled and talented educators for improving your skillset...</p>
          <a href="ses"><button className="sub_button">Join Now</button></a>
       </div>
    </div>
    <div className="mt-4 latest_events">
       <h1 className="latest_events_head pl-4 mb-0">Latest Events</h1>
       <a href="https://www.youtube.com/watch?v=dG4MnKt-XIg"> <div type="button" className="modal_section sec1 " ><i className="fas fa-play sub_icon"></i></div></a>
       <a href="https://www.youtube.com/watch?v=pmN6-rChfjk"><div type="button" className="modal_section sec2" ><i className="fas fa-play sub_icon"></i></div></a>

       <a href="https://www.youtube.com/watch?v=vf0bFM2FzBQ"><div type="button" className="modal_section sec3" ><i className="fas fa-play sub_icon"></i></div></a>
       <a href="https://www.youtube.com/watch?v=oYSKu6BZ9BY"><div type="button" className="modal_section sec4" ><i className="fas fa-play sub_icon"></i></div></a>
       <div className="modal fade" id="staticBackdrop1" >
          <a href="#/dbms">
          <div className="modal-dialog ">
          <a href="#/dbms"></a>
             <div className="modal-content sub_modal">
                <div className="modal-header">
                <a href="https://www.youtube.com/watch?v=dG4MnKt-XIg"></a>
                   <h4 className="modal-title modal_title" >Crack Job At TCS</h4>
                   <a href="#/dbms"></a>   
                </div>
                <div className="modal-body">
                   
                </div>
                
             </div>
          </div>
          </a>
       </div>
       <div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog ">
             <div className="modal-content sub_modal">
                <div className="modal-header">
                   <h4 className="modal-title modal_title" id="staticBackdropLabel">All About Wipro</h4>
                   <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                 
                </div>
                <div className="modal-footer"><button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button></div>
             </div>
          </div>
       </div>
       <div className="modal fade" id="staticBackdrop3" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog ">
             <div className="modal-content sub_modal">
                <div className="modal-header">
                   <h4 className="modal-title modal_title" id="staticBackdropLabel">How to crack Mathworks</h4>
                   <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  
                </div>
                <div className="modal-footer"><button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button></div>
             </div>
          </div>
       </div>
       <div className="modal fade" id="staticBackdrop4" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog ">
             <div className="modal-content sub_modal">
                <div className="modal-header">
                   <h4 className="modal-title modal_title" id="staticBackdropLabel">Digital Marketing Webin</h4>
                   <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  
                </div>
                <div className="modal-footer"><button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button></div>
             </div>
          </div>
       </div>
    </div>
  </div>


         </div>

           
        );
    }
}








