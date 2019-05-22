import React from 'react';


function FontWeight() {
    return (
        <div>
            jsx: 
            <br />
            {`style={{ fontWeight: '20px' }}`}
            <br />
            css: 
            <br />
            {`font-weight: 20px;`}
            <br />
            <p style={{ fontWeight: '100', margin: '15px' }}>
            fontWeight: '100'
            </p>
            <div style={{ fontWeight: '200', margin: '15px' }}>
            fontWeight: '100'
            </div>
            <div style={{ fontWeight: 'bold', margin: '15px' }}>
            fontWeight: 'bold'
            </div>
            <div style={{ fontWeight: '600', margin: '15px' }}>
            fontWeight: '600'
            </div>
        </div>
    )
}

export default FontWeight;
