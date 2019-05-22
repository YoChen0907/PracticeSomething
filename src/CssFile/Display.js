import React from 'react';


function Display() {
    return (
        <div>
            jsx: 
            <br />
            {`style={{ display: 'none' }}`}
            <br />
            css: 
            <br />
            {`display: none;`}
            <br />
            <div style={{ display: 'inline', margin: '20px', border: '1px solid black' }}>
                display = inline
            </div>
            <div style={{ display: 'inline-block', margin: '20px', border: '1px solid black' }}>
                display = inline-block
            </div>
            <div style={{ display: 'block', margin: '20px', border: '1px solid black' }} >
                display = block
            </div>
            <div style={{ display: 'flex', margin: '20px', border: '1px solid black', justifyContent: 'space-around', alignItems: 'center', height: '40px' }}>
                <span>display: 'flex'</span>
                <span>justifyContent: 'space-round'</span>
                <span>alignItems: 'center'</span>
            </div>
            <div style={{ display: 'flex', margin: '20px', border: '1px solid black', justifyContent: 'center', alignItems: 'normal', height: '40px' }}>
                <span>display: 'flex'</span>
                <span>justifyContent: 'normal'</span>
                <span>alignItems: 'center'</span>
            </div>
            <div style={{ display: 'flex', margin: '20px', border: '1px solid black', justifyContent: 'space-between', alignItems: 'flex-end', height: '40px' }}>
                <span>display: 'flex'</span>
                <span>justifyContent: 'space-between'</span>
                <span>alignItems: 'flex-end'</span>
            </div>
            <div style={{ display: 'flex', margin: '20px', border: '1px solid black', justifyContent: 'space-evenly', alignItems: 'center', height: '40px' }}>
                <span>display: 'flex'</span>
                <span>justifyContent: 'space-evenly'</span>
                <span>alignItems: 'center'</span>
            </div>
        </div>
    )
}

export default Display;
