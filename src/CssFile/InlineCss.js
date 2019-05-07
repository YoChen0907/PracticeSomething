import React from 'react';


function InlineCss() {
    return (
        <div>
            ex:
            <br />
            jsx: {`<div style={{ display: 'block' }} />`}
            <br />
            html: {`<div style=" display: block " ></ div>`}
        </div>
    )
}

export default InlineCss;
