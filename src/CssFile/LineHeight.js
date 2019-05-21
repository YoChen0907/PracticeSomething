import React from 'react';


function LineHeight() {
    return (
        <div>
            jsx: 
            <br />
            {`style={{ lineHeight: 20px }}`}
            <br />
            css: 
            <br />
            {`line-height: 20px`}
            <br />
            <div style={{ lineHeight: '1', width: '200px', border: '1px solid black', wordBreak: 'break-all' }}>
            lineHeight: 1,lineHeight,lineHeight,lineHeight,lineHeight,lineHeight,lineHeight,lineHeight
            </div>
            <div style={{ lineHeight: '3', width: '200px', border: '1px solid black', wordBreak: 'break-all' }}>
            lineHeight: 3,lineHeight,lineHeight,lineHeight,lineHeight,lineHeight,lineHeight,lineHeight
            </div>
            <div style={{ lineHeight: '20px', width: '200px', border: '1px solid black', wordBreak: 'break-all' }}>
            lineHeight: 20px,lineHeight,lineHeight,lineHeight,lineHeight,lineHeight,lineHeight,lineHeight
            </div>
            <div style={{ lineHeight: '30px', width: '200px', border: '1px solid black', wordBreak: 'break-all' }}>
            lineHeight: 20px,lineHeight,lineHeight,lineHeight,lineHeight,lineHeight,lineHeight,lineHeight
            </div>
        </div>
    )
}

export default LineHeight;
