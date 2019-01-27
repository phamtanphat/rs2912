import React, { Component } from 'react'
import {connect} from 'react-redux';
import * as actionCreators from './redux/actionCreators';

class Filter extends Component {
    render() {
        const { filterMode , setFilterMode} = this.props;
        return (
            <div>
                <select
                    className="word"
                    value={filterMode}
                    onChange={evt => setFilterMode(evt.target.value)}>
                    <option value="Show_All">Show All</option>
                    <option value="Show_Memorized">Show Memoried</option>
                    <option value="Show_Forgot">Show Forgot</option>
                </select>
            </div>
        )
    }
}
const mapStateToProps = function(state){
    return {filterMode : state.filterMode}
}
export default connect(mapStateToProps , actionCreators)(Filter);