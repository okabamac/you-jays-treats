import React from 'react';
import MediaQuery from './MediaQuery';
const ErrorPage = () => (
                 <MediaQuery>
        {({windowWidth}) =>
                   <div className='Container' style={{width: windowWidth>970 && '970px'}}>
                   <h2>Uh oh! This page doesn't seem to exist</h2>
                   </div>
        }
        </MediaQuery>
)
export default ErrorPage;