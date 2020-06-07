import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl';

class Aboutme extends Component{
    render(){
        return (
          <div >
             <Grid>

               <Cell col={4}>
               <div style ={{ textAlign:'center' }}>
                  <img src="https://i.ya-webdesign.com/images/female-avatar-png-5.png" 
                  alt="Avatar" className="avatar-img" style={{height:"200px"}}/></div>
              </Cell>
               <Cell className="about-me" col={8}>
               <p> 
               5 yrs. of experience in developing applications /testing and establishing my problem solving and analytical skills.
               5 yrs. of IT training experience in programming languages like PHP, JavaScript, Java, C, C++ and web tools like HTML5,CSS3. </p>
              <p>I do this for a living and love what I do as every day there is something new and exciting to learn.In my spare time, the web development community is a big part of my life. Whether teaching code to kids at a local school, managing online programming groups and blogs or attending a conference, I find keeping involved helps me stay up to date.
              This is also my chance to give back to the community that helped me get started, a place I am proud to be part of.
              Besides programming I love spending time with friends and family and can often be found together going out catching the latest movie, staying in playing games on the sofa or planning a trip to someplace I've never been before.</p> 
              <p>I graduated from a Annamalai university  and got a first class degree with honours. While I was at university I worked many web design projects along with my friends that helped me to further hone in my skills as a developer. 
              My job involves doing what I love, Developing new websites/applications and teaching new technologies.
              I spend a lot of time learning new techniques and actively help other people learn web development through a variety of help groups and writing web development tutorials for my website and blog about advancements in web design and development.</p>
              </Cell>
             </Grid>
             </div> 
        )
    }
}

export default Aboutme;