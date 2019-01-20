import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        const { filterMode , onFilter} = this.props;
        return (
            <div>
                <select
                    className="word"
                    value={filterMode}
                    onChange={evt => onFilter(evt.target.value)}>
                    <option value="Show_All">Show All</option>
                    <option value="Show_Memorized">Show Memoried</option>
                    <option value="Show_Forgot">Show Forgot</option>
                </select>
            </div>
        )
    }
}
