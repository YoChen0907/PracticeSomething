import React, { Component } from 'react';


class InputOnSafari extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a: ''
        };
    }

    render() {
        return (
            <div>
                <select
                    onChange={(event) => {
                        console.log('event', event.target.value)
                            this.setState({
                                a: event.target.value
                            });
                          }}
                    value = {this.state.a}
                >
                    <option key="A" value="A" name="A">A</option>
                    <option key="B" value="B" name="B">B</option>
                    <option key="C" value="C" name="C">C</option>
                    <option key="D" value="D" name="D">D</option>
                </select>
            </div>
        )
    }
}


export default InputOnSafari;
