import React from 'react';


function Overflow() {
    return (
        <div>
            jsx: 
            <br />
            {`style={{ overflow: 'auto' }}`}
            <br />
            css: 
            <br />
            {`position: hidden;`}
            <br />
            <div style={{ border: '1px solid black', width: '100%', height: '100px', overflow: 'auto' }}>
            内容会被修剪，浏览器会显示滚动条以便查看其余内容 <br/>
            <span style={{ color: 'blue' }}>overflow: scroll;</span> <br/>
            默认值。内容不会被修剪，会呈现在元素框之外 <br/>
            overflow: visible; <br/>
            内容会被修剪，并且其余内容不可见 <br/>
            overflow: hidden; <br/>
            由浏览器定夺，如果内容被修剪，就会显示滚动条 <br/>
            overflow: auto; <br/>
            规定从父元素继承overflow属性的值 <br/>
            overflow: inherit; <br/>
            </div>
            <div style={{ border: '1px solid black', width: '100%', height: '100px', overflow: 'hidden', margin: '20px' }}>
            默认值。内容不会被修剪，会呈现在元素框之外 <br/>
            overflow: visible; <br/>
            内容会被修剪，并且其余内容不可见 <br/>
            <span style={{ color: 'blue' }}>overflow: hidden;</span> <br/>
            内容会被修剪，浏览器会显示滚动条以便查看其余内容 <br/>
            overflow: scroll; <br/>
            由浏览器定夺，如果内容被修剪，就会显示滚动条 <br/>
            overflow: auto; <br/>
            规定从父元素继承overflow属性的值 <br/>
            overflow: inherit; <br/>
            </div>
            <div style={{ border: '1px solid black', width: '100%', height: '100px', overflow: 'visible', marginBottom: '100px' }}>
            默认值。内容不会被修剪，会呈现在元素框之外 <br/>
            <span style={{ color: 'blue' }}>overflow: visible;</span> <br/>
            内容会被修剪，并且其余内容不可见 <br/>
            overflow: hidden; <br/>
            内容会被修剪，浏览器会显示滚动条以便查看其余内容 <br/>
            overflow: scroll; <br/>
            由浏览器定夺，如果内容被修剪，就会显示滚动条 <br/>
            overflow: auto; <br/>
            规定从父元素继承overflow属性的值 <br/>
            overflow: inherit; <br/>
            </div>
        </div>
    )
}

export default Overflow;
