class WeatherRequest {
  constructor(cityName) {
    this._city = cityName;
    this._url = `http://api.openweathermap.org/data/2.5/weather?q=${this._city}&units=metric&APPID=5d41c207eda1d45afdc667364a196b3c`;
  }

  get city() {
    return this._city;
  }

  set city(newCity) {
    this._city = newCity;
  }

  promiseRequest() {
    return fetch(this._url)
      .then((response) => response.json())
      .catch(console.error);
  }
}

class BirthplaceWeather extends WeatherRequest {
  constructor(cityName) {
    super(cityName);
    this.temperature;
  }

  getTemperature() {
    super.promiseRequest().then((data) => (this.temperature = data.main.temp));
  }
}

const BIRTH_PLACE_RESPONSE = new BirthplaceWeather("Minsk");

class RandomCityWeather extends BirthplaceWeather {
  constructor(citiesArray) {
    super();
    this.dataObject;
    this._city = citiesArray[Math.floor(Math.random() * citiesArray.length)];
    this._url = `http://api.openweathermap.org/data/2.5/weather?q=${this._city}&APPID=5d41c207eda1d45afdc667364a196b3c`;
  }

  getDataObj() {
    super.promiseRequest().then((data) => (this.dataObject = data));
  }
}

const cities = [
  "Minsk",
  "Moscow",
  "Kiev",
  "Boston",
  "Chicago",
  "Babruisk",
  "Mineapolis",
];

const RANDOM_CITY_RESPONSE = new RandomCityWeather(cities);
