import React, { Component } from 'react';
import { Grid, Cell,List,ListItem,ListItemContent } from 'react-mdl';


class Contact extends Component{
    render(){
        return (
          <div className="contact-body">
               <Grid className ="contact-grid">
                 <Cell col={6}>
                  <h2>Sarumathi Ramasamy</h2>
                  <img src="https://i.pinimg.com/564x/4b/5d/19/4b5d1954fbb5b6bad18f0ac25c4ab3c3.jpg" alt="Avatar" style={{ height:'250px' }}></img>
                  <p style={{ width:'75%',margin:'auto',paddingTop:'1em' }}>I am a highly-skilled PHP Developer with 5 years of experience
programming for a multitude of different digital projects.
I am very friendly and am an enthusiastic team player who enjoys
challenging projects. </p>
                 </Cell>
         
                 <Cell col={6}>
                 <h2>Contact Me</h2>
                  <hr/>
                  <div className="contact-list">
                    <List>
                      <ListItem>
                        <ListItemContent style={{ fontSize :'30px',fontFamily:'Anton' }}>
                        <i className="fa fa-phone-square" aria-hidden="true"></i>
                          (+65)-91686402</ListItemContent>
                      </ListItem>
                      <ListItem>
                        <ListItemContent style={{ fontSize :'30px',fontFamily:'Anton' }}>
                        <i className="fa fa-envelope-square" aria-hidden="true"></i>
                          sarus20@gmail.com</ListItemContent>
                      </ListItem>
                      <ListItem>
                        <ListItemContent style={{ fontSize :'30px',fontFamily:'Anton' }}>
                        <i className="fa fa-skype" aria-hidden="true"></i>
                          MySKypeId</ListItemContent>
                      </ListItem>
                    </List>
                    </div>
                 </Cell>
               </Grid>

          </div> 
        )
    }
}

export default Contact;