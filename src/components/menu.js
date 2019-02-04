
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
    const currentActive = document.getElementsByClassName(activeClass);
    if ( currentActive.length > 0 ){
      currentActive[0].classList.remove(activeClass);
    }
    element.currentTarget.classList.add(activeClass);
  }
  render() {
    let {items} = this.state;
    if(items.length <= 0) return null;
    return (
      <nav>
        <span>
          {items.cities.map( item => ( <a href="#" key={item.section} onClick={this.setActiveItem}>{item.label}</a>) )}
        </span>
      </nav>
    );
  }

}
export default Menu;