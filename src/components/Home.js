import React from 'react';
import MediaQuery from './MediaQuery';
import Footer from './Footer';
import cherish from '../images/cherish.jpg';
import pablo1 from '../images/pablo(1).jpg';
import pablo2 from '../images/pablo(2).jpg';
import pablo3 from '../images/pablo(3).jpg';
import pablo4 from '../images/pablo(4).jpg';
import pablo5 from '../images/pablo(5).jpg';
import pablo6 from '../images/pablo(6).jpg';
import landscape from '../images/landscape.jpg';
import ninecakes from '../images/ninecakes.png';
import caramel from '../images/caramel.jpg';

const Home = () => (
            <div>
                 <MediaQuery>
        {({windowWidth}) =>
                   <div className='Container' style={{width: windowWidth>970 && '970px'}}>
            <div className='title' style={{marginTop: windowWidth<698 && '-100px'}}>
            <h2>Bee's Treats</h2>
            <p>We speak standard</p>
            <hr className="hr" />
            </div>
            <div className="wrapper">
    <div className="box item1">
    <div className="box a"><img src={cherish} alt='Cake' /></div>
    <div className="box b"><img src={pablo4} alt='Cake' /></div>
    <div className="box c"><img src={pablo5} alt='Cake' /></div>
    <div className="box d"><img src={pablo6} alt='Cake' /></div>
    </div>
    <div className='box item2 e'> <img src={pablo1} alt='Cake' /></div>
    <div className="box item3 f"><img src={pablo2} alt='Cake' /></div>
    <div className="item4">
    <div className="box g"><img src={pablo3} alt='Cake' /></div>
    <div className="box h"><img src={landscape} alt='Cake' /></div>
    <div className="box i"><img src={caramel} alt='Cake' /></div>
    <div className="box j"><img src={ninecakes} alt='Cake' /></div>
    </div>
</div>

<div className='about' style={{gridTemplateColumns: windowWidth <=970 && '1fr', padding: windowWidth<=600 && '1.4rem'}}>
< div className = 'vl'
style = {
    {
        borderBottom: windowWidth <= 970 && '2px solid #664840',
        borderRight: windowWidth <= 970 && 'none', padding: windowWidth <= 698 && '2em 1em 0 1em'
    }
} >
<h3>About Us</h3>
<p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
    </p>
    </div>
<div>
    <h3>We Deliver</h3>
    <div className='services'>
     <span>
            <i className="material-icons">
                flip_to_front
            </i>
            </span>
           < span className = "drop-cap" >
                Wedding publishing software like Aldus PageMaker including versions of Lorem Ipsum
         </span>
    </div>
    <div className='services'>
     <span>
            <i className="material-icons">
                flip_to_front
            </i>
            </span>
            < span className = "drop-cap" >
                Birthday publishing software like Aldus PageMaker including versions of Lorem Ipsum
         </span>
    </div>
    <div className='services'>
     <span>
            <i className="material-icons">
                flip_to_front
            </i>
            </span>
            < span className ="drop-cap">
                Anniversary publishing software like Aldus PageMaker including versions of Lorem Ipsum
         </span>
    </div>
    <div className='services'>
     <span>
            <i className="material-icons">
                flip_to_front
            </i>
            </span>
            < span className = "drop-cap" >
                Cupcakes publishing software like Aldus PageMaker including versions of Lorem Ipsum
         </span>
    </div>
</div>
</div>
<Footer />
            </div>
                  
        }
        </MediaQuery>
             </div>
        )
export default Home;
