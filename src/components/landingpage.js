import React, { Component} from "react";
import {Grid, Cell} from "react-mdl";
// react-mdl
class Landing extends Component {
    render() {
        return(
            <div style={{width: "100%", margin: "auto"}}>
           <Grid className="landing-grid">
           <Cell col={12}>
               <img
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTypQUgssPXZrWN3Rgt4ohOfUq0qgfIR0dLYA&usqp=CAU"
               alt="profile "
               className="profile-image"
               />
               <div className="banner-text">
               <h1>Full Stack Web Developer</h1>
              
               <hr/>
              <p>HTML5/CSS3 | JavaScript | jQuery | Express.js | React.js| Node.js |</p>
               <div className="social-links">
                   <a href="https://www.linkedin.com/in/jacob-deines-1a82609b/" rel="noreferrer" target="_blank">
                       <i class="fa fa-linkedin-square"  aria-hidden="true"/>
                   </a>
                   <a href="https://github.com/JakeDeines" rel="noreferrer" target="_blank">
                       <i class="fa fa-github-square"  aria-hidden="true"/>
                   </a>
                   
                   <a href="https://github.com/JakeDeines/Resume/blob/main/Resume%20Data.pdf" rel="noreferrer" target="_blank">
                       <i class="fa fa-file"  aria-hidden="true"/>
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