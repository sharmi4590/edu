import React, { Component } from 'react'



export default class Video extends Component {


	componentDidMount () {
 
		let rope = document.querySelector("#rope");
		let closeBtnn = document.querySelector("#hope");

	  
		closeBtnn.addEventListener("click", ()=>{
			if (rope.style.display === 'none') {
				
				rope.style.display = 'block';
				closeBtnn.innerHTML="View Less";
			}

			else{
				rope.style.display = 'none';
				closeBtnn.innerHTML="View More";

			}
		});
	  
		// closeBtn.addEventListener("click", ()=>{
		// 	if (sidebar.style.display === 'none') {
		// 	  sidebar.classList.add("open");
		// 	  sidebar.style.display = 'block';
			  
			 
		//   } else {
		   
		// 	  sidebar.style.display = 'none';
			  
		//   }
		// });




		let kope = document.querySelector("#kope");
		let closeBtnnn = document.querySelector("#lope");

	  
		closeBtnnn.addEventListener("click", ()=>{
			if (kope.style.display === 'none') {
				
				kope.style.display = 'block';
				closeBtnnn.innerHTML="View Less";
			}

			else{
				kope.style.display = 'none';
				closeBtnnn.innerHTML="View More";

			}
		});
	  
	
	}




    render() {
        return (
//          <div style={{marginTop:"50px"}}>



// <div className="container mt-4" >
//     <div className="row">

 
// 		 	<div className="col-md-4 pl-0 pr-0">
// 				<div className="card shadoww" style={{width: "22rem" , height: "10rem"}}>
// 		 	<div className="inner">                                                
// 						<img className="card-img-top " style={{height: "15rem"}} src="./images/dbms.jpeg" alt="Card image cap" />
// 				</div>
  
// 				  <div className="card-body text-center shadoww">
				  
// 				    <a href="dbms" className="btn btn-primary">watch videos</a>
// 				  </div>
// 					</div><br/><br/><br/><br/><br/><br/><br/><br/><br/>

// 				</div>

			
			 
// 		 	<div className="col-md-4 pl-0 pr-0">
// 				<div className="card shadoww" style={{width: "22rem" , height: "10rem"}}>
// 		 	<div className="inner">                                                 
// 						<img className="card-img-top " style={{height: "15rem"}} src="./images/sohana.jpeg" alt="Card image cap" />
// 				</div>
  
// 				  <div className="card-body text-center shadoww">
				 
// 				    <a href="https://youtube.com/playlist?list=PL3uv3qBos9qsfC1Kw_ExG-AW2xHfBotzu" className="btn btn-primary">watch videos</a>
// 				  </div>
// 					</div><br/><br/><br/><br/><br/><br/><br/><br/><br/>

// 				</div>

			
			 
// 		 	<div className="col-md-4 pl-0 pr-0">
// 				<div className="card shadoww" style={{width: "22rem" , height: "10rem"}}>
// 		 	<div className="inner">                                                 
// 						<img className="card-img-top " style={{height: "15rem"}} src="./images/samuel.png" alt="Card image cap" />
// 				</div>
  
// 				  <div className="card-body text-center shadoww">
				  
// 				    <a href="https://youtube.com/playlist?list=PL3uv3qBos9qv1imOTqM3HmzV6kFTssD1Q" className="btn btn-primary">watch videos</a>
// 				  </div>
// 					</div><br/><br/><br/><br/><br/><br/><br/><br/><br/>

// 				</div>

			
			 
// 		 	<div className="col-md-4 pl-0 pr-0">
// 				<div className="card shadoww" style={{width: "22rem" , height: "10rem"}}>
// 		 	<div className="inner">                                                  
// 						<img className="card-img-top " style={{height: "15rem"}} src="./images/anusha.png" alt="Card image cap" />
// 				</div>
  
// 				  <div className="card-body text-center shadoww">
				  
// 				    <a href="https://youtube.com/playlist?list=PL3uv3qBos9qsrQGkF7vqWdeWmLs5FP8Zh" className="btn btn-primary">watch videos</a>
// 				  </div>
// 					</div><br/><br/><br/><br/><br/><br/><br/><br/><br/>

// 				</div>

			
			 
// 		 	<div className="col-md-4 pl-0 pr-0">
// 				<div className="card shadoww" style={{width: "22rem" , height: "10rem"}}>
// 		 	<div className="inner">                                                 
// 						<img className="card-img-top " style={{height: "15rem"}} src="./images/sarat.png" alt="Card image cap" />
// 				</div>
  
// 				  <div className="card-body text-center shadoww">
				 
// 				    <a href="https://youtube.com/playlist?list=PL3uv3qBos9qv3y4r0hoDJu8BRrdkhQ8ah" className="btn btn-primary">watch videos</a>
// 				  </div>
// 					</div><br/><br/><br/><br/><br/><br/><br/><br/><br/>

// 				</div>

			
			 
// 		 	<div className="col-md-4 pl-0 pr-0">
// 				<div className="card shadoww" style={{width: "22rem" , height: "10rem"}}>
// 		 	<div className="inner">                                                 
// 						<img className="card-img-top " style={{height: "15rem"}} src="./images/deeptiilluri.png" alt="Card image cap" />
// 				</div>
  
// 				  <div className="card-body text-center shadoww">
				   
// 				    <a href="https://youtube.com/playlist?list=PL3uv3qBos9qvDs28KsLfjn40gnLJD3XtE" className="btn btn-primary">watch videos</a>
// 				  </div>
// 					</div><br/><br/><br/><br/><br/><br/><br/><br/><br/>

// 				</div>

			
			 
// 		 	<div className="col-md-4 pl-0 pr-0">
// 				<div className="card shadoww" style={{width: "22rem" , height: "10rem"}}>
// 		 	<div className="inner">                                                 
// 						<img className="card-img-top " style={{height: "15rem"}} src="./images/gowtham.png" alt="Card image cap " />
// 				</div>
  
// 				  <div className="card-body text-center shadoww">
				   
// 				    <a href="https://youtube.com/playlist?list=PL3uv3qBos9qtPMrTa6zq4Yma3pRCVB1XE" className="btn btn-primary">watch videos</a>
// 				  </div>
// 					</div><br/><br/><br/><br/><br/><br/><br/><br/><br/>

// 				</div>

			
			 
// 		 	<div className="col-md-4 pl-0 pr-0">
// 				<div className="card shadoww" style={{width: "22rem" , height: "10rem"}}>
// 		 	<div className="inner">                                                 
// 						<img className="card-img-top " style={{height: "15rem"}} src="./images/ammu.png" alt="Card image cap" />
// 				</div>
  
// 				  <div className="card-body text-center shadoww">
				  
// 				    <a href="https://youtube.com/playlist?list=PL3uv3qBos9qtRTsDq7B5QCMlk0KGXYHtB" className="btn btn-primary">watch videos</a>
// 				  </div>
// 					</div><br/><br/><br/><br/><br/><br/><br/><br/><br/>

// 				</div>

			
			 
// 		 	<div className="col-md-4 pl-0 pr-0">
// 				<div className="card shadoww" style={{width: "22rem" , height: "10rem"}}>
// 		 	<div className="inner">                                                 
// 						<img className="card-img-top " style={{height: "15rem"}} src="./images/nivedita.png" alt="Card image cap" />
// 				</div>
  
// 				  <div className="card-body text-center shadoww">
				  
// 				    <a href="https://youtube.com/playlist?list=PL3uv3qBos9qvzTY3JovrMqDdGsUgI6Iri" className="btn btn-primary">watch videos</a>
// 				  </div>
// 					</div><br/><br/><br/><br/><br/><br/><br/><br/><br/>

// 				</div>

			
			 
// 		 	<div className="col-md-4 pl-0 pr-0">
// 				<div className="card shadoww" style={{width: "22rem" , height: "10rem"}}>
// 		 	<div className="inner">                                                 
// 						<img className="card-img-top " style={{height: "15rem"}} src="./images/karthik.png" alt="Card image cap" />
// 				</div>
  
// 				  <div className="card-body text-center shadoww">
				  
// 				    <a href="https://youtube.com/playlist?list=PL3uv3qBos9qszI2S4VzN6Udpd_6EcDzT9" className="btn btn-primary">watch videos</a>
// 				  </div>
// 					</div><br/><br/><br/><br/><br/><br/><br/><br/><br/>

// 				</div>

			
			 
// 		 	<div className="col-md-4 pl-0 pr-0">
// 				<div className="card shadoww" style={{width: "22rem" , height: "10rem"}}>
// 		 	<div className="inner">                                                 
// 						<img className="card-img-top " style={{height: "15rem"}} src="./images/sowjanya.png" alt="Card image cap" />
// 				</div>
  
// 				  <div className="card-body text-center shadoww">
				  
// 				    <a href="https://youtube.com/playlist?list=PL3uv3qBos9qsv0g0P7bXPP9wTDlcKzyki" className="btn btn-primary">watch videos</a>
// 				  </div>
// 					</div><br/><br/><br/><br/><br/><br/><br/><br/><br/>

// 				</div>

			
			 
// 		 	<div className="col-md-4 pl-0 pr-0">
// 				<div className="card shadoww" style={{width: "22rem" , height: "10rem"}}>
// 		 	<div className="inner">                                                 
// 						<img className="card-img-top " style={{height: "15rem"}} src="./images/keerthana.png" alt="Card image cap" />
// 				</div>
  
// 				  <div className="card-body text-center shadoww">
				  
// 				    <a href="https://youtube.com/playlist?list=PL3uv3qBos9qsavMcOxWj_Hfa_gOsmbk58" className="btn btn-primary">watch videos</a>
// 				  </div>
// 					</div><br/><br/><br/><br/><br/><br/><br/><br/><br/>

// 				</div>

			
			 
// 		 	<div className="col-md-4 pl-0 pr-0">
// 				<div className="card shadoww" style={{width: "22rem" , height: "10rem"}}>
// 		 	<div className="inner">                                                 
// 						<img className="card-img-top " style={{height: "15rem"}} src="./images/renuka.png" alt="Card image cap" />
// 				</div>
  
// 				  <div className="card-body text-center shadoww">
				  
// 				    <a href="https://youtube.com/playlist?list=PL3uv3qBos9qt07eqQzkrLbnU_dmaBGcQp" className="btn btn-primary">watch videos</a>
// 				  </div>
// 					</div><br/><br/><br/><br/><br/><br/><br/><br/><br/>

// 				</div>

			
			 
// 		 	<div className="col-md-4 pl-0 pr-0">
// 				<div className="card shadoww" style={{width: "22rem" , height: "10rem"}}>
// 		 	<div className="inner">                                                 
// 						<img className="card-img-top " style={{height: "15rem"}} src="./images/divya.png" alt="Card image cap" />
// 				</div>
  
// 				  <div className="card-body text-center shadoww">
				  
// 				    <a href="https://youtube.com/playlist?list=PL3uv3qBos9qs1Mob6-C9eO99xr_XDK9IK" className="btn btn-primary">watch videos</a>
// 				  </div>
// 					</div><br/><br/><br/><br/><br/><br/><br/><br/><br/>

// 				</div>

			
			 
// 		 	<div className="col-md-4 pl-0 pr-0">
// 				<div className="card shadoww" style={{width: "22rem" , height: "10rem"}}>
// 		 	<div className="inner">                                                 
// 						<img className="card-img-top " style={{height: "15rem"}} src="./images/sikhi.png" alt="Card image cap" />
// 				</div>
  
// 				  <div className="card-body text-center shadoww">
				  
// 				    <a href="https://youtube.com/playlist?list=PL3uv3qBos9qutSDWkHGLcVtfIk8R_jgW0" className="btn btn-primary">watch videos</a>
// 				  </div>
// 					</div><br/><br/><br/><br/><br/><br/><br/><br/><br/>

// 				</div>

			
			 
// 		 	<div className="col-md-4 pl-0 pr-0">
// 				<div className="card shadoww" style={{width: "22rem" , height: "10rem"}}>
// 		 	<div className="inner">                                                 
// 						<img className="card-img-top " style={{height: "15rem"}} src="./images/srinitya.png" alt="Card image cap" />
// 				</div>
  
// 				  <div className="card-body text-center shadoww">
				 
// 				    <a href="https://youtube.com/playlist?list=PL3uv3qBos9quLniAzFo035T4FVTNKnHBQ" className="btn btn-primary">watch videos</a>
// 				  </div>
// 					</div><br/><br/><br/><br/><br/><br/><br/><br/><br/>

// 				</div>

			
			 
// 		 	<div className="col-md-4 pl-0 pr-0">
// 				<div className="card shadoww" style={{width: "22rem" , height: "10rem"}}>
// 		 	<div className="inner">                                                 
// 						<img className="card-img-top " style={{height: "15rem"}} src="./images/sushmita.png" alt="Card image cap" />
// 				</div>
  
// 				  <div className="card-body text-center shadoww">
				  
// 				    <a href="https://youtube.com/playlist?list=PL3uv3qBos9qvgKZotUAvoh5-F_WXeXS4g" className="btn btn-primary">watch videos</a>
// 				  </div>
// 					</div><br/><br/><br/><br/><br/><br/><br/><br/><br/>

// 				</div>

			
			 
// 		 	<div className="col-md-4 pl-0 pr-0">
// 				<div className="card shadoww" style={{width: "22rem" , height: "10rem"}}>
// 		 	<div className="inner">                                                 
// 						<img className="card-img-top " style={{height: "15rem"}} src="./images/vidyalakshmi.png" alt="Card image cap" />
// 				</div>
  
// 				  <div className="card-body text-center shadoww">
				  
// 				    <a href="https://youtube.com/playlist?list=PL3uv3qBos9qtkUI_QAPF7RplkVwIpdX-3" className="btn btn-primary">watch videos</a>
// 				  </div>
// 					</div><br/><br/><br/><br/><br/><br/><br/><br/><br/>

// 				</div>

			
			 
// 		 	<div className="col-md-4 pl-0 pr-0">
// 				<div className="card shadoww" style={{width: "22rem" , height: "10rem"}}>
// 		 	<div className="inner">                                                 
// 						<img className="card-img-top " style={{height: "15rem"}} src="./images/nazeera.png" alt="Card image cap" />
// 				</div>
  
// 				  <div className="card-body text-center shadoww">
				  
// 				    <a href="https://youtube.com/playlist?list=PL3uv3qBos9qvMb_vmfF2J-RKfmEdcvD2T" className="btn btn-primary">watch videos</a>
// 				  </div>
// 					</div><br/><br/><br/><br/><br/><br/><br/><br/><br/>

// 				</div>

			
			 
// 		 	<div className="col-md-4 pl-0 pr-0">
// 				<div className="card shadoww" style={{width: "22rem" , height: "10rem"}}>
// 		 	<div className="inner">                                                 
// 						<img className="card-img-top " style={{height: "15rem"}} src="./images/java.png" alt="Card image cap" />
// 				</div>
  
// 				  <div className="card-body text-center shadoww">
				
// 				    <a href="display_video_list.php?course_name=JAVA" className="btn btn-primary">watch videos</a>
// 				  </div>
// 					</div><br/><br/><br/><br/><br/><br/><br/><br/><br/>

// 				</div>

			
			 
// 		 	<div className="col-md-4 pl-0 pr-0">
// 				<div className="card shadoww" style={{width: "22rem" , height: "10rem"}}>
// 		 	<div className="inner">                                                 
// 						<img className="card-img-top " style={{height: "15rem"}} src="./images/pratyusha.png" alt="Card image cap" />
// 				</div>
  
// 				  <div className="card-body text-center shadoww">
				   
// 				    <a href="https://youtube.com/playlist?list=PL3uv3qBos9qsNU73ab0y0IshbF55-Uu4Y" className="btn btn-primary">watch videos</a>
// 				  </div>
// 					</div><br/><br/><br/><br/><br/><br/><br/><br/><br/>

// 				</div>

			
			 
// 		 	<div className="col-md-4 pl-0 pr-0">
// 				<div className="card shadoww" style={{width: "22rem" , height: "10rem"}}>
// 		 	<div className="inner">                                                 
// 						<img className="card-img-top " style={{height: "15rem"}} src="./images/divya1.png" alt="Card image cap" />
// 				</div>
  
// 				  <div className="card-body text-center shadoww">
				  
// 				    <a href="https://youtube.com/playlist?list=PL3uv3qBos9qsJW1wzCxjMTnpMRasEQFGC" className="btn btn-primary">watch videos</a>
// 				  </div>
// 					</div><br/><br/><br/><br/><br/><br/><br/><br/><br/>

// 				</div>

			
			 
// 		 	<div className="col-md-4 pl-0 pr-0">
// 				<div className="card shadoww" style={{width: "22rem" , height: "10rem"}}>
// 		 	<div className="inner">                                                 
// 						<img className="card-img-top " style={{height: "15rem"}} src="./images/geetika.png" alt="Card image cap" />
// 				</div>
  
// 				  <div className="card-body text-center shadoww">
				   
// 				    <a href="https://youtube.com/playlist?list=PL3uv3qBos9qtP4KbDN1-LU7mK6w9oyz64" className="btn btn-primary">watch videos</a>
// 				  </div>
// 					</div><br/><br/><br/><br/><br/><br/><br/><br/><br/>

// 				</div>

			
			 
// 		 	<div className="col-md-4 pl-0 pr-0">
// 				<div className="card shadoww" style={{width: "22rem" , height: "10rem"}}>
// 		 	<div className="inner">                                                 
// 						<img className="card-img-top " style={{height: "15rem"}} src="./images/sravya.png" alt="Card image cap" />
// 				</div>
  
// 				  <div className="card-body text-center shadoww">
				 
// 				    <a href="https://youtube.com/playlist?list=PL3uv3qBos9qsxIPFffgDHsiWgx5ZN_PX0" className="btn btn-primary">watch videos</a>
// 				  </div>
// 					</div><br/><br/><br/><br/><br/><br/><br/><br/><br/>

// 				</div>

			
			 
// 		 	<div className="col-md-4 pl-0 pr-0">
// 				<div className="card shadoww" style={{width: "22rem" , height: "10rem"}}>
// 		 	<div className="inner">                                                 
// 						<img className="card-img-top " style={{height: "15rem"}} src="./images/gowthami.png" alt="Card image cap" />
// 				</div>
  
// 				  <div className="card-body text-center shadoww">
				 
// 				    <a href="https://youtube.com/playlist?list=PL3uv3qBos9qviWOtX-a0mreMjCU820LGE" className="btn btn-primary">watch videos</a>
// 				  </div>
// 					</div><br/><br/><br/><br/><br/><br/><br/><br/><br/>

// 				</div>

			
			 
// 		 	<div className="col-md-4 pl-0 pr-0">
// 				<div className="card shadoww" style={{width: "22rem" , height: "10rem"}}>
// 		 	<div className="inner">                                                 
// 						<img className="card-img-top " style={{height: "15rem"}} src="./images/riya.png" alt="Card image cap" />
// 				</div>
  
// 				  <div className="card-body text-center shadoww">
				 
// 				    <a href="https://youtube.com/playlist?list=PL3uv3qBos9quDd8gOLoA4Maa5FqikMtSj" className="btn btn-primary">watch videos</a>
// 				  </div>
// 					</div><br/><br/><br/><br/><br/><br/><br/><br/><br/>

// 				</div>

			
			     
			
// 		</div>
		

// 	</div>
//          </div>

<div>

<div>
<div className="carousel slide" data-bs-ride="carousel" id="carouselExampleIndicators">
        <div className="carousel-indicators">
          <button aria-label="Slide 1" className="active" data-bs-slide-to="0" data-bs-target="#carouselExampleIndicators" type="button"></button> <button aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#carouselExampleIndicators" type="button"></button> <button aria-label="Slide 3" data-bs-slide-to="2" data-bs-target="#carouselExampleIndicators" type="button"></button> {/* <button aria-label="Slide 4" data-bs-slide-to="3" data-bs-target="#carouselExampleIndicators" type="button"></button>*/}
        </div>
        <div className="carousel-inner">
          <div  className="carousel-item active">
            <a href="phy">
            <img    className="d-block w-100 " id="img1" src="./images/cl1.png" />
            <img  className="d-block w-100 " id="img2" src="./images/cm1.png" />
            </a>

        



            <div className="carousel-caption">
              {/* <h1 className="animated bounceInRight" style={{animationDelay: "1s" ,color:"black", fontSize: "49px"}}>Edumoon</h1>
              <p className="animated bounceInLeft " style={{animationDelay: "2s" ,color:"blue"}}><span>One stop solutions to students</span></p>
              <p className="animated bounceInRight" style={{animationDelay: "3s"}}><a href="#">Learn More</a></p> */}
            </div>
          </div>
          <div className="carousel-item">
           
            {/* <p alt="..." className="d-block w-100" style={{background: "rgb(7, 0, 122)",background: "linear-gradient( 210deg, rgba(7, 0, 122, 1) 2%, rgba(8, 8, 134, 1) 35%, rgba(0, 145, 175, 1) 100% )"}}></p> */}
          
              {/* <h1 className="animated bounceInRight kite" style={{animationDelay: "1s"}}> Crack EAMCET in 30 Days</h1> */}
              {/* <div className="text-white mt-md-3 animated bounceInLeft" style={{animationDelay: "2s",fontSize: "calc(100% + 1.1vw)"}}> Still in search of a better crash course for EAMCET? EduMoon is providing the 30-days EAMCET crash course at just Rs.1999/- and the course instructors are toppers from AU.
              </div>
             <p className="animated bounceInLeft d-none d-md-block" style={{animationDelay: "2s"}}></p>
              <p className="animated bounceInRight" style={{animationDelay:"3s"}}><a href="#">Learn More</a></p> */}
               <a >
            <img    className="d-block w-100 " id="img1" src="./images/cl2.png" />
            <img  className="d-block w-100 " id="img2" src="./images/cm2.png" />
            </a>
            </div>
         
       
          <div className="carousel-item">
            {/* <img alt="..." className="d-block w-100" src="./images/carousel4.jpg" />
            <div className="carousel-caption">
              <h1 className="animated bounceInRight" style={{animationDelay:"1s"}}></h1>
              <p className="animated bounceInLeft d-none d-md-block" style={{animationDelay: "2s"}}></p> */}

<a href="dbms">
            <img    className="d-block w-100 " id="img1" src="./images/cl3.png" />
            <img  className="d-block w-100 " id="img2" src="./images/cm3.png" />
            </a>
    
            {/* </div> */}
          </div>
               
          {/* <div className="carousel-item">
            <img  className="d-block w-100" src="./images/samuelSusan.jpeg" />
            <div className="carousel-caption">
              <h5 className="animated bounceInRight" style={{animationDelay: "1s"}}></h5>
              <p className="animated bounceInLeft d-none d-md-block" style={{animationDelay: "2s"}}></p>
              <p className="animated bounceInRight" style={{animationDelay: "3s"}}><a href="#">view More</a></p>
            </div>
          </div> */}
        </div><button className="carousel-control-prev" data-bs-slide="prev" data-bs-target="#carouselExampleIndicators" type="button"><span aria-hidden="true" className="carousel-control-prev-icon"></span> <span className="visually-hidden">Previous</span></button> <button className="carousel-control-next" data-bs-slide="next" data-bs-target="#carouselExampleIndicators" type="button"><span aria-hidden="true" className="carousel-control-next-icon"></span> <span className="visually-hidden">Next</span></button>
      </div>
         </div>


		 <div>
  <i><h1  style={{textAlign: "center" ,color: "black" ,margin:"0%" ,marginBottom: "20px",marginTop:"10px"}}>1St Year Courses</h1></i>
<h5>expert team teaches all the 1st year courses</h5>
                


 <div id="cards_landscape_wrap-2">
    <div className="container">
        <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="c">
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <img src="./images/i1.jfif" alt="" />
                            </div>
                            <div className="text-container">
                              <h6>C Programming</h6>
                                <p style={{marginBottom: "30px"}}>Niveditha</p>
                                {/* <p style={{marginBottom: "30px",fontStyle:"italic",fontFamily:"volkhov"}}>Database management systems are essential for businesses  they offer an efficient way of handling large amounts and multiple types of data. The ability to access data efficiently allows companies to make informed decisions quicker.</p> */}
                                {/* <b style={{float: "left",marginBottom: "10px"}}><i style={{color: "gold "}} className='fas fa-eye'></i>1,903 views</b>*/<b style={{width:"20px" ,marginBottom: "10px" ,color:"rgb(12, 195, 250)" , float: "center" ,marginRight: "10px"}}>Free</b> }
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="m1">
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <img src="./images/i2.jfif" alt="" />
                            </div>
                            <div className="text-container">                                    
                              <h6>
                                Mathematics-1
                              </h6>
                              <p style={{marginBottom: "30px"}}>Sikhi & Naidu</p>
                              {/* <p style={{marginBottom: "30px",fontStyle:"italic",fontFamily:"volkhov"}}>The major objective of automata theory is to develop methods by which computer scientists can describe and analyze the dynamic behavior of discrete systems, in which signals are sampled periodically and dynamically.</p> */}
                              {/* <b style={{float: "left" ,marginBottom: "10px"}}><i style={{color: "gold"}} className='fas fa-eye'></i>1,184 views</b>*/<b style={{width:"20px" ,marginBottom: "10px" ,color:"rgb(12, 195, 250)", float: "center" ,marginRight: "10px"}}>Free</b> }
                              </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="m2">
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <img src="./images/i3.jfif" alt="" />
                            </div>

                            <div className="text-container">
                              <h6>
							  Mathematics-2
                              </h6>
                              <p style={{marginBottom: "30px"}}>Sravya</p>
                              {/* <p style={{marginBottom: "30px",fontStyle:"italic",fontFamily:"volkhov"}}>Digital logic is fundamental in creating electronic devices. It is used to create circuits and logic gates, as well as to check computer chips and also number systems ,boolean algebra and combinational logic design circuit.</p> */}
                              {/* <b style={{float: "left" ,marginBottom: "10px"}}><i style={{color: "gold "}} className='fas fa-eye'></i>1,000 views</b>*/<b style={{width:"20px" ,marginBottom: "10px" ,color:"rgb(12, 195, 250)", float: "center" ,marginRight: "10px"}}>Free</b> }
                              </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="m3">
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <img src="./images/divya1.png" alt="" />
                            </div>
                            <div className="text-container">
                              <h6>
							  Mathematics-3
                              </h6>
                              <p style={{marginBottom: "30px"}}>Divya</p>
                              {/* <p style={{marginBottom: "30px",fontStyle:"italic",fontFamily:"volkhov"}}>C++ is one of the most widely-used programming languages in game development. It has been used to create: games, such as World of Warcraft,  game engines like Unreal Engine,and gaming consoles, including Xbox .</p> */}
                             <b style={{width:"20px" ,marginBottom: "10px" ,color:"rgb(12, 195, 250)", float: "center" ,marginRight: "10px"}}>Free</b>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>


 {/* hype */}

 <div id="rope" style={{display:"none"}}>
 
 
 <div id="cards_landscape_wrap-2">
    <div className="container">
        <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="che">
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <img src="./images/co1.jpg" alt="" />
                            </div>
                            <div className="text-container">
                              <h6>Chemistry</h6>
                                <p style={{marginBottom: "30px"}}>Tejesh</p>
                                {/* <p style={{marginBottom: "30px",fontStyle:"italic",fontFamily:"volkhov"}}>Database management systems are essential for businesses  they offer an efficient way of handling large amounts and multiple types of data. The ability to access data efficiently allows companies to make informed decisions quicker.</p> */}
                                {/* <b style={{float: "left",marginBottom: "10px"}}><i style={{color: "gold "}} className='fas fa-eye'></i>1,903 views</b>*/<b style={{width:"20px" ,marginBottom: "10px" ,color:"rgb(12, 195, 250)" , float: "center" ,marginRight: "10px"}}>Free</b> }
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            {/* <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="https://youtube.com/playlist?list=PL3uv3qBos9qv1imOTqM3HmzV6kFTssD1Q">
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <img src="./images/samuelSusann.jpeg" alt="" />
                            </div>
                            <div className="text-container">                                    
                              <h6>
                                Mathematics-1
                              </h6>
                              <p style={{marginBottom: "30px"}}>Tejesh</p>
                            <b style={{width:"20px" ,marginBottom: "10px" ,color:"rgb(12, 195, 250)", float: "center" ,marginRight: "10px"}}>Free</b> }
                              </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="https://youtube.com/playlist?list=PL3uv3qBos9qsfC1Kw_ExG-AW2xHfBotzu">
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <img src="./images/sohanaa.jpeg" alt="" />
                            </div>

                            <div className="text-container">
                              <h6>
							  Mathematics-2
                              </h6>
                              <p style={{marginBottom: "30px"}}>Sravya</p>
                            
                         <b style={{width:"20px" ,marginBottom: "10px" ,color:"rgb(12, 195, 250)", float: "center" ,marginRight: "10px"}}>Free</b> }
                              </div>
                        </div>
                    </div>
                </a>
            </div> */}
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="ed">
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <img src="./images/srinitya.png" alt="" />
                            </div>
                            <div className="text-container">
                              <h6>
							  Engineering Drawing
                              </h6>
                              <p style={{marginBottom: "30px"}}>Sri Nitya</p>
                              {/* <p style={{marginBottom: "30px",fontStyle:"italic",fontFamily:"volkhov"}}>C++ is one of the most widely-used programming languages in game development. It has been used to create: games, such as World of Warcraft,  game engines like Unreal Engine,and gaming consoles, including Xbox .</p> */}
                             <b style={{width:"20px" ,marginBottom: "10px" ,color:"rgb(12, 195, 250)", float: "center" ,marginRight: "10px"}}>Free</b>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>



         </div>



{/* hype */}

<button id="hope" className="btn btn-primary" style={{margin:"auto" ,marginTop: "10px",display: "block" , borderRadius: "14px" ,backgroundColor: " #14bdee" ,padding: "10px" ,color: "white" ,fontWeight: "800" ,marginTop:"20px"}}>View More</button>
         </div>


{/* cse */}
<i><h1  style={{textAlign: "center" ,color: "black" ,margin:"0%" ,marginBottom: "20px",marginTop:"10px"}}>CSE & IT  Courses</h1></i>


<div id="cards_landscape_wrap-2">
    <div className="container">
        <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="dbms">
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <img src="./images/vidyaLakshmii.jpeg" alt="" />
                            </div>
                            <div className="text-container">
                              <h6>Database Management system</h6>
                                <p style={{marginBottom: "30px"}}>vidya Lakshmi</p>
                                {/* <p style={{marginBottom: "30px",fontStyle:"italic",fontFamily:"volkhov"}}>Database management systems are essential for businesses  they offer an efficient way of handling large amounts and multiple types of data. The ability to access data efficiently allows companies to make informed decisions quicker.</p> */}
                                {/* <b style={{float: "left",marginBottom: "10px"}}><i style={{color: "gold "}} className='fas fa-eye'></i>1,903 views</b>*/<b style={{width:"20px" ,marginBottom: "10px" ,color:"rgb(12, 195, 250)" , float: "center" ,marginRight: "10px"}}>Free</b> }
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="dld">
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <img src="./images/sohanaa.jpeg" alt="" />
                            </div>
                            <div className="text-container">                                    
                              <h6>
                                Digital Logic Design
                              </h6>
                              <p style={{marginBottom: "43px"}}>Sohana domathoty</p>
                              {/* <p style={{marginBottom: "30px",fontStyle:"italic",fontFamily:"volkhov"}}>The major objective of automata theory is to develop methods by which computer scientists can describe and analyze the dynamic behavior of discrete systems, in which signals are sampled periodically and dynamically.</p> */}
                              {/* <b style={{float: "left" ,marginBottom: "10px"}}><i style={{color: "gold"}} className='fas fa-eye'></i>1,184 views</b>*/<b style={{width:"20px" ,marginBottom: "10px" ,color:"rgb(12, 195, 250)", float: "center" ,marginRight: "10px"}}>Free</b> }
                              </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="flat">
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <img src="./images/samuelSusann.jpeg" alt="" />
                            </div>

                            <div className="text-container">
                              <h6>
							  Formal Language & Automata theory
                              </h6>
                              <p style={{marginBottom: "30px"}}>Samuel Susan</p>
                              {/* <p style={{marginBottom: "30px",fontStyle:"italic",fontFamily:"volkhov"}}>Digital logic is fundamental in creating electronic devices. It is used to create circuits and logic gates, as well as to check computer chips and also number systems ,boolean algebra and combinational logic design circuit.</p> */}
                              {/* <b style={{float: "left" ,marginBottom: "10px"}}><i style={{color: "gold "}} className='fas fa-eye'></i>1,000 views</b>*/<b style={{width:"20px" ,marginBottom: "10px" ,color:"rgb(12, 195, 250)", float: "center" ,marginRight: "10px"}}>Free</b> }
                              </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="dms">
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <img src="./images/riya.png" alt="" />
                            </div>
                            <div className="text-container">
                              <h6>
							 Discrete Mathematics
                              </h6>
                              <p style={{marginBottom: "43px"}}>Riya</p>
                              {/* <p style={{marginBottom: "30px",fontStyle:"italic",fontFamily:"volkhov"}}>C++ is one of the most widely-used programming languages in game development. It has been used to create: games, such as World of Warcraft,  game engines like Unreal Engine,and gaming consoles, including Xbox .</p> */}
                             <b style={{width:"20px" ,marginBottom: "10px" ,color:"rgb(12, 195, 250)", float: "center" ,marginRight: "10px"}}>Free</b>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>


<div id="kope" style={{display:"none"}}>




<div id="cards_landscape_wrap-2">
    <div className="container">
        <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="daa">
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <img src="./images/co2.jpg" alt="" />
                            </div>
                            <div className="text-container">
                              <h6>Design Analysis And Algo</h6>
                                <p style={{marginBottom: "30px"}}>Samuel Sushan</p>
                                {/* <p style={{marginBottom: "30px",fontStyle:"italic",fontFamily:"volkhov"}}>Database management systems are essential for businesses  they offer an efficient way of handling large amounts and multiple types of data. The ability to access data efficiently allows companies to make informed decisions quicker.</p> */}
                                {/* <b style={{float: "left",marginBottom: "10px"}}><i style={{color: "gold "}} className='fas fa-eye'></i>1,903 views</b>*/<b style={{width:"20px" ,marginBottom: "10px" ,color:"rgb(12, 195, 250)" , float: "center" ,marginRight: "10px"}}>Free</b> }
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="oop">
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <img src="./images/karthik.png" alt="" />
                            </div>
                            <div className="text-container">                                    
                              <h6>
                              Object Oriented Programming
                              </h6>
                              <p style={{marginBottom: "43px"}}>Karun Karthik</p>
                              {/* <p style={{marginBottom: "30px",fontStyle:"italic",fontFamily:"volkhov"}}>The major objective of automata theory is to develop methods by which computer scientists can describe and analyze the dynamic behavior of discrete systems, in which signals are sampled periodically and dynamically.</p> */}
                              {/* <b style={{float: "left" ,marginBottom: "10px"}}><i style={{color: "gold"}} className='fas fa-eye'></i>1,184 views</b>*/<b style={{width:"20px" ,marginBottom: "10px" ,color:"rgb(12, 195, 250)", float: "center" ,marginRight: "10px"}}>Free</b> }
                              </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="oos">
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <img src="./images/Pratyusha.png" alt="" />
                            </div>

                            <div className="text-container">
                              <h6>
							  Object Oriented Software
                              </h6>
                              <p style={{marginBottom: "30px"}}>Pratyusha </p>
                              {/* <p style={{marginBottom: "30px",fontStyle:"italic",fontFamily:"volkhov"}}>Digital logic is fundamental in creating electronic devices. It is used to create circuits and logic gates, as well as to check computer chips and also number systems ,boolean algebra and combinational logic design circuit.</p> */}
                              {/* <b style={{float: "left" ,marginBottom: "10px"}}><i style={{color: "gold "}} className='fas fa-eye'></i>1,000 views</b>*/<b style={{width:"20px" ,marginBottom: "10px" ,color:"rgb(12, 195, 250)", float: "center" ,marginRight: "10px"}}>Free</b> }
                              </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="co">
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <img src="./images/Geetika.png" alt="" />
                            </div>
                            <div className="text-container">
                              <h6>
							Computer Organisation
                              </h6>
                              <p style={{marginBottom: "43px"}}>Geethika</p>
                              {/* <p style={{marginBottom: "30px",fontStyle:"italic",fontFamily:"volkhov"}}>C++ is one of the most widely-used programming languages in game development. It has been used to create: games, such as World of Warcraft,  game engines like Unreal Engine,and gaming consoles, including Xbox .</p> */}
                             <b style={{width:"20px" ,marginBottom: "10px" ,color:"rgb(12, 195, 250)", float: "center" ,marginRight: "10px"}}>Free</b>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>



<div id="cards_landscape_wrap-2">
    <div className="container">
        <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="wt">
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <img src="./images/web.jfif" alt="" />
                            </div>
                            <div className="text-container">
                              <h6>Web Technoligies </h6>
                                <p style={{marginBottom: "30px"}}>Divya</p>
                                {/* <p style={{marginBottom: "30px",fontStyle:"italic",fontFamily:"volkhov"}}>Database management systems are essential for businesses  they offer an efficient way of handling large amounts and multiple types of data. The ability to access data efficiently allows companies to make informed decisions quicker.</p> */}
                                {/* <b style={{float: "left",marginBottom: "10px"}}><i style={{color: "gold "}} className='fas fa-eye'></i>1,903 views</b>*/<b style={{width:"20px" ,marginBottom: "10px" ,color:"rgb(12, 195, 250)" , float: "center" ,marginRight: "10px"}}>Free</b> }
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="cn">
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <img src="./images/cn.jfif" alt="" />
                            </div>
                            <div className="text-container">                                    
                              <h6>
                               Computer Networks
                              </h6>
                              <p style={{marginBottom: "43px"}}>keerthana</p>
                              {/* <p style={{marginBottom: "30px",fontStyle:"italic",fontFamily:"volkhov"}}>The major objective of automata theory is to develop methods by which computer scientists can describe and analyze the dynamic behavior of discrete systems, in which signals are sampled periodically and dynamically.</p> */}
                              {/* <b style={{float: "left" ,marginBottom: "10px"}}><i style={{color: "gold"}} className='fas fa-eye'></i>1,184 views</b>*/<b style={{width:"20px" ,marginBottom: "10px" ,color:"rgb(12, 195, 250)", float: "center" ,marginRight: "10px"}}>Free</b> }
                              </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="cse">
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <img src="./images/anusha.png" alt="" />
                            </div>

                            <div className="text-container">
                              <h6>
							  Cyber Security
                              </h6>
                              <p style={{marginBottom: "30px"}}>Mary Ratna</p>
                              {/* <p style={{marginBottom: "30px",fontStyle:"italic",fontFamily:"volkhov"}}>Digital logic is fundamental in creating electronic devices. It is used to create circuits and logic gates, as well as to check computer chips and also number systems ,boolean algebra and combinational logic design circuit.</p> */}
                              {/* <b style={{float: "left" ,marginBottom: "10px"}}><i style={{color: "gold "}} className='fas fa-eye'></i>1,000 views</b>*/<b style={{width:"20px" ,marginBottom: "10px" ,color:"rgb(12, 195, 250)", float: "center" ,marginRight: "10px"}}>Free</b> }
                              </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="bda">
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <img src="./images/sowjanya.png" alt="" />
                            </div>
                            <div className="text-container">
                              <h6>
						Big Data Analytics
                              </h6>
                              <p style={{marginBottom: "43px"}}>Sowjanya</p>
                              {/* <p style={{marginBottom: "30px",fontStyle:"italic",fontFamily:"volkhov"}}>C++ is one of the most widely-used programming languages in game development. It has been used to create: games, such as World of Warcraft,  game engines like Unreal Engine,and gaming consoles, including Xbox .</p> */}
                             <b style={{width:"20px" ,marginBottom: "10px" ,color:"rgb(12, 195, 250)", float: "center" ,marginRight: "10px"}}>Free</b>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>



<div id="cards_landscape_wrap-2">
    <div className="container">
        <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="dw">
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <img src="./images/gowthami.png" alt="" />
                            </div>
                            <div className="text-container">
                              <h6>Data warehouse</h6>
                                <p style={{marginBottom: "30px"}}>Gowthami</p>
                                {/* <p style={{marginBottom: "30px",fontStyle:"italic",fontFamily:"volkhov"}}>Database management systems are essential for businesses  they offer an efficient way of handling large amounts and multiple types of data. The ability to access data efficiently allows companies to make informed decisions quicker.</p> */}
                                {/* <b style={{float: "left",marginBottom: "10px"}}><i style={{color: "gold "}} className='fas fa-eye'></i>1,903 views</b>*/<b style={{width:"20px" ,marginBottom: "10px" ,color:"rgb(12, 195, 250)" , float: "center" ,marginRight: "10px"}}>Free</b> }
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            {/* <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="https://youtube.com/playlist?list=PL3uv3qBos9qv1imOTqM3HmzV6kFTssD1Q">
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <img src="./images/samuelSusann.jpeg" alt="" />
                            </div>
                            <div className="text-container">                                    
                              <h6>
                                Mathematics-1
                              </h6>
                              <p style={{marginBottom: "30px"}}>Tejesh</p>
                            <b style={{width:"20px" ,marginBottom: "10px" ,color:"rgb(12, 195, 250)", float: "center" ,marginRight: "10px"}}>Free</b> }
                              </div>
                        </div>
                    </div>
                </a>
            </div>*/}
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="ds">
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <img src="./images/co5.jpg" alt="" />
                            </div>

                            <div className="text-container">
                              <h6>
							  Data Structures
                              </h6>
                              <p style={{marginBottom: "30px"}}>Sravya</p>
                            
                         <b style={{width:"20px" ,marginBottom: "10px" ,color:"rgb(12, 195, 250)", float: "center" ,marginRight: "10px"}}>Free</b> 
                              </div>
                        </div>
                    </div>
                </a>
            </div> 

            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="es">
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <img src="./images/ammu.png" alt="" />
                            </div>
                            <div className="text-container">
                              <h6>
							  Embedded System
                              </h6>
                              <p style={{marginBottom: "30px"}}>Abhisheik</p>
                              {/* <p style={{marginBottom: "30px",fontStyle:"italic",fontFamily:"volkhov"}}>C++ is one of the most widely-used programming languages in game development. It has been used to create: games, such as World of Warcraft,  game engines like Unreal Engine,and gaming consoles, including Xbox .</p> */}
                             <b style={{width:"20px" ,marginBottom: "10px" ,color:"rgb(12, 195, 250)", float: "center" ,marginRight: "10px"}}>Free</b>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>






</div>







<button id="lope" className="btn btn-primary" style={{margin:"auto" ,marginTop: "10px",display: "block" , borderRadius: "14px" ,backgroundColor: " #14bdee" ,padding: "10px" ,color: "white" ,fontWeight: "800" ,marginTop:"20px"}}>View More</button>
{/* cse */}




<i><h1  style={{textAlign: "center" ,color: "black" ,margin:"0%" ,marginBottom: "20px",marginTop:"10px"}}>Programming Languages</h1></i>






<div id="cards_landscape_wrap-2">
    <div className="container">
        <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="phy">
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <img src="./images/nazeera.png" alt="" />
                            </div>
                            <div className="text-container">
                              <h6>phython</h6>
                                <p style={{marginBottom: "30px"}}>Nazeera</p>
                                {/* <p style={{marginBottom: "30px",fontStyle:"italic",fontFamily:"volkhov"}}>Database management systems are essential for businesses  they offer an efficient way of handling large amounts and multiple types of data. The ability to access data efficiently allows companies to make informed decisions quicker.</p> */}
                                {/* <b style={{float: "left",marginBottom: "10px"}}><i style={{color: "gold "}} className='fas fa-eye'></i>1,903 views</b>*/<b style={{width:"20px" ,marginBottom: "10px" ,color:"rgb(12, 195, 250)" , float: "center" ,marginRight: "10px"}}>Free</b> }
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="js">
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <img src="./images/vidyalakshmi.png" alt="" />
                            </div>
                            <div className="text-container">                                    
                              <h6>
                                Java Script
                              </h6>
                              <p style={{marginBottom: "30px"}}>Vidya Lakshmi</p>
                              {/* <p style={{marginBottom: "30px",fontStyle:"italic",fontFamily:"volkhov"}}>The major objective of automata theory is to develop methods by which computer scientists can describe and analyze the dynamic behavior of discrete systems, in which signals are sampled periodically and dynamically.</p> */}
                              {/* <b style={{float: "left" ,marginBottom: "10px"}}><i style={{color: "gold"}} className='fas fa-eye'></i>1,184 views</b>*/<b style={{width:"20px" ,marginBottom: "10px" ,color:"rgb(12, 195, 250)", float: "center" ,marginRight: "10px"}}>Free</b> }
                              </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="java">
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <img src="./images/co4.jpg" alt="" />
                            </div>

                            <div className="text-container">
                              <h6>
							  Java
                              </h6>
                              <p style={{marginBottom: "30px"}}>keerthana</p>
                              {/* <p style={{marginBottom: "30px",fontStyle:"italic",fontFamily:"volkhov"}}>Digital logic is fundamental in creating electronic devices. It is used to create circuits and logic gates, as well as to check computer chips and also number systems ,boolean algebra and combinational logic design circuit.</p> */}
                              {/* <b style={{float: "left" ,marginBottom: "10px"}}><i style={{color: "gold "}} className='fas fa-eye'></i>1,000 views</b>*/<b style={{width:"20px" ,marginBottom: "10px" ,color:"rgb(12, 195, 250)", float: "center" ,marginRight: "10px"}}>Free</b> }
                              </div>
                        </div>
                    </div>
                </a>
            </div>
            {/* <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="https://youtube.com/playlist?list=PL3uv3qBos9qszI2S4VzN6Udpd_6EcDzT9">
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <img src="./images/karthikk.jpg" alt="" />
                            </div>
                            <div className="text-container">
                              <h6>
							  Mathematics-3
                              </h6>
                              <p style={{marginBottom: "30px"}}>Divya</p>
                           
                             <b style={{width:"20px" ,marginBottom: "10px" ,color:"rgb(12, 195, 250)", float: "center" ,marginRight: "10px"}}>Free</b>
                            </div>
                        </div>
                    </div>
                </a>
            </div> */}
        </div>
    </div>
</div>












<i><h1  style={{textAlign: "center" ,color: "black" ,margin:"0%" ,marginBottom: "20px",marginTop:"10px"}}>ECE</h1></i>






<div id="cards_landscape_wrap-2">
    <div className="container">
        <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="st">
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <img src="./images/sushmita.png" alt="" />
                            </div>
                            <div className="text-container">
                              <h6>Switching theory</h6>
                                <p style={{marginBottom: "30px"}}>Sushma</p>
                                {/* <p style={{marginBottom: "30px",fontStyle:"italic",fontFamily:"volkhov"}}>Database management systems are essential for businesses  they offer an efficient way of handling large amounts and multiple types of data. The ability to access data efficiently allows companies to make informed decisions quicker.</p> */}
                                {/* <b style={{float: "left",marginBottom: "10px"}}><i style={{color: "gold "}} className='fas fa-eye'></i>1,903 views</b>*/<b style={{width:"20px" ,marginBottom: "10px" ,color:"rgb(12, 195, 250)" , float: "center" ,marginRight: "10px"}}>Free</b> }
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="ss">
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <img src="./images/co3.jpg" alt="" />
                            </div>
                            <div className="text-container">                                    
                              <h6>
                                Signals and Systems
                              </h6>
                              <p style={{marginBottom: "30px"}}>Sirisha</p>
                              {/* <p style={{marginBottom: "30px",fontStyle:"italic",fontFamily:"volkhov"}}>The major objective of automata theory is to develop methods by which computer scientists can describe and analyze the dynamic behavior of discrete systems, in which signals are sampled periodically and dynamically.</p> */}
                              {/* <b style={{float: "left" ,marginBottom: "10px"}}><i style={{color: "gold"}} className='fas fa-eye'></i>1,184 views</b>*/<b style={{width:"20px" ,marginBottom: "10px" ,color:"rgb(12, 195, 250)", float: "center" ,marginRight: "10px"}}>Free</b> }
                              </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="cs">
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <img src="./images/gowtham.png" alt="" />
                            </div>

                            <div className="text-container">
                              <h6>
							  Control Systems
                              </h6>
                              <p style={{marginBottom: "30px"}}>Gautam</p>
                              {/* <p style={{marginBottom: "30px",fontStyle:"italic",fontFamily:"volkhov"}}>Digital logic is fundamental in creating electronic devices. It is used to create circuits and logic gates, as well as to check computer chips and also number systems ,boolean algebra and combinational logic design circuit.</p> */}
                              {/* <b style={{float: "left" ,marginBottom: "10px"}}><i style={{color: "gold "}} className='fas fa-eye'></i>1,000 views</b>*/<b style={{width:"20px" ,marginBottom: "10px" ,color:"rgb(12, 195, 250)", float: "center" ,marginRight: "10px"}}>Free</b> }
                              </div>
                        </div>
                    </div>
                </a>
            </div>
             <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="ac">
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <img src="./images/ac.jfif" alt="" />
                            </div>
                            <div className="text-container">
                              <h6>
							  Analog Communications 
                              </h6>
                              <p style={{marginBottom: "30px"}}>Deepthi</p>
                           
                             <b style={{width:"20px" ,marginBottom: "10px" ,color:"rgb(12, 195, 250)", float: "center" ,marginRight: "10px"}}>Free</b>
                            </div>
                        </div>
                    </div>
                </a>
            </div> 
        </div>
    </div>
</div>







<i><h1  style={{textAlign: "center" ,color: "black" ,margin:"0%" ,marginBottom: "20px",marginTop:"10px"}}>EEE</h1></i>






<div id="cards_landscape_wrap-2" >
    <div className="container">
        <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="ee">
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <img src="./images/renu.jfif" alt="" />
                            </div>
                            <div className="text-container">
                              <h6>Elements Of Electrical</h6>
                                <p style={{marginBottom: "30px"}}>Renuka</p>
                                {/* <p style={{marginBottom: "30px",fontStyle:"italic",fontFamily:"volkhov"}}>Database management systems are essential for businesses  they offer an efficient way of handling large amounts and multiple types of data. The ability to access data efficiently allows companies to make informed decisions quicker.</p> */}
                                {/* <b style={{float: "left",marginBottom: "10px"}}><i style={{color: "gold "}} className='fas fa-eye'></i>1,903 views</b>*/<b style={{width:"20px" ,marginBottom: "10px" ,color:"rgb(12, 195, 250)" , float: "center" ,marginRight: "10px"}}>Free</b> }
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            {/* <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="https://youtube.com/playlist?list=PL3uv3qBos9qv1imOTqM3HmzV6kFTssD1Q">
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <img src="./images/samuelSusann.jpeg" alt="" />
                            </div>
                            <div className="text-container">                                    
                              <h6>
                                Mathematics-1
                              </h6>
                              <p style={{marginBottom: "30px"}}>Sikhi & Naidu</p>
                             <b style={{width:"20px" ,marginBottom: "10px" ,color:"rgb(12, 195, 250)", float: "center" ,marginRight: "10px"}}>Free</b> }
                              </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="https://youtube.com/playlist?list=PL3uv3qBos9qsfC1Kw_ExG-AW2xHfBotzu">
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <img src="./images/sohanaa.jpeg" alt="" />
                            </div>

                            <div className="text-container">
                              <h6>
							  Mathematics-2
                              </h6>
                              <p style={{marginBottom: "30px"}}>Sravya</p>
                            <b style={{width:"20px" ,marginBottom: "10px" ,color:"rgb(12, 195, 250)", float: "center" ,marginRight: "10px"}}>Free</b> }
                              </div>
                        </div>
                    </div>
                </a>
            </div> */}
            {/* <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="https://youtube.com/playlist?list=PL3uv3qBos9qszI2S4VzN6Udpd_6EcDzT9">
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <img src="./images/karthikk.jpg" alt="" />
                            </div>
                            <div className="text-container">
                              <h6>
							  Mathematics-3
                              </h6>
                              <p style={{marginBottom: "30px"}}>Divya</p>
                           
                             <b style={{width:"20px" ,marginBottom: "10px" ,color:"rgb(12, 195, 250)", float: "center" ,marginRight: "10px"}}>Free</b>
                            </div>
                        </div>
                    </div>
                </a>
            </div> */}
        </div>
    </div>
</div>


</div>

           
        );
    }
}
