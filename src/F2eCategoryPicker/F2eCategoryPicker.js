import React, { Component } from 'react';

class F2eCategoryPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    pickerShow = () => {
        window.categoryPicker.open({
            dataSource: 'Area',
            onSubmit: this.submitFunction,
            backdropClose: true,
            recommendation: false,
            searchLevel: 2,
            blacklist: '600[2-8]000000'
        })
    }

    submitFunction = (event) => {
        console.log('event', event);
    }
    
    render() {
        console.log('window', window);
        return(
            <div>
                <button onClick={this.pickerShow}>picker</button>
            </div>
        );
    }
}


export default F2eCategoryPicker;
