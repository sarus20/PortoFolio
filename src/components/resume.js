import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
class Resume extends Component{
    render(){
        return (
          <div>
              <Grid>
                <Cell col={4}>
                  <div style ={{ textAlign:'center' }}>
                  <img src="https://i.ya-webdesign.com/images/female-avatar-png-5.png" 
                  alt="Avatar" className="avatar-img" style={{height:"200px"}}/></div>
                  <h2 style ={{ paddingTop:'2em' }}>Sarumathi Ramasamy</h2>
                  <h4 style ={{ color:'grey' }}>Developer</h4>
                  <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
                  <p>IT Professional looking for a challenging position to establish my skills 
                    and grow with the company by adapting to new technologies. </p>
                  <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
                  <h5>Email Address</h5>
                  <p>sarus20@gmail.com</p>
                  <h5>Phone</h5>
                  <p>+65-91686402</p>
                  <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
                </Cell>
                <Cell className="resume-left-col" col={8}>
                  <h2>Education</h2>
                  <Education
                  startYear ={ 2004 }
                  endYear ={2006}
                  collegeName="AnnaMalai University"
                  collegeDescription =" Master of Engineering in Computer Science: 2004-2006 Annamalai
                   University - First Class with Distinction  "
                  />
                  <Education
                  startYear ={ 2000 }
                  endYear ={2004}
                  collegeName="Sethu Institute of Technology"
                  collegeDescription ="Bachelor of Engineering in Information Technology 2000-2004  
                  Sethu Institute of Technology - First Class with Distinction"
                  
                  />
                   <hr style={{borderTop:'3px solid #e22947'}}/>
                   <Experience
                   startYear ={ 2018 }
                   endYear ="till now"
                   jobName="INSEAD, System Analyst"
                   jobDescription ="Developing a new application using Laravel and React.js. 
                    Supporting and maintaining existing applications (Migration from PHP 5.6 to 7.4) 
                    Auto deployment using Jenkins and AWS  Mentoring new interns by helping them to set up the environment and transferring the required knowledge to work on the applications. 
                    Expert in HTML5/CSS3 development and have experience React.js, Node.js, Responsive design "
                   
                   
                   />
                   <Experience
                   startYear = "April-2018"
                   endYear = "Sep-2018 "
                   jobName="Metro Parking, Programmer"
                   jobDescription ="Developed, tested, and maintained current systems written in PHP and Code Igniter.
                   Responsible for installing, configuring and maintaining Code igniter, PHP, Apache, and MySQL on cPanel.  "
                    />
                    <Experience
                   startYear = {2017}
                   endYear = {2018 }
                   jobName="Star Quest Technologies, Software Engineer"
                   jobDescription ="Developed, tested, and maintained current systems written in PHP and Code Igniter.
                   Responsible for installing, configuring and maintaining Code igniter, PHP, Apache, and MySQL on cPanel.  "
               
                   />

                   <h2>Skills</h2>
                   <Skills
                   skill ="Javascript"
                   progress={90}
                   />
                   <Skills
                   skill ="HTML5/CSS3"
                   progress={80}
                   />
                   <Skills
                   skill ="ReactJS"
                   progress={50}
                   /><Skills
                   skill ="NodeJs"
                   progress={70}
                   />
                   <Skills
                   skill ="PHP"
                   progress={90}
                   />
                  </Cell>

              </Grid>

          </div> 
        )
    }
}

export default Resume;
