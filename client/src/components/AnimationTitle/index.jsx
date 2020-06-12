import React, { Component } from 'react';

export class AnimationTitle extends Component {
  constructor() {
    super();
    this.state = {
      title: ''
    }
  }

  componentDidMount() {
    this.timerID = setTimeout(() => setInterval(this.animationTitle(), 1000), 1000)
  }

  // componentWillUnmount() {
    
  // }

  animationTitle = () => {
    setTimeout(() => setInterval(animation, 1000), 1000)
    const letterArr = ['E','X','I','M','Y','U','Q','M','P'];
    const titleLength = document.getElementsByClassName('title').length;
    const animation = () =>{
      for (let i=0; i< titleLength; i++) {
        document.getElementsByClassName('title').innerText = letterArr[Math.floor(Math.random() * titleLength)]
        document.getElementsByClassName('title').innerText= letterArr[Math.floor(Math.random() * titleLength)]
        document.getElementsByClassName('title').innerText = letterArr[Math.floor(Math.random() * titleLength)]
        document.getElementsByClassName('title').innerText = letterArr[Math.floor(Math.random() * titleLength)]
        document.getElementsByClassName('title').innerText = letterArr[Math.floor(Math.random() * titleLength)]
        document.getElementsByClassName('title').innerText = letterArr[Math.floor(Math.random() * titleLength)]
        document.getElementsByClassName('title').innerText = letterArr[Math.floor(Math.random() * titleLength)]
        i++
      }
    }
  }

  copyPasteFunction = () => {

  }
  
  render() {
    return (
      <h1 onLoad={this.copyPasteFunction}>
        <div className="title">E</div>
        <div className="title">x</div>
        <div className="title">i</div>
        <div className="title">m</div>
        <div className="title">i</div>
        <div className="title">u</div>
        <div className="title">s</div>
      </h1>
    );
  }
}

export default AnimationTitle;
