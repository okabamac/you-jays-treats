import React, { Component } from 'react';

class MediaQuery extends Component {
  constructor(props){
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      position: null
    };
    this.updateWidth = this.updateWidth.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
  }
  updateWidth(e){
    this.setState({
      windowWidth: window.innerWidth
    });
  }
  updatePosition(e) {
   const top = window.scrollY;
    this.setState({
      position: top
    });
  }
componentDidMount (){
    window.addEventListener('resize', this.updateWidth);
    window.addEventListener('scroll', this.updatePosition);
}
componentWillUnmount(){
    window.removeEventListener('resize', this.updateWidth);
    window.removeEventListener('scroll', this.updatePosition);
}
   render() {
     const {
       children
     } = this.props;
     return children({
       windowWidth: this.state.windowWidth,
       position: this.state.position,
     });

   }
}
export default MediaQuery;