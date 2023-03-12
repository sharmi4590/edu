
import React , {Component} from 'react' ;
import Navbar from './navbar';
import  Header from './header';
import  Homeslider from './homeslider';
import Patners from './patners';
import  Latestevents from './latestevents';
import  Popularcourses from './popularcourses';
import  Testimonial from './testimonial';
import  Grid from './grid';
import  Footer from './footer';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
 import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
import uuid from 'uuid';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Server from './server';





export default class Home extends Component {
    render() {
        return (
            <div>
        <Homeslider />
        <Patners />
        <Server />
        <Latestevents />
        {<ImageSlider slides={SliderData} /> }
        <Popularcourses />
        <Testimonial />
        {/* <Grid /> */}
            </div>
             );
            }
        }