import React from 'react';


function Selectors() {
    return (
        <div>
            .classname -> class = classname <br />
            #id -> id = id <br />
            h1 -> html tag = h1 <br />
            * -> all <br />
            div[titlle] ->   div title = title  <br />
            div[title = 3] -> >>div title = 3 <br />
            div[title~=title] -> >>div title = title' block <br />
            scss -> {` a { h1 {  } } `}
            <br/>
            ||
            <br />
            css -> {`a h1{  }`}
        </div>
    )
}

export default Selectors;
