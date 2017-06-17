import React                   from 'react';
import { connect }             from 'react-redux';
import SearchField             from '../common/search-field';
import { search }              from '../../actions/search-actions';
import { isEmpty, isEmptyObj } from '../../utils/utility';
import PropTypes               from 'prop-types';

class SearchForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm      : '',
            errors          : {},
            isLoading       : false
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    componentDidUpdate() {
        this.props.search(this.state.searchTerm)
            .then((res) => console.log(res));
        console.log("Comp updated:"+this.state.searchTerm);
    }

    render() {
        const { errors, searchTerm, isLoading } = this.state;
        return (
            <form className="search-form">
                <h1 className = "text-center">Planet Search</h1>
                <hr className="star-primary"/>
                {
                    errors.errorDesc
                        &&
                    <div className="alert alert-danger">
                        <a href="#" className="close"
                            data-dismiss="alert"
                            aria-label="close"
                        >
                            &times;
                        </a>
                        {errors.errorDesc}
                    </div>
                }
                <SearchField
                    name        = "searchTerm"
                    placeholder = "Enter planet name"
                    value       = {searchTerm}
                    error       = {errors.searchError}
                    onChange    = {this.onChange}
                />
            </form>
        );
    }
}

SearchForm.propTypes = {
    search : PropTypes.func.isRequired
}

export default connect(null , { search })(SearchForm);
