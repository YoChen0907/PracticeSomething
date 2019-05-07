import React from 'react';

function Border() {
    return (
        <div>
            jsx: 
            <br />
            {`style={{ border: '1px solid black' }}`}
            <br />
            {`style={{ borderBottom: '1px solid black' }}`}
            <br />
            {`style={{ border: '1px solid black', borderRadius: '4px' }}`}
            <br />
            {`style={{ borderLeft: '2px solid black' }}`}
            <br />
            {`style={{ borderRight: '2px solid black' }}`}
            <br />
            {`style={{ border: '4px solid', borderColor: 'red blue green pink' }}`}
            <br />
            css: 
            <br />
            {`style="border: 1px solid black"`}
            <br />
            {`style="border-bottom: 1px solid black"`}
            <br />
            {`style="border-left: 1px solid black"`}
            <br />
            {`style="border-right: 1px solid black"`}
            <br />
            {`style="border-top: 1px solid black"`}
            <br />
            {`style="border: 1px solid black; border-radius: 4px;"`}
            <br />
            {`style="border: 4px solid; borderColor: red blue green pink; "`}
            <br />
            <p style={{ border: '1px solid black' }} >border</p>
            <p style={{ borderBottom: '1px solid black' }} >borderBottom</p>
            <p style={{ border: '1px solid black', borderRadius: '4px' }} >border + borderRadius</p>
            <p style={{ borderLeft: '2px solid black' }} >borderLeft</p>
            <p style={{ borderRight: '2px solid black' }} >borderRight</p>
            <p style={{ borderTop: '2px solid black' }} >borderTop</p>
            <p style={{ border: '4px solid', borderColor: 'red blue green pink' }} >border + borderColor</p>
            
        </div>
    )
}

export default Border;
