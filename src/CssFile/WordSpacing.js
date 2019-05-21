import React from 'react';


function WordSpacing() {
    return (
        <div>
            jsx: 
            <br />
            {`style={{ wordSpacing: '2' }}`}
            <br />
            css: 
            <br />
            {`word-spacing="2"`}
            <br />
            <div style={{ wordSpacing: 2, border: '1px solid black', wordBreak: 'break-all' }}>
            wordSpacing:2, wordSpacing:2, wordSpacing:2
            </div>
            <div style={{ wordSpacing: 4, border: '1px solid black', wordBreak: 'break-all' }}>
            wordSpacing:4, wordSpacing:4, wordSpacing:4
            </div>
            <div style={{ wordSpacing: 6, border: '1px solid black', wordBreak: 'break-all' }}>
            wordSpacing:6, wordSpacing:6, wordSpacing:6
            </div>
            <div style={{ wordSpacing: 8, border: '1px solid black', wordBreak: 'break-all' }}>
            wordSpacing:8, wordSpacing:8, wordSpacing:8
            </div>
        </div>
    )
}

export default WordSpacing;
