import React from 'react';

function Padding() {
    return (
        <div>
            jsx: 
            <br />
            {`style={{ padding: '10px(上) 20px(右) 30px(下) 40px(左)' }}`}
            <br />
            {`style={{ padding: '10px(上下) 20px(左右)' }}`}
            <br />
            css: 
            <br />
            {`style="padding: 10px(上) 20px(右) 30px(下) 40px(左);"`}
            <br />
            {`style="padding: 10px(上下) 20px(左右);"`}
            <br />
            <br />
            padding: '10px(上) 20px(右) 30px(下) 40px(左)'
            <div style={{ border: '1px solid black' }}>                
                <div style={{ padding: '10px 20px 30px 40px', border: '1px solid red' }}>
                    in
                </ div>
            </div>
            padding: '10px(上下) 20px(左右)'
            <div style={{ border: '1px solid black' }}>                
                <div style={{ padding: '10px 20px', border: '1px solid red' }}>
                    in
                </ div>
            </div>
        </div>
    )
}

export default Padding;
