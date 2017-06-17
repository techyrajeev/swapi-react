import React       from 'react';
import { Link }    from 'react-router';
import { connect } from 'react-redux';
import { logOut }  from '../actions/auth-actions';
import PropTypes   from 'prop-types';

class Header extends React.Component {

    logout(e) {
        e.preventDefault();
        this.props.logOut().then(() => {
            this.context.router.push('/');
        });
    }

    render() {

        const { isAuthenticated, user } = this.props.auth;

        const userLinks = (
            <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                    <a
                        href          = "#"
                        className     = "dropdown-toggle"
                        data-toggle   = "dropdown"
                        role          = "button"
                        aria-expanded = "false"
                    >
                        <span className="glyphicon glyphicon-user"></span> Welcome {user.username}<span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu" role="menu">
                        <li>
                            <a href="#" onClick={this.logout.bind(this)}> <span className="glyphicon glyphicon-off"></span> Logout</a>
                        </li>
                    </ul>
                </li>
            </ul>
        );

        return (
            <div className="navbar navbar-default navbar-static-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-ex-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#"><span>SWAPI Tester</span></a>
                    </div>
                    <div className="collapse navbar-collapse" id="navbar-ex-collapse">
                        { isAuthenticated ? userLinks : null }
                    </div>
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    auth   : PropTypes.object.isRequired,
    logOut : PropTypes.func.isRequired
}

Header.contextTypes = {
    router : PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

export default connect(mapStateToProps, { logOut })(Header);
