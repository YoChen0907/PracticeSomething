import React from 'react';

import catJpg from './cat.png';

function BackgroundImage() {
    return (
        <div>
            jsx: 
            <br />
            {`style={{ backgroundImage: url(${catJpg}) }}`}
            <br />
            css: 
            <br />
            {`background-image: url(catJpg);`}
            <br />
            <div style={{ backgroundImage: `url(${catJpg})`, height: '200px', backgroundSize: 'contain' }} />
        </div>
    )
}

export default BackgroundImage;
