import React, { Component } from 'react';
import Swiper from 'swiper/dist/js/swiper.js'
// import Swiper from 'swiper';



class NewSwiper extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        var mySwiper = new Swiper('.swiper-container', {
            speed: 400,
            spaceBetween: 100
        });
        console.log('mySwiper', mySwiper.init);
        return (
        <div>
            {mySwiper.init}
            {/* <Swiper params={{ speed: 400, spaceBetween: 100, slidesPerView: 'auto' }}>
                <div style={{ display: 'inline-block' }}>Slide 1</div>
                <div style={{ display: 'inline-block' }}>Slide 2</div>
                <div style={{ display: 'inline-block' }}>Slide 3</div>
                <div style={{ display: 'inline-block' }}>Slide 4</div>
                <div style={{ display: 'inline-block' }}>Slide 5</div>
            </Swiper> */}
        </div>);
    }
}

export default NewSwiper;
