import React from 'react';

import InlineCss from './InlineCss';
import InternalStyle from './InternalStyle';
import Color from './Color';
import BackgroundColor from './BackgroundColor';
import BackgroundImage from './BackgroundImage';
import Border from './Border';
import Margin from './Margin';
import Padding from './Padding';
import Cursor from './Cursor';
import TextAlign from './TextAlign';

import './CssFile.css';

function CssFile() {
    return (
        <div className="CssFile">
            CssFile
            <div className="css-file-block">
                inline-css: 將 css 寫入element style中
                <InlineCss />
            </div>
            <div className="css-file-block">
                InternalStyle
                <InternalStyle />
            </div>
            <div className="css-file-block">
                color
                <Color />
            </div>
            <div className="css-file-block">
                background-color
                <BackgroundColor />
            </div>
            <div className="css-file-block">
                background-image
                <BackgroundImage />
            </div>
            <div className="css-file-block">
                border
                <Border />
            </div>
            <div className="css-file-block">
                margin
                <Margin />
            </div>
            <div className="css-file-block">
                padding
                <Padding />
            </div>
            <div className="css-file-block">
                cursor
                <Cursor />
            </div>
            <div className="css-file-block">
                text-align
                <TextAlign />
            </div>
            <div className="css-file-block">
                line-height
            </div>
            <div className="css-file-block">
                word-spacing
            </div>
            <div className="css-file-block">
                font-family
            </div>
            <div className="css-file-block">
                font-style
            </div>
            <div className="css-file-block">
                font-size
            </div>
            <div className="css-file-block">
                font-weight
            </div>
            <div className="css-file-block">
                selectors
            </div>
            <div className="css-file-block">
                list
            </div>
            <div className="css-file-block">
                table
            </div>
            <div className="css-file-block">
                display
            </div>
            <div className="css-file-block">
                position
            </div>
            <div className="css-file-block">
                overflow
            </div>
            <div className="css-file-block">
                float + Clear
            </div>
        </div>
    )
}

export default CssFile;
