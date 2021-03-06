import React from 'react'
const Daily = ({weather}) => {

  const body = document.querySelector('body')
  if (weather.current) {
    if (weather.current.condition.text.match(/cloudy/i)) {
      body.className = ''
      body.classList.add('cloudy')
    } else if (weather.current.condition.text.match(/rain/i)) {
      body.className = ''
      body.classList.add('rainy')
    } else if (weather.current.condition.text.match(/snow/i)) {
      body.className = ''
      body.classList.add('snowy')
    } else if (weather.current.condition.text.match(/wind/i)) {
      body.className = ''
      body.classList.add('windy')
    } else if (weather.current.condition.text.match(/sunny/i) || weather.current.condition.text.match(/clear/i)) {
      body.className = ''
      body.classList.add('sunny')
    }
  }
  
  const condition = hour => {
    if (hour.condition.text.match(/cloudy/i)) {
     return <i class="wi wi-day-cloudy"></i> 
    } else if (hour.condition.text.match(/mist/i)) {
      return <i class="wi wi-fog"></i> 
    } else if (hour.condition.text.match(/rain/i)) {
      return <i class="wi wi-rain"></i> 
    } else if (hour.condition.text.match(/rain/i) && (hour.condition.text.match(/wind/i))) {
      return <i class="wi-rain-wind"></i> 
    }else if (hour.condition.text.match(/overcast/i)) {
      return <i class="wi wi-cloudy"></i> 
    }else if (hour.condition.text.match(/sunny/i) || (hour.condition.text.match(/clear/i))) {
      return <i class="wi wi-day-sunny"></i> 
    }
  }    
  
  return (
    <div>
      <h1 className="text-center hourly">Check out 24-hour weather forecasting.</h1>
      {(typeof weather.location != "undefined") ? (
        <div className="my-5">
          <h2 className="text-center mb-5">{weather.location.name}</h2>
          {weather.forecast.forecastday[0].hour.map((hour, index) => {
            return (
              <div key={index} className="hours my-1 col-10 col-sm-6 mx-auto d-flex justify-content-between">
                <div className="d-flex ">
                  <i class="wi wi-time-4 my-auto fs-4"></i>
                  <p className="mx-2 py-3 my-auto">{hour.time.substring(10,20)}</p>
                </div>
                <div className="d-flex">
                  <p className="mx-2 py-3 my-auto">{hour.condition.text}</p>
                  <p className="my-auto">{condition(hour)}</p>
                </div>
                <div className="mx-md-2 py-3 d-flex justify-content-start">
                  <p className="mx-md-2 my-auto">{hour.temp_c}</p>
                  <i class="wi wi-celsius my-auto"></i>
                </div>
              </div>
            )
          })}
        </div>
        
        ) : ('')}
    </div>
  )
}

Daily.propTypes = {

}

export default Daily
