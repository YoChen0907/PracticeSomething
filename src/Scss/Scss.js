import React from 'react';

import './scss-block.css'

function Scss() {
        return(
            <div className="scss-block">
            Scss
                <div>
                    <div>
                        安裝方式：
                        <ul>
                        <tr> 第一步：npm install node-sass-chokidar --save-dev</tr>
                        <tr>第二步：npm install npm-run-all --save-dev</tr>
                        <tr>
                            <div>
                                <p>第三步：pachage.json加上</p>
                                <p>"start-js": "react-scripts start"</p>
                                <p>start": "npm-run-all -p watch-css start-js",</p>
                                <p>"build": "npm run build-css && react-scripts build",</p>
                                <p>"build-css": "node-sass-chokidar src/ -o src/",</p>
                                <p>"watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive"</p>
                            </div>
                        </tr>
                        </ul>
                    </div>
                    <p>使用：</p>
                    <div className="scss-using-block">
                        <pre className="helf-block">
{`
Scss
.scss-block {
    .scss-using-block {
        display: flex;
        border: 1px solid black;
        .helf-block {
            display: inline-block;
            width: 50%;
            box-sizing: border-box;                       
        }
    }
}
`}
                        </pre>
                        <pre className="helf-block">
{`
Css
.scss-block .scss-using-block {
    display: flex;
    border: 1px solid black;
}
.scss-block .scss-using-block .helf-block {
  display: inline-block;
  width: 50%;
  box-sizing: border-box;
}
`}
                        </pre>
                    </div>
                    <div>參考網址：https://dev.to/koheishingaihq/react-with-sass-11e</div>
                </div>
            </div>
        )
}


export default Scss;
