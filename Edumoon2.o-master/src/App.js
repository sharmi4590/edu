import React , {Component} from 'react' ;
import Navbar from './components/navbar';
import  Header from './components/header';
  import  Homeslider from './components/homeslider';
 import Patners from './components/patners';
 import  Latestevents from './components/latestevents';
 import  Popularcourses from './components/popularcourses';
 import  Testimonial from './components/testimonial';
 import  Grid from './components/grid';
 import  Footer from './components/footer';
 //import 'bootstrap/dist/css/bootstrap.min.css';
 import './components/style.css';
  import './components/about.css';
  import ImageSlider from './components/ImageSlider';
 import { SliderData } from './components/SliderData';
 import uuid from 'uuid';
import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Home from './components/home';
 import Ca from './components/ca';
 import Gallery from './components/gallery';
 import Blog from './components/blog';
 import Events from './components/events';
 import Server from './components/server';
 import Courses from './components/courses';
 import Resources from './components/resources';
import About from './components/about';
 import Tutions from './components/tutions';
 import Materials from './components/materials';
 import Video from './components/video';
 import Community from './components/community';
import Dbms from './components/dbms';
import C from './components/c';
import M1 from './components/m1';
import Che from './components/che';
import Ed from './components/ed';
import Dld from './components/dld';
import Flat from './components/flat';
import Dms from './components/dms';
import Daa from './components/daa';
import Oop from './components/oop';
import Oos from './components/oos';
import Co from './components/co';
import Wt from './components/wt';
import Cn from './components/cn';
import Cse from './components/cse';
import Bda from './components/bda';
import Es from './components/es';
import Dw from './components/dw';
import Phy from './components/phy';
import Js from './components/js';
import Java from './components/java';
import St from './components/st';
import Ss from './components/ss';
import Cs from './components/cs';
import Ac from './components/ac';
import Ee from './components/ee';
import M2 from './components/m2';
import M3 from './components/m3';
import Ds from './components/ds';
 import Work from './components/work';
 import Web from './components/web';
 import Ses from './components/ses';




class App extends Component{

    render(){


        return(
        <div style={{overflowX:"hidden"}}>
        <Navbar />
        <Header />
        <BrowserRouter>
      <Routes>
       
   
      {/* <Route path="blog" element={<Blog />} />
      <Route  path="events" element={<Events />} /> */}
           <Route exact path="home" element={<Home />} />
           <Route exact path="courses" element={<Courses />} />
           <Route exact path="resources" element={<Resources />} />
           <Route exact path="blog" element={<Blog />} />
           <Route exact path="events" element={<Events />} />
           <Route exact path="tutions" element={<Tutions />} />
           <Route exact path="gallery" element={<Gallery />} />
           <Route exact path="materials" element={<Materials />} />
           <Route exact path="ca" element={<Ca />} />
           <Route exact path="video" element={<Video />} />
           <Route exact path="community" element={<Community />} />
           <Route exact path="dbms" element={<Dbms />} />
           <Route exact path="c" element={<C />} />
           <Route exact path="m1" element={<M1 />} />
           <Route exact path="m2" element={<M2 />} />
           <Route exact path="m3" element={<M3 />} />
           <Route exact path="che" element={<Che />} />
           <Route exact path="ed" element={<Ed />} />
           <Route exact path="dld" element={<Dld />} />
           <Route exact path="flat" element={<Flat />} />
           <Route exact path="dms" element={<Dms />} />
           <Route exact path="daa" element={<Daa />} />
           <Route exact path="oop" element={<Oop />} />
           <Route exact path="oos" element={<Oos />} />
           <Route exact path="co" element={<Co />} />
           <Route exact path="wt" element={<Wt />} />
           <Route exact path="cn" element={<Cn />} />
           <Route exact path="cse" element={<Cse />} />
           <Route exact path="bda" element={<Bda />} />
           <Route exact path="dw" element={<Dw />} />
           <Route exact path="es" element={<Es />} />
           <Route exact path="phy" element={<Phy />} />
           <Route exact path="js" element={<Js />} />
           <Route exact path="java" element={<Java />} />
           <Route exact path="st" element={<St />} />
           <Route exact path="ss" element={<Ss />} />
           <Route exact path="cs" element={<Cs />} />
           <Route exact path="ac" element={<Ac />} />
           <Route exact path="ee" element={<Ee />} />
             <Route exact path="work" element={<Work />} />
              <Route exact path="web" element={<Web />} />
               <Route exact path="ses" element={<Ses />} />
                <Route exact path="ds" element={<Ds />} />
                
         
       
      </Routes>
    </BrowserRouter>
 



       <Footer />
           
             </div>
       
               
        );
    }

}


export default App;