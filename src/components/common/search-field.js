import React          from 'react';
import PropTypes      from 'prop-types';
import classnames     from 'classnames';
import SuggestionList from './suggestion-list';

class SearchField extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isSuggestionsActive : true
        };
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
    }

    show(e) {
        this.setState({ isSuggestionsActive : true });
    }

    hide(e) {
        this.setState({ isSuggestionsActive : false });
    }

    render() {
        const { name, value, placeholder, error, type, onChange} = this.props;
        return (
            <div>
                <div className={classnames('form-group', { 'has-error': error })}>
                    <input
                        onChange    = {onChange}
                        onFocus     = {this.show}
                        value       = {value}
                        type        = {type}
                        name        = {name}
                        placeholder = {placeholder}
                        className   = "form-control"
                    />
                    {error && <span className="help-block">{error}</span>}
                </div>
                { this.state.isSuggestionsActive ? <SuggestionList /> : null }
            </div>
        );
    }
}

SearchField.propTypes = {
  name        : PropTypes.string.isRequired,
  value       : PropTypes.string.isRequired,
  placeholder : PropTypes.string.isRequired,
  error       : PropTypes.string,
  type        : PropTypes.string.isRequired,
  onChange    : PropTypes.func.isRequired
}

SearchField.defaultProps = {
  type: 'text'
}

export default SearchField;
