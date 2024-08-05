# Accu-Weather

## Description

Accu-Weather is a responsive weather application that allows users to search for current weather conditions, hourly forecasts, and daily forecasts for various locations. The app leverages the AccuWeather API to provide accurate and up-to-date weather information.

## Features

- **Search Locations**: Easily search for weather information by location name.
- **Current Conditions**: View real-time weather conditions for your selected location.
- **Hourly Forecast**: Get detailed hourly forecasts to plan your day.
- **Daily Forecast**: Check the weather outlook for the upcoming days.
- **Favorites**: Save your favorite locations for quick access.
- **Metric/Imperial Units**: Toggle between Celsius and Fahrenheit for temperature display.

## Technologies Used

- **Frontend**: React, Redux, React Router
- **State Management**: Redux Toolkit
- **API**: AccuWeather API
- **Build Tool**: Webpack
- **Styling**: Bootstrap

## Installation

Steps to install and set up project:

1. **Clone the repository**:

    ```sh
    git clone https://github.com/AntonKarpeza/accu-weather-app.git
    cd accu-weather
    ```

2. **Install dependencies**:

    ```sh
    npm install
    ```

3. **Start the development server**:

    ```sh
    npm start
    ```

    This will start the app and you can access it at `http://localhost:8080`.

4. **Build for production**:

    ```sh
    npm run build
    ```

    This will bundle the application and output the files to the `dist` directory.

## Docker Setup

You can also run the application using Docker. First, ensure you have Docker installed on your machine.

1. **Build the Docker image**:

    ```sh
    docker build -t accu-weather .
    ```

2. **Run the Docker container**:

    ```sh
    docker run -p 80:80 accu-weather
    ```

    The app will be available at `http://localhost`.