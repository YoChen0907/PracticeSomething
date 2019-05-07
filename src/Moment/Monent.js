import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/zh-cn'

import './Moment.css';

class Monent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div>
                Monent
                <p className="function-block">
                    <span className="function-title">moment().format():</span>
                    <span className="function-result">{moment().format()}</span>
                    <span className="function-explain">現在時間.格式</span>
                </p>
                <p className="function-block">
                    <span className="function-title">moment().format('LLLL'):</span>
                    <span className="function-result">{moment().format('LLLL')}</span>
                </p>
                <p className="function-block">
                    <span className="function-title">moment('1994-09-07').format('LLLL'):</span>
                    <span className="function-result">{moment('1994-09-07').format('LLLL')}</span>
                    <span className="function-explain">指定時間.格式</span>
                </p>
                <p className="function-block">
                    <span className="function-title">moment('1994-09-07').format('MM-DD-YY'):</span>
                    <span className="function-result">{moment('1994-09-07').format('MM-DD-YY')}</span>
                    <span className="function-explain">指定時間.格式</span>
                </p>
                <p className="function-block">
                    <span className="function-title">moment('1994-09-07').format('YYYY'):</span>
                    <span className="function-result">{moment('1994-09-07').format('YYYY')}</span>
                    <span className="function-explain">指定時間.格式</span>
                </p>
                <p className="function-block">
                    <span className="function-title">moment('1994-09-07').format('YY'):</span>
                    <span className="function-result">{moment('1994-09-07').format('YY')}</span>
                    <span className="function-explain">指定時間.格式</span>
                </p>
                <p className="function-block">
                    <span className="function-title">moment('1994-09-07').format('Y'):</span>
                    <span className="function-result">{moment('1994-09-07').format('Y')}</span>
                    <span className="function-explain">指定時間.格式</span>
                </p>
                <p className="function-block">
                    <span className="function-title">moment('1994-09-07').format('M'):</span>
                    <span className="function-result">{moment('1994-09-07').format('M')}</span>
                    <span className="function-explain">指定時間.格式</span>
                </p>
                <p className="function-block">
                    <span className="function-title">moment('1994-09-07').format('MM'):</span>
                    <span className="function-result">{moment('1994-09-07').format('MM')}</span>
                    <span className="function-explain">指定時間.格式</span>
                </p>
                <p className="function-block">
                    <span className="function-title">moment('1994-09-07').format('MMM'):</span>
                    <span className="function-result">{moment('1994-09-07').format('MMM')}</span>
                    <span className="function-explain">指定時間.格式</span>
                </p>
                <p className="function-block">
                    <span className="function-title">moment('1994-09-07').format('MMMM'):</span>
                    <span className="function-result">{moment('1994-09-07').format('MMMM')}</span>
                    <span className="function-explain">指定時間.格式</span>
                </p>
                <p className="function-block">
                    <span className="function-title">moment('1994-09-07').format('D'):</span>
                    <span className="function-result">{moment('1994-09-07').format('D')}</span>
                    <span className="function-explain">指定時間.格式</span>
                </p>
                <p className="function-block">
                    <span className="function-title">moment('1994-09-07').format('DD'):</span>
                    <span className="function-result">{moment('1994-09-07').format('DD')}</span>
                    <span className="function-explain">指定時間.格式</span>
                </p>
                <p className="function-block">
                    <span className="function-title">moment('1994-09-07').format('Do'):</span>
                    <span className="function-result">{moment('1994-09-07').format('Do')}</span>
                    <span className="function-explain">指定時間.格式</span>
                </p>
                <p className="function-block">
                    <span className="function-title">moment('1994-09-07').format('DDD'):</span>
                    <span className="function-result">{moment('1994-09-07').format('DDD')}</span>
                    <span className="function-explain">指定時間.格式(一年中第幾天)</span>
                </p>
                <p className="function-block">
                    <span className="function-title">moment('1994-09-07').format('DDDD'):</span>
                    <span className="function-result">{moment('1994-09-07').format('DDDD')}</span>
                    <span className="function-explain">指定時間.格式(一年中第幾天)</span>
                </p>
                <p className="function-block">
                    <span className="function-title">moment('1994-09-07').format('ddd'):</span>
                    <span className="function-result">{moment('1994-09-07').format('ddd')}</span>
                    <span className="function-explain">指定時間.格式</span>
                </p>
                <p className="function-block">
                    <span className="function-title">moment('1994-09-07').format('dddd'):</span>
                    <span className="function-result">{moment('1994-09-07').format('dddd')}</span>
                    <span className="function-explain">指定時間.格式</span>
                </p>
                <p className="function-block">
                    <span className="function-title">moment('1994-09-07').fromNow():</span>
                    <span className="function-result">{moment('1994-09-07').fromNow()}</span>
                    <span className="function-explain">距離指定時間</span>
                </p>
            </div>
        )
    }
}

export default Monent;
