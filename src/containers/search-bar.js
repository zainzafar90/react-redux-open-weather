import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({
            term: event.target.value
        });
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({
            term: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="form-group form-group-feedback form-group-feedback-right">
                    <input type="search" value={this.state.term} onChange={this.onInputChange} className="form-control bg-light wmin-md-250" placeholder="Search forecast"/>
                    <div className="form-control-feedback" onClick={() => console.log(event.type)}>
                        <i className="icon-search4 font-size-sm"></i>
                    </div>
                </div>
            </form>
        )
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);