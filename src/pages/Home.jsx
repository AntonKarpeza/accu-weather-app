import React from 'react';
import Search from '../components/Search';
import HourlyForecast from '../components/widgets/HourlyForecast';
import AddToFavorites from '../components/AddToFavorites';
import CurrentConditions from '../components/widgets/CurrentConditions'
import DailyForecast from '../components/widgets/DailyForecast'

const Home = () => {
    return (
        <div className="py-lg-3">
            <div className="col-lg-10 col-md-9 mx-auto">
                <h1 className="fw-light">Home</h1>
                <Search />
                <AddToFavorites />
                <div className='row'>
                    <div className="col-lg-4">
                        <HourlyForecast />
                    </div>
                    <div className="col-lg-4">
                        <CurrentConditions />
                    </div>
                    <div className="col-lg-4">
                        <DailyForecast />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;