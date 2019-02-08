
import React, { Component } from 'react';

import './menu.css'
import data from '../data/menu.js'

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [], 
      currentTime: null
    };
  }

  componentDidMount() {
    this.fetchData();
    window.addEventListener('resize', this.updateSlider);
  }
  
  updateSlider = () => {
    const currentActiveElement = document.getElementsByClassName('active')[0];
    this.goTo(currentActiveElement);
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateSlider);
  }
  
  componentWillMount = () => {
    this.updateSlider();
  }
  
  fetchData = () => {
    this.setState({items : data});
  }

  setActiveItem = (element) => {
    const activeClass = 'active';
    if (element.currentTarget.classList.contains(activeClass)) return null;

    const currentActiveList = document.getElementsByClassName(activeClass);
    if (currentActiveList.length > 0 ){
      currentActiveList[0].classList.remove(activeClass);
    }
    element.currentTarget.classList.add(activeClass);
    this.goTo(element.currentTarget);
    this.getCurrentTime(element);
  }

  goTo = (element) => {
    if(!element) return null;
    const newAnimationX = element.getBoundingClientRect().left;
    const newAnimationWidth = element.offsetWidth;
    const slider = document.getElementById('slider');
    
    slider.style.width  = newAnimationWidth + 'px';
    slider.style.transform = 'translateX(' + newAnimationX + 'px)';
  }

  getCurrentTime = () => {
    const currentActiveElement = document.getElementsByClassName('active')[0];
    if (!currentActiveElement) return null;
    
    const citiesTimezones = {
      'cupertino' : -8,
      'new-york-city' : -5,
      'london' : 0,
      'amsterdam' : 1,
      'tokyo' : 9,
      'hong-kong' : 8,
      'sydney' : 11
    };
    const offset = citiesTimezones[currentActiveElement.id];
    const date = new Date();
    const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
    const newDate = new Date(utc + (3600000 * offset));
    
    this.setState({currentTime: newDate.toLocaleTimeString()}); 
  }

  render() {
    const {items} = this.state;
    if(items.length <= 0) return null;
    return (
      <div>
        <nav>
          {items.cities.map( item => ( <a href="#" key={item.section} id={item.section} onClick={this.setActiveItem}>{item.label}</a>) )}
        </nav>
        <div id="navigationBar">
          <span id="slider"></span>
        </div>
        <div id="currentTime">
          <h3>{this.state.currentTime ? 'Current Time:': ''}</h3>
          {this.state.currentTime}
        </div>
      </div>
    );
  }

}
export default Menu;