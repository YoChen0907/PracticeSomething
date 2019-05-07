import React from 'react';

function InternalStyle() {
    return (
        <div>
            {`<style>`}
            <br />
            {`h1 {
              color: orange;
            }`}
            <br />
            {`</style>`}
        </div>
    )
}

export default InternalStyle;
