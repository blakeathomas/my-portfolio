import React, { Component } from "react";
import {Grid, Cell} from "react-mdl"
class landingpage extends Component {
  render() {
    return (
      <div style= {{width:'100%', margin:'auto'}}>
      <Grid className="landing-grid">
      <Cell col={12}>
      <img src="https://aboullaite.me/content/images/2016/11/myAvatar.svg"
      alt="avatar"
      className="avatar-image"
      />
      <div className="banner-text">
        <h1>Full Stack Dev.</h1>
        <hr/>
        <p>HTML/CSS | ReactJS | Cyber Security</p>
      </div>
      </Cell>
      </Grid>  
      </div>
    );
  }
}

export default landingpage;
