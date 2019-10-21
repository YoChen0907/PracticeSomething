import React, { Component } from 'react';
import Swiper from 'react-id-swiper';


class ReactSwipper extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        console.log('test5');
        const params = {
            slidesPerView: 4,
            spaceBetween: 30,
            centeredSlides: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            }
          };
        return (
            <Swiper {...params}>
                <div style={{ display: 'inline-block' }}>Slide 1</div>
                <div style={{ display: 'inline-block' }}>Slide 2</div>
                <div style={{ display: 'inline-block' }}>Slide 3</div>
                <div style={{ display: 'inline-block' }}>Slide 4</div>
                <div style={{ display: 'inline-block' }}>Slide 5</div>
            </Swiper>
        )
    }
}


export default ReactSwipper;
