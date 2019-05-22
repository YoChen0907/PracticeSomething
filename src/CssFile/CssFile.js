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
import LineHeight from './LineHeight';
import WordSpacing from './WordSpacing';
import FontStyle from './FontStyle';
import FontSize from './FontSize';
import FontWeight from './FontWeight';
import Selectors from './Selectors';
import Display from './Display';
import Position from './Position';
import Overflow from './Overflow';
import FloatClear from './FloatClear';

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
                <LineHeight />
            </div>
            <div className="css-file-block">
                word-spacing
                <WordSpacing />
            </div>
            <div className="css-file-block">
                font-style
                <FontStyle />
            </div>
            <div className="css-file-block">
                font-size
                <FontSize />
            </div>
            <div className="css-file-block">
                font-weight
                <FontWeight />
            </div>
            <div className="css-file-block">
                selectors
                <Selectors />
            </div>
            <div className="css-file-block">
                display
                <Display />
            </div>
            <div className="css-file-block">
                position
                <Position />
            </div>
            <div className="css-file-block">
                overflow
                <Overflow />
            </div>
            <div className="css-file-block">
                float + Clear
                <FloatClear />
            </div>
        </div>
    )
}

export default CssFile;
