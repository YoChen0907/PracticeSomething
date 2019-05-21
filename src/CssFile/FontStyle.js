import React from 'react';


function FontStyle() {
    return (
        <div>
            jsx: 
            <br />
            {`style={{ FontStyle: 'italic' }}`}
            <br />
            css: 
            <br />
            {`font-style=italic;`}
            <br />
            <div style={{ fontStyle: 'normal', margin: '15px' }}>
            fontStyle: 'normal'
            </div>
            <div style={{ fontStyle: 'italic', margin: '15px' }}>
            fontStyle: 'italic'
            </div>
        </div>
    )
}

export default FontStyle;
