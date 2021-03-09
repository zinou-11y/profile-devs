import React, { Component } from 'react';
import { Button } from '../Button';
import './Softskills.css';



class Softskills extends Component {
    

    render(){
        return (
        
        <>
        <h1 className='title'>  Soft skills :</h1>
            <div className='skill'>
                <div className='skila1'>
                        <h1>
                            <i class="fas fa-comments">
                                </i>Communication
                        </h1>
                                <p>
                                    Lorem ipsum doloraccon sect etur adipisicing 
                                    elit. m doloru Lorem ipsum dolor sit consect 
                                    adipisicing elit.CulorumLorem ipsum dolor sit 
                                    conse adipis ic ing elit. Cum dolorum
                                </p>
                                    <div className='star1'>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    <Button>Rate</Button>
                                    </div>
                </div>
            
        

        <div className='skila2'>
            <div><h1><i class="fas fa-hand-holding-medical"></i>Solutions</h1>
            <p>
            Lorem ipsum doloraccon sect etur adipisicing 
            elit. m doloru Lorem ipsum dolor sit consect 
            adipisicing elit.CulorumLorem ipsum dolor sit 
            conse adipis ic ing elit. Cum dolorum
            </p>
            <div className='star2'>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <Button>Rate</Button>
            </div>
            </div>

        </div>

        <div className='skila3'>
            <div><h1><i class="fas fa-eye"></i>Show ineciative</h1>
            <p>
            Lorem ipsum doloraccon sect etur adipisicing 
            elit. m doloru Lorem ipsum dolor sit consect 
            adipisicing elit.CulorumLorem ipsum dolor sit 
            conse adipis ic ing elit. Cum dolorum
            </p>
            <div className='star3'>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <Button>Rate</Button>
            </div>
            </div>
        </div>

        </div>
        </>
        )
    }
}
export default Softskills;