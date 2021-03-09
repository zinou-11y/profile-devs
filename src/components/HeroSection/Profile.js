import React, { Component } from 'react';
import './Profile.css';



class Profile extends Component {
    

    render(){
        return (
        
            <div className="containera">
                        <div className="card1" >
                            <img src="images/me2.png" className="img-thumbnail rounded-circle " alt="..." width="250" height="250"/>
                        </div>
                            <div className="card2" >
                                <h1 className="">Amariche zineddine</h1>
                                    <h2>  | CertifiedBy ESBootcamp <i class="fas fa-check-circle"></i></h2> 
                                        <li className="list-group px-3 ">
                                            <ul>
                                                <li>   MY NAME IS ZINEDDINE AMARICHE IM JUNIOR FULL STUCK DEVELOPER, I LERNED PROGRAMMING AT UNIVERSTY
                                                    , I GRATUATED IN 2016 WITH LICENSE IN COMPUTER SCIENCE. </li>
                                            </ul>
                                        </li>
                                
                            </div>

                    <div className="card3" >
                    <h4 className="title2">Infromation personnelle</h4>
                            <ul>                                    
                                <ul >
                                    <li>  Marié </li>
                                </ul>
                                <ul >
                                    <li>  Dar elbeida ,alger Algerie </li>
                                </ul>
                                <ul >
                                    <li>  esbootcamp@gami </li>
                                </ul>
                                <ul >
                                    <li>  0770-00-00-12</li>
                                </ul>
                            </ul>
                    </div>
                    <div className='icon'>
                    <i class="fab fa-facebook-square"></i>
                    <i class="fab fa-instagram-square"></i>
                    <i class="fab fa-twitter-square"></i>
                    <i class="fab fa-linkedin"></i>
                    <i class="fab fa-whatsapp-square"></i>

                    </div>
            </div>
        
        )
    }
}
export default Profile;