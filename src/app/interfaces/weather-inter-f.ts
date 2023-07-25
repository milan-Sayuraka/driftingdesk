export interface WeatherInterF {
    coord : {
        lon: Number,
        lat: Number,
    },
    weather: Array<RawData>
    base: String,
    main: {
        temp: Number,
        feels_like: Number,
        temp_min: Number,
        temp_max: Number,
        pressure: Number,
        humidity: Number,
        sea_level: Number,
        grnd_level: Number,
        },
        visibility: Number,
        wind: {
            speed: Number,
            deg: Number,
            gust: Number,
            },
            clouds: {
            all: Number,
            },
            dt: Number,
            sys: {
            type: Number,
            id: Number,
            country: String,
            sunrise: Number,
            sunset: Number
            },
            timezone: Number,
            id: Number,
            name: String,
            cod: Number
}

export interface RawData {
    id: Number,
    main: String,
    description: String,
    icon: String,
}
