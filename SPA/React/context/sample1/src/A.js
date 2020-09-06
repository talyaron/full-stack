import React,{useContext} from 'react';
import {shekerContext} from './App';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';



function A(match) {
    
    return (
        <div>
            <shekerContext.Consumer>
               {
                   (sheker)=>{
                       console.dir()
                       return (
                           <div>{sheker.name}</div>
                       )
                   }
               }         
            </shekerContext.Consumer>
        </div>
    )
}
export default A;