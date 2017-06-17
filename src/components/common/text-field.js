import React      from 'react';
import PropTypes  from 'prop-types';
import classnames from 'classnames';

const TextField = ({ name, value, label, error, type, onChange}) => {
  return (
      <div className={classnames('form-group', { 'has-error': error })}>
          <label className="control-label">{label}</label>
          <input
              onChange  = {onChange}
              value     = {value}
              type      = {type}
              name      = {name}
              className = "form-control"
          />
          {error && <span className="help-block">{error}</span>}
      </div>
  );
}

TextField.propTypes = {
  name     : PropTypes.string.isRequired,
  value    : PropTypes.string.isRequired,
  label    : PropTypes.string.isRequired,
  error    : PropTypes.string,
  type     : PropTypes.string.isRequired,
  onChange : PropTypes.func.isRequired,
}

TextField.defaultProps = {
  type: 'text'
}

export default TextField;
