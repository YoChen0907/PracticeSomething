import React from 'react';

function BackgroundColor() {
    return (
        <div>
            jsx: 
            <br />
            {`style={{ backgroundColor: 'red' }}`}
            <br />
            {`style={{ backgroundColor: '#ff78bb' }}`}
            <br />
            {`style={{ backgroundColor: 'rgb(120, 150, 20)' }}`}
            <br />
            {`style={{ backgroundColor: 'rgba(120, 150, 20,0.5)' }}`}
            <br />
            css: 
            <br />
            {`style="background-color: red;"`}
            <br />
            {`style="background-color: #ff78bb;"`}
            <br />
            {`style="background-color: rgb(120, 150, 20);"`}
            <br />
            {`style="background-color: rgba(120, 150, 20, 0.5);"`}
            <br />
            <p style={{ backgroundColor: 'red' }} >red</p>
            <p style={{ backgroundColor: '#ff78bb' }} >#ff78bb</p>
            <p style={{ backgroundColor: 'rgb(120, 150, 20)' }} >rgb(120, 150, 20)</p>
            <p style={{ backgroundColor: 'rgba(120, 150, 20,0.5)' }} >rgba(120, 150, 20,0.5)</p>
        </div>
    )
}

export default BackgroundColor;
