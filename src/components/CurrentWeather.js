function Currentweather({ currentWeather, name }) {
    return (
      <div>
        <div className="containmain">
          <div className="conatinimg">
            <img
              className="MainIMg"
              src={require(`../logo/cloud/${currentWeather.weather[0].main}.png`)}
            />
          </div>
          <div className="containname">
            <p className="cityName">{name}</p>
          </div>
          <div className="containtemp">
            <div className="tampNow">
              <p className="temp">{parseInt(currentWeather.temp.day - 273)}°</p>
            </div>
            <div className="prevtemp">
              <div className="maxtemp">
                <p>Max {parseInt(currentWeather.temp.max - 273)}°</p>
              </div>
              <div className="mintemp">
                <p>Min {parseInt(currentWeather.temp.min - 273)}°</p>
              </div>
            </div>
          </div>
          <div className="containdetails">
            <p className="details">{currentWeather.weather[0].main}</p>
          </div>
          <div>
            <div className="containdate">
              <p className="date">
                {new Date().toLocaleString("en-uk", { weekday: "long" })}
              </p>
            </div>
          </div>
          <div>
            <hr />
          </div>
          <div className="more">
            <div className="windcontain">
              <div>
                <i className="fa-solid fa-wind"></i>
              </div>
  
              <div>
                <p>{parseInt(currentWeather.speed * 1.609344)} km/h</p>
              </div>
  
              <div>
                <p>wind</p>
              </div>
            </div>
  
            <div className="humiditycontain">
              <div>
                <i className="fa-solid fa-droplet"></i>
              </div>
  
              <div>
                <p>{currentWeather.humidity}%</p>
              </div>
  
              <div>
                <p>humidity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Currentweather;
  