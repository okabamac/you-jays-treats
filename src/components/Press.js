import React from 'react';
import MediaQuery from './MediaQuery';
import Footer from './Footer';
import kheigl from '../images/kheigl.jpg';
const Press = () => {
    return (
        <div>
         <MediaQuery>
        {({windowWidth}) =>
              
                   <div className='Container' style={{width: windowWidth>970 && '970px'}}>
                   <div className='content' style={{marginTop: windowWidth<698 && '-80px'}}>
    <div className='timeline-item' nameIs='Julia Roberts'>
    <img src={kheigl} className='pressImage' alt='people' />
    <p>lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof
        lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof
        lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof
        lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof
    </p>
    </div>
    <div className='timeline-item' nameIs='Kathryn Heigl'>
    <img src={kheigl} className='pressImage' alt='people' />
    <p>lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof
        lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof
        lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof
        lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof
    </p>
    </div>
    <div className='timeline-item' nameIs='Ann Hathaway'>
    <img src={kheigl} className='pressImage' alt='people' />
    <p>lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof
        lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof
        lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof
        lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof
    </p>
    </div>
    <div className='timeline-item' nameIs='Tina Fey'>
    <img src={kheigl} className='pressImage' alt='people' />
    <p>lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof
        lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof
        lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof
        lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof
    </p>
    </div>
    </div>
    

                    < Footer />
                   </div>
                   
        }
        </MediaQuery>
    </div>
    )
}

export default Press;