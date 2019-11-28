import { scaleRotate as Menu } from 'react-burger-menu'
import React from 'react'
import './menubar.css'

class Menubar extends React.Component {
  render() {
    return (
    <div id="outer-container">
      <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
      <main id="page-wrap">
        { this.props.children ? this.props.children : "Loading..."}  
      </main>
    </div>
    )
  }
}

export default Menubar;