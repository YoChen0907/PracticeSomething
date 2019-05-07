import React from 'react';

function Color() {
    return (
        <div>
            jsx: 
            <br />
            {`style={{ color: 'red' }}`}
            <br />
            {`style={{ color: '#ff78bb' }}`}
            <br />
            {`style={{ color: 'rgb(120, 150, 20)' }}`}
            <br />
            {`style={{ color: 'rgba(120, 150, 20,0.5)' }}`}
            <br />
            css: 
            <br />
            {`style="color: red;"`}
            <br />
            {`style="color: #ff78bb;"`}
            <br />
            {`style="color: rgb(120, 150, 20);"`}
            <br />
            {`style="color: rgba(120, 150, 20, 0.5);"`}
            <br />
            <p style={{ color: 'red' }} >red</p>
            <p style={{ color: '#ff78bb' }} >#ff78bb</p>
            <p style={{ color: 'rgb(120, 150, 20)' }} >rgb(120, 150, 20)</p>
            <p style={{ color: 'rgba(120, 150, 20,0.5)' }} >rgba(120, 150, 20,0.5)</p>
        </div>
    )
}

export default Color;
