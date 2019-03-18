import React from 'react';
import MediaQuery from './MediaQuery';
import Slider from './Slider';
import Footer from './Footer';
const Gallery = () => (
      <div>
          <MediaQuery>
        {({windowWidth}) =>
              
                   <div className='Container' style={{width: windowWidth>970 && '970px', marginTop: windowWidth<698 && '-80px'}}>
                   <Slider />
                   <Footer />
                   </div>
                   
        }
        </MediaQuery>
      </div>
    )
export default Gallery;