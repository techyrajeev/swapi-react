import React                   from 'react';
import { connect }             from 'react-redux';
import TextField               from '../common/text-field';
import SpinButton              from '../common/spin-button';
import { login }               from '../../actions/auth-actions';
import { isEmpty, isEmptyObj } from '../../utils/utility';
import PropTypes               from 'prop-types';

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username  : '',
            password  : '',
            errors    : {},
            isLoading : false
        };
        this.onLogin = this.onLogin.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    validateInput(state) {
        let errors = {};
        if(isEmpty(state.username)) {
             errors.username = 'Username is required';
        }

        if(isEmpty(state.password)) {
             errors.password = 'Password is required';
        }

        return {
            errors,
            isValid : isEmptyObj(errors)
        };

    }

    isValid() {
        const { errors, isValid } = this.validateInput(this.state);

        if (!isValid) {
            this.setState({ errors });
        }

        return isValid;
    }

    onLogin(e) {
        e.preventDefault();
        if (this.isValid()) {
            this.setState({errors : {}, isLoading : true});

            this.props.login(this.state)
                .then((res) => {
                    this.context.router.push('search');
                })
                .catch((err) => {
                    return err.response.json();
                })
                .then((err) => {
                    this.setState({errors : err, isLoading : false});
                });
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value.trim() });
    }

    render() {
        const { errors, username, password, isLoading } = this.state;

        return (
            <form onSubmit={this.onLogin} className="login-form">
                <h2 className="text-center">Login</h2>
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

                <TextField
                    name     = "username"
                    label    = "Username"
                    value    = {username}
                    error    = {errors.username}
                    onChange = {this.onChange}
                />

                <TextField
                    name     = "password"
                    label    = "Password"
                    value    = {password}
                    error    = {errors.password}
                    onChange = {this.onChange}
                    type     = "password"
                />

                <div className="form-group text-center">
                    <SpinButton
                        classNames  = "btn btn-primary btn-lg"
                        buttonText  = {"Login"}
                        spinText    = {"Logging in..."}
                        showSpinner = {isLoading}
                        inputType   = "submit"
                    />
                </div>
            </form>
        );
    }
}

LoginForm.propTypes = {
    login : PropTypes.func.isRequired
};

LoginForm.contextTypes = {
    router : PropTypes.object.isRequired
};

export default connect(null, { login })(LoginForm);
