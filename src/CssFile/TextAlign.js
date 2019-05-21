import React from 'react';

function TextAlign() {
    return (
        <div>
            jsx: 
            <br />
            {`style={{ textAlign: 'left' }}`}
            <br />
            css: 
            <br />
            {`style="text-align: left"`}
            <br />
            <div style={{ margin: '20px', border: '1px solid black', textAlign: 'left' }}>
            textAlign-left
            </div>
            <div style={{ margin: '20px', border: '1px solid black', textAlign: 'right' }}>
            textAlign-right
            </div>
            <div style={{ margin: '20px', border: '1px solid black', textAlign: 'center' }}>
            textAlign-right
            </div>
            <div style={{ margin: '20px', border: '1px solid black', textAlign: 'start', direction: 'ltr' }}>
            textAlign-start, direction: rtl (left-to-right)
            </div>
            <div style={{ margin: '20px', border: '1px solid black', textAlign: 'start', direction: 'rtl' }}>
            textAlign-start, direction: rtl (right-to-left)
            </div>
            <div style={{ margin: '20px', border: '1px solid black', textAlign: 'end', direction: 'ltr' }}>
            textAlign-end, direction: ltr (left-to-right)
            </div>
            <div style={{ margin: '20px', border: '1px solid black', textAlign: 'end', direction: 'rtl' }}>
            textAlign-end, direction: rtl (right-to-left)
            </div>
        </div>
    )
}

export default TextAlign;
