import React, { Component } from 'react'




export default class Navbar extends Component {


  componentDidMount () {
 
    let sidebar = document.querySelector(".sidebar");
    let closeBtn = document.querySelector("#btn");
    let searchBtn = document.querySelector(".bx-search");




    let closeBtn1 = document.querySelector("#btn1");
    let closeBtn2 = document.querySelector("#btn2");
    let closeBtn3 = document.querySelector("#btn3");
    let closeBtn4 = document.querySelector("#btn4");
    let closeBtn5 = document.querySelector("#btn5");
    let closeBtn6 = document.querySelector("#btn6");
    let closeBtn7 = document.querySelector("#btn7"); 
    // let closeBtn8 = document.querySelector("#btn8"); 
  
    closeBtn1.addEventListener("click", ()=>{
      if (sidebar.style.display === 'none') {
        sidebar.classList.add("open");
        sidebar.style.display = 'block';
        
       
    } else {
     
        sidebar.style.display = 'none';
        
    }
    });

    closeBtn2.addEventListener("click", ()=>{
      if (sidebar.style.display === 'none') {
        sidebar.classList.add("open");
        sidebar.style.display = 'block';
        
       
    } else {
     
        sidebar.style.display = 'none';
        
    }
    });





    closeBtn3.addEventListener("click", ()=>{
      if (sidebar.style.display === 'none') {
        sidebar.classList.add("open");
        sidebar.style.display = 'block';
        
       
    } else {
     
        sidebar.style.display = 'none';
        
    }
    });





    closeBtn4.addEventListener("click", ()=>{
      if (sidebar.style.display === 'none') {
        sidebar.classList.add("open");
        sidebar.style.display = 'block';
        
       
    } else {
     
        sidebar.style.display = 'none';
        
    }
    });
  




    closeBtn5.addEventListener("click", ()=>{
      if (sidebar.style.display === 'none') {
        sidebar.classList.add("open");
        sidebar.style.display = 'block';
        
       
    } else {
     
        sidebar.style.display = 'none';
        
    }
    });

    closeBtn6.addEventListener("click", ()=>{
      if (sidebar.style.display === 'none') {
        sidebar.classList.add("open");
        sidebar.style.display = 'block';
        
       
    } else {
     
        sidebar.style.display = 'none';
        
    }
    });



    closeBtn7.addEventListener("click", ()=>{
      if (sidebar.style.display === 'none') {
        sidebar.classList.add("open");
        sidebar.style.display = 'block';
        
       
    } else {
     
        sidebar.style.display = 'none';
        
    }
    });

    // closeBtn8.addEventListener("click", ()=>{
    //   if (sidebar.style.display === 'none') {
    //     sidebar.classList.add("open");
    //     sidebar.style.display = 'block';
        
       
    // } else {
     
    //     sidebar.style.display = 'none';
        
    // }
    // });

    closeBtn.addEventListener("click", ()=>{
        if (sidebar.style.display === 'none') {
          sidebar.classList.add("open");
          sidebar.style.display = 'block';
          
         
      } else {
       
          sidebar.style.display = 'none';
          
      }
    });
  

}
    render() {
        return (
         <div>

  <div className="sidebar"  style={{display:"none"}} >
    <div className="logo-details">
      <i className='bx bxs-moon icon'></i>
        <div className="logo_name"><span style={{color:"blue"}}>Edu</span>Moon</div>
        
    </div>
    <ul className="nav-list">
      {/* <li> */}
        {/* <a href="/home"> */}
          {/* <i className='bx bxs-home'></i> */}
          {/* <span className="links_name">Home</span> */}
        {/* </a> */}
         {/* <span className="tooltip">Home</span> */}
      {/* </li> */}
      <li>
       <a href="resources">
         <i className='bx bxs-bookmark' ></i>
         <span id="btn1" className=" links_name">Courses</span>
       </a>
       <span className="tooltip">Courses</span>
     </li>
     <li>
       <a href="tutions">
         <i className='bx bxs-cloud-download' ></i>
         <span  id="btn2" className=" links_name">Tuitions</span>
       </a>
       <span className="tooltip">Tutions</span>
     </li>
     <li>
       <a href="blog">
         <i className='bx bx-pie-chart-alt-2' ></i>
         <span id="btn3" className=" links_name">Blog</span>
       </a>
       <span className="tooltip">BLOG</span>
     </li>
     <li>
       <a href="events">
         <i className='bx bxs-calendar-event' ></i>
         <span id="btn4" className="ktn links_name">Events</span>
       </a>
       <span className="tooltip">Events</span>
     </li>
     <li>
       <a href="gallery">
         <i className='bx bxs-camera' ></i>
         <span id="btn5" className=" links_name">About Us</span>
       </a>
       <span className="tooltip">Gallery</span>
     </li>
     <li>
       <a href="community">
         <i className='bx bxs-info-circle' ></i>
         <span id="btn6" className=" links_name">Community</span>
       </a>
       <span className="tooltip">About</span>
     </li>
     <li>
       <a href="ca">
         <i className='bx bxs-user' ></i>
         <span id="btn7" className=" links_name">Campus Ambassador</span>
       </a>
       <span className="tooltip">Campus Ambassador</span>
     </li>
     {/* <li>
        <a href="#">
          <i className='bx bxs-log-in' ></i>
          <span className="links_name">Login</span>
        </a>
        <span className="tooltip">Login</span>
      </li> */}
     {/* <li className="profile">
         <div className="profile-details">
           
           <div className="name_job">
             <div className="name">User Name</div>
             <div className="job"></div>
           </div>
         </div>
         <i className='bx bx-log-out' id="log_out" ></i>
     </li> */}
    </ul>
  </div>
         </div>
        );
    }
}




// git commit "deploy my react app to github pages"