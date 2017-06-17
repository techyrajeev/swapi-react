import React       from 'react';
import Planet      from './planet';
import { connect } from 'react-redux';
import PropTypes   from 'prop-types';

class PlanetList extends React.Component {

    constructor(props) {
        super(props);
        this.generatePlanetLists = this.generatePlanetLists.bind(this);
    }

    generatePlanetLists() {
        return (
            this.props.selectedPlanets
                .sort((p1, p2) => {
                    let pnum1 = isNaN(parseInt(p1.population)) ? 0 : parseInt(p1.population)
                    let pnum2 = isNaN(parseInt(p2.population)) ? 0 : parseInt(p2.population)
                    return pnum1 - pnum2;
                })
                .map((planet, idx) => {
                return (
                    <Planet
                        key    = {`nt-${planet.name}`}
                        planet = { planet }
                        index  = { idx }
                    />
                );
            })
        )
    }

    render() {
        return (
            <div className="list-group">
                { this.generatePlanetLists() }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        selectedPlanets : state.select.selectedPlanets
    };
}

export default connect(mapStateToProps)(PlanetList);
