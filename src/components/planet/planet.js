import React     from 'react';
import PropTypes from 'prop-types';
import Utlis     from '../../utils/utility';

export default class Planet extends React.Component {

    constructor(props) {
        super(props);
    }

    getPlanetStructure(planet) {
        return (
            <div className="list-group-item">
                <h4 className="heading">
                    <span className="title">{ planet.name}</span>
                </h4>
                <hr />
                <p className="content">
                    {planet.terrain}
                </p>

                <p className="content">
                    <i className="glyphicon glyphicon-user" aria-hidden="true"></i>
                    {" "+planet.population}
                </p>
            </div>
        );
    }

    render() {
        const style = {
            marginLeft  : 'auto',
            marginRight : 'auto',
            width       : `${200+ 6*this.props.index}px`
        };

        return (
            <div className="planet-container" style={style}>
                {this.getPlanetStructure(this.props.planet)}
            </div>
        );
    }
}

Planet.propType = {
    type : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    content : PropTypes.string.isRequired
};
