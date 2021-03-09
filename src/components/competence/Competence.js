import React, { Component } from 'react';

import './Competence.css';



class Competence extends Component {
    

    render(){
        return (
        <div className='competence'>
            <h1 >  Competences : </h1> 
            <div className='room'>
                <i class="fab fa-js-square"></i>
                <i class="fab fa-php"></i>
                <i class="fab fa-node-js"></i>
                <i class="fab fa-laravel"></i>
                <i class="fab fa-react"></i>
            </div>
        </div>
        )
    }
}
export default Competence;