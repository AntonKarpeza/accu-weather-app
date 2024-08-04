import React from 'react';
import { useSelector } from 'react-redux';
import { useGetHourlyForecastQuery } from '../../services/weatherApi';

const HourlyForecast = () => {
    const location = useSelector((state) => state.search.location);
    const metric = useSelector((state) => state.metric.isCelsius);

    const { data: forecastData, error: forecastError, isLoading: isForecastLoading } = useGetHourlyForecastQuery(
        { locationKey: location.locationKey, metric },
        { skip: !location.locationKey }
    );

    if (!location.locationKey) {
        return null;
    }

    if (isForecastLoading) return <p>Loading forecast...</p>;
    if (forecastError) return <p>Error: {forecastError.message}</p>;

    return (
        <div className="col mt-2">
            <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                    <h5 className="my-0 fw-normal">Hourly Forecast (1 hour)</h5>
                </div>
                <div className="card-body">
                    <ul className="list-unstyled mt-3 mb-4">
                        {forecastData.map((forecast) => (
                            <li key={forecast.DateTime}>
                                <h1 className="card-title pricing-card-title">{forecast.Temperature.Value} {forecast.Temperature.Unit}</h1>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HourlyForecast;