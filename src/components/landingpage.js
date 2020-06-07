import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl';
 
class Landing extends Component{
    render(){
        return (
          <div style ={{ width:'100%',margin:'auto' }}>
          <Grid className= 'landing-grid'>
            <Cell col={ 12 }>
             <img src="https://i.ya-webdesign.com/images/female-avatar-png-5.png" 
             alt="Avatar" className="avatar-img"/>
             <div className ="banner-text">
                 <h1>Full Stack Web Developer</h1>
                 <hr/>
                 <p>HTML/CSS | Bootstrap | Javascript | ReactJs | NodeJs | Express | MongoDB | PHP  </p>
                 <div className="social-links">
                   {/*Linkedln*/}
                   <a href="https://www.linkedin.com/in/saru-mathi-a98a0b32/" rel="noopener noreferrer" target="_blank">
                   <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                   </a>
                    {/*Github*/}
                    <a href="https://github.com/sarus20/" rel="noopener noreferrer" target="_blank">
                   <i className="fa fa-github-square" aria-hidden="true"></i>
                   </a>
                 </div>
             </div>
            </Cell>
          </Grid>

          </div> 
        )
    }
}

export default Landing;