import React, { Component } from 'react';
import moment from 'moment';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController, DayPicker, DayPickerRangeControllerWrapper} from 'react-dates';
import 'react-dates/initialize';
import './ReactDates.css';

class ReactDates extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: moment(new Date()),
            endDate: moment(new Date()).add(30, 'days'),
        };
    }

    onDatesChange = (date) => {
        console.log('startDate', date.format('YYYY-MM-DD'));

    }

    testClean = () => {
        this.setState({
            startDate: null,
            endDate: null,
        });
    }

    render() {
        return (
            <div style={{ textAlign: 'center' }}>
            <DateRangePicker
                startDate={this.state.startDate}
                startDateId="your_unique_start_date_id"
                startDatePlaceholderText="開始日期"
                endDatePlaceholderText="結束日期"
                monthFormat="YYYY[年]MMMM"
                phrases={{closeDatePicker: '关闭',clearDates: '清除日期'}}
                endDate={this.state.endDate}
                endDateId="your_unique_end_date_id"
                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                focusedInput={this.state.focusedInput}
                onFocusChange={focusedInput => this.setState({ focusedInput })}
                orientation="horizontal"
                customArrowIcon={<div style={{ width: '80px' }}>-</div>}
                minimumNights={0}
                daySize={50}
                renderCalendarDay={(daa) => { console.log('daa', daa) }}
            />
            {/* <DayPickerRangeController
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                // keepOpenOnDateSelect
                // endDate={this.state.endDate}
                startDateOffset={(startDateOffset) => { this.setState({ startDate: startDateOffset }); console.log('startDateOffset', startDateOffset); }}
                endDateOffset={(endDateOffset) => { this.setState({ endDate: endDateOffset }); console.log('endDateOffset', endDateOffset); }}
                // hideKeyboardShortcutsPanel
                // monthFormat="YYYY[年]MMMM"
                onFocusChange={(focus) => { console.log('focus', focus); }}
                onDatesChange={(date) => { console.log('date', date); }}
                orientation="horizontal"
            /> */}
            <button onClick={this.testClean}>測試清除</button>
            </div>
        );
    }
}

export default ReactDates;
