import React from 'react';


function FloatClear() {
    return (
        <div>
            jsx: 
            <br />
            {`style={{ float: 'left' }}`}
            <br />
            css: 
            <br />
            {`float: right;`}
            <br />
            <div style={{ width: '100%', height: '500px', border: '1px solid black'}}>
                <div style={{ float: 'left', border: '2px solid red', width: '50px', height: '50px' }}/>
                <div style={{ float: 'right', border: '2px solid blue', width: '50px', height: '50px' }}/>
                <div style={{ border: '5px solid green', width: '50px', height: '50px' }}/>
                <br />
                上面是沒有clear的狀況
                <br />
                <div style={{ float: 'left', border: '2px solid red', width: '50px', height: '50px' }}/>
                <div style={{ float: 'right', border: '2px solid blue', width: '50px', height: '50px' }}/>
                <div style={{ border: '5px solid green', width: '50px', height: '50px', clear: 'both' }}/>
            </div>
        </div>
    )
}

export default FloatClear;
