import React, { Component } from 'react';

export class AnimationTitle extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      counter: 0
    };
  }

  componentDidMount() {
    if (this.state.counter < 10) {
      this.timerID = setTimeout(
        setInterval(() => this.animationTitle(), 500),
        3000
      );
    }
  }

  animationTitle = () => {
    const letterArr = [
      'E',
      'X',
      'I',
      'M',
      'S',
      'S',
      'S',
      'U',
      'E',
      'X',
      'I',
      'M',
      'I',
      'U',
      'E',
      'X',
      'I',
      'M',
      'U',
      'E',
      'X',
      'I',
      'M',
      'U'
    ];
    const title = 'EXIMIUS';
    let randomTitle = '';
    let tempCounter = this.state.counter;
    for (let i = 0; i < title.length; i++) {
      randomTitle += letterArr[Math.floor(Math.random() * letterArr.length)];
      tempCounter++;
    }
    if (tempCounter < 50) {
      this.setState({
        title: randomTitle,
        counter: tempCounter
      });
    } else {
      this.setState({
        title: 'EXIMIUS'
      });
    }
  };

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return <h1>{this.state.title}</h1>;
  }
}

export default AnimationTitle;
