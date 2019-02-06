
import React, { Component } from 'react';

import './menu.css'
import data from '../data/menu.js'

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }
  
  fetchData = () => {
    this.setState({items : data});
  }
  setActiveItem = (element) => {
    const activeClass = 'active';
    if (element.currentTarget.classList.contains(activeClass)) {
      return;
    }
    const currentActiveList = document.getElementsByClassName(activeClass);
    if ( currentActiveList.length > 0 ){
      currentActiveList[0].classList.remove(activeClass);
    }
    element.currentTarget.classList.add(activeClass);
    this.goTo(element, currentActiveList[0]);
  }
  goTo = (element, currentActive) => {

    // const currentAnimationX = currentActive.getBoundingClientRect().left|| 0;
    // const currentAnimationWidth = currentActive.offsetWidth || 0;
    const newAnimationX = element.currentTarget.getBoundingClientRect().left;
    const newAnimationWidth = element.currentTarget.offsetWidth;

    
    document.getElementById('slider').style.width  = newAnimationWidth + 'px';
    document.getElementById('slider').style.transform = 'translateX(' + newAnimationX + 'px)';
     
    // document.getElementById('slider').animate([
    //   // keyframes
    //   { left: currentAnimationX + 'px', width: currentAnimationWidth + 'px' }, 
    //   { left: newAnimationX + 'px' , width: newAnimationWidth + 'px' }
    // ], { 
    //   duration: 1000
    // });
  }
  render() {
    let {items} = this.state;
    if(items.length <= 0) return null;
    return (
      <div>
        <nav>
          {items.cities.map( item => ( <a href="#" key={item.section} id={item.section} onClick={this.setActiveItem}>{item.label}</a>) )}
        </nav>
        <div id="navigationBar">
          <span id="slider"></span>
        </div>
      </div>
    );
  }

}
export default Menu;