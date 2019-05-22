import React, { Component } from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/initialize';
import './ReactDates.css';

class ReactDates extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null,
        };
    }

    onDatesChange = (Date) => {
        console.log('Date', Date);
    }

    render(){
        return (
            <DateRangePicker
                startDate={this.state.startDate}
                startDateId="your_unique_start_date_id"
                endDate={this.state.endDate}
                endDateId="your_unique_end_date_id"
                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                focusedInput={this.state.focusedInput}
                onFocusChange={focusedInput => this.setState({ focusedInput })}
                orientation="vertical"
                verticalHeight={568}
            />
        );
    }
}

export default ReactDates;
