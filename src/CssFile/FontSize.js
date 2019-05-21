import React from 'react';


function FontSize() {
    return (
        <div>
            jsx: 
            <br />
            {`style={{ FontSize: '20px' }}`}
            <br />
            css: 
            <br />
            {`font-size=20px;`}
            <br />
            <div style={{ fontSize: '15px', margin: '15px' }}>
            fontSize: '15px'
            </div>
            <div style={{ fontSize: '20px', margin: '15px' }}>
            fontSize: '20px'
            </div>
            <div style={{ fontSize: '1rem', margin: '15px' }}>
            fontSize: '1rem'
            </div>
            <div style={{ fontSize: '2em', margin: '15px' }}>
            fontSize: '2em'
            </div>
        </div>
    )
}

export default FontSize;
