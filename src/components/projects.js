import React, { Component } from 'react';
import {Tabs,Tab, Grid, Cell,Card ,CardText,CardTitle,CardMenu,CardActions,Button,IconButton} from 'react-mdl';

class Project extends Component{
  constructor(props) {
    super(props)
    this.state = { activeTab:0 };
}
toggleCategories(){
if(this.state.activeTab===0){
  return (
    <div className="projects-grid" >
      {/*Project #1*/}
      <Card shadow={0} style={{width: '340px', margin: 'auto'}}>
     <CardTitle style={{color: '#fff', height: '176px', background:'url(https://upload.wikimedia.org/wikipedia/commons/c/c1/PHP_Logo.png) center / cover'}}>
        PHP Project #1</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Git Hub</Button>
        <Button colored>Code Pen</Button>
        <Button colored>Live Demo</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
 {/*Project #2*/}
 <Card shadow={0} style={{width: '340px', margin: 'auto'}}>
     <CardTitle style={{color: '#fff', height: '176px', background:'url(https://upload.wikimedia.org/wikipedia/commons/c/c1/PHP_Logo.png) center / cover'}}>
        PHP Project #2</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Git Hub</Button>
        <Button colored>Code Pen</Button>
        <Button colored>Live Demo</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
{/*Project #3*/}
<Card shadow={0} style={{width: '340px', margin: 'auto'}}>
     <CardTitle style={{color: '#fff', height: '176px', background:'url(https://upload.wikimedia.org/wikipedia/commons/c/c1/PHP_Logo.png) center / cover'}}>
        PHP Project #3</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Git Hub</Button>
        <Button colored>Code Pen</Button>
        <Button colored>Live Demo</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
</div>
  )
}else if(this.state.activeTab===1){
  return (
    <div className="projects-grid" >
      {/*Project #1*/}
      <Card shadow={0} style={{width: '340px', margin: 'auto'}}>
     <CardTitle style={{color: '#fff', height: '176px', background:'url(https://reactjs.org/logo-og.png) center / cover'}}>
        React Project #1</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Git Hub</Button>
        <Button colored>Code Pen</Button>
        <Button colored>Live Demo</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
 {/*Project #2*/}
 <Card shadow={0} style={{width: '340px', margin: 'auto'}}>
     <CardTitle style={{color: '#fff', height: '176px', background:'url(https://reactjs.org/logo-og.png) center / cover'}}>
     React Project #2</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Git Hub</Button>
        <Button colored>Code Pen</Button>
        <Button colored>Live Demo</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
{/*Project #3*/}
<Card shadow={0} style={{width: '340px', margin: 'auto'}}>
     <CardTitle style={{color: '#fff', height: '176px', background:'url(https://reactjs.org/logo-og.png) center / cover'}}>
     React Project #3</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Git Hub</Button>
        <Button colored>Code Pen</Button>
        <Button colored>Live Demo</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
</div>
  )
}else if(this.state.activeTab===2){
  return (
    <div className="projects-grid" >
      {/*Project #1*/}
      <Card shadow={0} style={{width: '340px', margin: 'auto'}}>
     <CardTitle style={{color: '#fff', height: '176px', background:'url(https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png) center / cover'}}>
        BootStrap Project #1</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Git Hub</Button>
        <Button colored>Code Pen</Button>
        <Button colored>Live Demo</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
 {/*Project #2*/}
 <Card shadow={0} style={{width: '340px', margin: 'auto'}}>
     <CardTitle style={{color: '#fff', height: '176px', background:'url(https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png) center / cover'}}>
     BootStrap Project #2</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Git Hub</Button>
        <Button colored>Code Pen</Button>
        <Button colored>Live Demo</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
{/*Project #3*/}
<Card shadow={0} style={{width: '340px', margin: 'auto'}}>
     <CardTitle style={{color: '#fff', height: '176px', background:'url(https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png) center / cover'}}>
     BootStrap Project #3</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Git Hub</Button>
        <Button colored>Code Pen</Button>
        <Button colored>Live Demo</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
</div>
  )
}else{
  return (
    <div className="projects-grid" >
      {/*Project #1*/}
      <Card shadow={0} style={{width: '340px', margin: 'auto'}}>
     <CardTitle style={{color: '#fff', height: '176px', background:'url(https://www.bleepstatic.com/images/news/u/986406/Logos/MongoDB.jpg) center / cover'}}>
        MongoDB Project #1</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Git Hub</Button>
        <Button colored>Code Pen</Button>
        <Button colored>Live Demo</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
 {/*Project #2*/}
 <Card shadow={0} style={{width: '340px', margin: 'auto'}}>
     <CardTitle style={{color: '#fff', height: '176px', background:'url(https://www.bleepstatic.com/images/news/u/986406/Logos/MongoDB.jpg) center / cover'}}>
     MongoDB Project #2</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Git Hub</Button>
        <Button colored>Code Pen</Button>
        <Button colored>Live Demo</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
{/*Project #3*/}
<Card shadow={0} style={{width: '340px', margin: 'auto'}}>
     <CardTitle style={{color: '#fff', height: '176px', background:'url(https://www.bleepstatic.com/images/news/u/986406/Logos/MongoDB.jpg) center / cover'}}>
     MongoDB Project #3</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Git Hub</Button>
        <Button colored>Code Pen</Button>
        <Button colored>Live Demo</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
</div>
  )
}
}
    render(){
        return (
          <div className="category-tabs">
          <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
              <Tab>PHP</Tab>
              <Tab>ReactJs</Tab>
              <Tab>BootStrap</Tab>
              <Tab>MongoDB</Tab>
          </Tabs>
          <section>
             
                <Grid>
                  <Cell col={12}>
                  <div className="content">
                    {this.toggleCategories()}
                  </div>
                  </Cell>
                  
                </Grid>
                
                
                
            

          </section>
      </div>     
        )
    }
}

export default Project;