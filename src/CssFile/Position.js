import React from 'react';


function Position() {
    return (
        <div>
            jsx: 
            <br />
            {`style={{ position: 'relative' }}`}
            <br />
            css: 
            <br />
            {`position: absolute;`}
            <br />
            <div style={{ border: '1px solid black', width: '100%', height: '500px', position: 'relative' }}>
                <div style={{ border: '1px solid black', width: '100px', height: '100px', position: 'absolute', top: '10px', left: '10px' }}>
                absolute, top: 10px, left: 10px
                </div>
                <div style={{ border: '1px solid black', width: '100px', height: '100px', position: 'fixed', bottom: '10px', right: '10px'  }}>
                fixed, bottom: 10px, right: 10px
                </div>
            </div>
        </div>
    )
}

export default Position;
