import React       from 'react';
import PropTypes   from 'prop-types';
import { connect } from 'react-redux';
import { select }  from '../../actions/select-actions';

class SuggestionList extends React.Component {
    constructor() {
        super();
        this.selectPlanet = this.selectPlanet.bind(this);
    }

    selectPlanet(planet) {
        this.props.select(planet);
    }

    render() {
        const { planets, showSuggestions } = this.props;

        const showHide = {
            'display': showSuggestions ? 'block' : 'none'
        };

        return (
            <div className="suggestions-container" style={showHide}>
                <ul className="suggestions">
                {
                    planets.map((planet) => <li key = {planet.name} onClick = {() => { this.selectPlanet(planet); }}>{planet.name}</li> )
                }
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        planets         : state.search.planets,
        selectedPlanets : state.select.selectedPlanets,
        showSuggestions : state.select.showSuggestions
    };
}

SuggestionList.propTypes = {
    select : PropTypes.func.isRequired
};

export default connect(mapStateToProps, { select })(SuggestionList);


