import React, { Component } from 'react';
import Truncate from 'react-truncate';

import './TruncateLongText.css';

class TruncateLongText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            truncated: false,
        };
    }

    truncated = (isTruncated) => {
        console.log('isTruncated', isTruncated);
        return isTruncated;
    }

    render() {
        return (
        <div>
            <div style={{ margin: '0 auto', border: '1px solid black', width: '200px' }}>
                <Truncate lines={3} ellipsis={'....'}>
                    123456789009876543212345678908765432
                </Truncate>
            </div>
            <div style={{ margin: '20px auto', width: '200px', display: 'inline-block' }}>
                <Truncate lines={4} ellipsis={<span>...</span>} width={200} onTruncate={this.truncated}>
                    <p>{'財務耗損的日子，不是掉錢包，就是亂花錢，不然就是把東西弄壞掉！'}</p>
                </Truncate>
            </div>
            <div style={{ margin: '20px auto', width: '200px', display: 'block' }}>
                <p>{'財務耗損的日子，不是掉錢包，就是亂花錢，不然就是把東西弄壞掉！'}</p>
            </div>


            <div className="test-css">
                <div className="word-block">
                文字區塊
                </div>
                <div className="test-img-block">
                    <div className="test-img">圖片</div>
                    <div className="test-img">圖片</div>
                </div>
            </div>


            <div>
                <p>word</p>
            </div>
        </div>
        )
    }
}

export default TruncateLongText;
