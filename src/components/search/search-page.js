import React      from 'react';
import SearchForm from './search-form';
import PlanetList from '../planet/planet-list';

const SearchPage = () => (
    <div className="container">
        <div className="row">
            <div className="col-md-4 col-md-offset-4">
                <SearchForm />
            </div>
        </div>

        <div className="row">
            <div className="col-md-8 col-md-offset-2">
                <PlanetList />
            </div>
        </div>
    </div>
);

export default SearchPage;
