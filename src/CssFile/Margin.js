import React from 'react';

function Margin() {
    return (
        <div>
            jsx: 
            <br />
            {`style={{ margin: '10px(上) 20px(右) 30px(下) 40px(左)' }}`}
            <br />
            {`style={{ margin: '10px(上下) 20px(左右)' }}`}
            <br />
            css: 
            <br />
            {`style="margin: 10px(上) 20px(右) 30px(下) 40px(左);"`}
            <br />
            {`style="margin: 10px(上下) 20px(左右);"`}
            <br />
            <br />
            margin: '10px(上) 20px(右) 30px(下) 40px(左)'
            <div style={{ border: '1px solid black' }}>                
                <div style={{ margin: '10px 20px 30px 40px', border: '1px solid black' }}>
                    in
                </ div>
            </div>
            margin: '10px(上下) 20px(左右)'
            <div style={{ border: '1px solid black' }}>                
                <div style={{ margin: '10px 20px', border: '1px solid black' }}>
                    in
                </ div>
            </div>
        </div>
    )
}

export default Margin;
