import React from 'react'
import MediaQuery from './MediaQuery';
import Toggle from './Toggle';
import header from '../images/header.svg';
import logo from '../images/logo.jpg';
import {
  NavLink
} from 'react-router-dom';
const Hero = () => {
const style = {
  borderBottom: '3px solid #0EB3CE',
  borderTop: '3px solid #0EB3CE'
};
return (
        <MediaQuery>
        {({windowWidth, position}) =>
              <div>
                      <Toggle>
                        {({on, toggle}) => (
                        <div>
                          <header>
                        <div style={{width: windowWidth>970 && '970px', height: 'inherit', position: 'relative', margin: 'auto'}}>
                         <img src={logo} className='logo' alt='logo' style={{display: windowWidth<=970 && 'none'}}/>
                        <p style={{paddingLeft: windowWidth<970 && '1em',}}>Bee's Treats</p>
                        <div onClick={toggle} className={'hamburger-icon '+ (on && 'close')} id={'' + (windowWidth >970 && 'hide')}>
                        <div className='btn-line line-1'></div>
                        <div className='btn-line line-2'></div>
                        <div className='btn-line line-3'></div>
                        </div>
                  </div>
              </header>
              <div className='Navigation'>
                   <nav style={{width: windowWidth>970 && '970px', height: windowWidth>970 && '100px'}}>
            <ul  className={' ' + (windowWidth >970? 'horizontal '+(position>30 && 'show-horizontal') : 'vertical')} id={''+(on && 'open')}>
            <li onClick={toggle}><NavLink exact to={process.env.PUBLIC_URL + '/'} activeStyle={style}>Home</NavLink></li >
            <li onClick={toggle}><NavLink exact to={process.env.PUBLIC_URL + '/gallery'} activeStyle={style}>Gallery</NavLink></li>
            <li onClick={toggle}><NavLink exact to={process.env.PUBLIC_URL + '/press'} activeStyle={style}>Press</NavLink></li>
            <li onClick={toggle}><NavLink exact to={process.env.PUBLIC_URL + '/contact'} activeStyle={style}>Contact</NavLink></li>
         </ul>
       </nav>
       </div>
              <div className='header-image' style={{top: windowWidth <= 698 && '57px' }}>
                <img src={header} alt='Dripping chocolate' className='chocolate' style={{ width: windowWidth <= 970 && '120vw', top: windowWidth <= 970 && '-15%' }} />
              </div> 
      </div>
                      )} 
                        </Toggle>                  
                  </div>
          }
        </MediaQuery>
)}
export default Hero;
