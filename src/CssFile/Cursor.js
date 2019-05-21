import React from 'react';

import CAT from './cat.png';
import pointimg1 from './cursorPoint1.png';
import pointimg2 from './cursorPoint2.png';
import pointimg3 from './cursorPoint3.png';

function Cursor() {
    return (
        <div>
            jsx: 
            <br />
            {`style={{ cursor: 'help' }}`}
            <br />
            css: 
            <br />
            {`style="cursor: help"`}
            <br />
            <br />
            cursor: 'help'
            <div style={{ border: '1px solid black',height: '20px', cursor: 'help' }} />
            cursor: 'wait'
            <div style={{ border: '1px solid black',height: '20px', cursor: 'wait' }} />
            cursor: 'crosshair'
            <div style={{ border: '1px solid black',height: '20px', cursor: 'crosshair' }} />
            cursor: 'not-allowed'
            <div style={{ border: '1px solid black',height: '20px', cursor: 'not-allowed' }} />
            cursor: 'zoom-in'
            <div style={{ border: '1px solid black',height: '20px', cursor: 'zoom-in' }} />
            cursor: 'grab'
            <div style={{ border: '1px solid black',height: '20px', cursor: 'grab' }} />
            cursor: 'pointer'
            <div style={{ border: '1px solid black',height: '20px', cursor: 'pointer' }} />
            <img src={pointimg1} alt="pointimg1" style={{ height: '1346px' }} />
            <img src={pointimg3} alt="pointimg3" style={{ height: '1346px' }} />
            <img src={pointimg2} alt="pointimg2" style={{ verticalAlign: 'top' }} />
        </div>
    )
}

export default Cursor;
