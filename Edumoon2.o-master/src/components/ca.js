
import React , {Component} from 'react' ;
import About from './about';
import Car from './ca body';
import Carslider from './campus-homeslider';

import Gal from "./gal"




export default class Ca extends Component {
    render() {
        return (
            <div>
        
        <Carslider />
        {/* <About /> */}
      
        <Car />
        <Gal />
            </div>
             );
            }
        }