import React, { Component } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class ReactSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        const list = ['1'];
        const setting = {
            dots: true,
            infinite: true,
            slidesToScroll: 1,
        }
        return(
            <div>
            <Slider
                {...setting}
            >
                {list.map((data) => <div className="item" >{data}</div>)}
            </Slider>
            </div>
        )
    }
}

export default ReactSlider;



