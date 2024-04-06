function TempStation() {
  return (
    <div
      className="Root"
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "aliceblue",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* // parent data container */}
      <div
        className="Container"
        style={{
          height: "80vh",
          width: "90vw",
          backgroundColor: "#000D49",
          borderRadius: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {/*  data container box one : card 1 = location + date + time + day ; card 2 = search bar   */}
        <div className="FirstDataContainer">
          {/* card 1 = location + day + date + time */}
          <div className="Card1">
            <div className="loaction"> Odisha </div>
            <div className="day"> today</div>
            <div className="date"> 4/5/6</div>
            <div className="time">3.56AM</div>
          </div>

          {/* card 2 = search bar */}
          <div className="Card2" style={{ position:"absolute" ,width:"50vw"}}>
            <input
              type="search"
              name="SearchBar"
              id="SearchBar"
              placeholder=" Enter City Name"
              style={{
                width: "300px",
                height: "35px",
                backgroundColor: "white",
                color: "black",
                borderRadius: "6px",
              }}
            />
            <button
              type="button"
              style={{
                backgroundColor: "navy",
                width: "75px",
                height: "35px",
                marginLeft:"-75px",
              
              }}
            ></button>
          </div>
        </div>

        {/* data container box two  : card 3 = temp + celcius + weather condition (cloudy/sunny) ; card 4 = weather gif ; card 5 = extra data (feels like + min temp + max temp  )  */}
        <div className="SecondDataContainer">
          <div className="Card3">
            {/* card 3.1 = temp */}
            <div className="Temperature"> 40 </div>

            {/* card 3.2 = Unit in celcius*/}
            <div className="Unit"> C|F</div>

            {/* card 3.1 = weather condition (cloudy/sunny) */}
            <div className="WeatherCondition">cloudy</div>
          </div>

          {/* card 4 = weather gif */}
          <div className="Card4">gif url</div>

          {/* card 5 = extra data (feels like + min temp + max temp  )   */}
          <div className="Card5">
            <div className="FeelsLike">feels like</div>
            <div className="MinTemp">min temp</div>
            <div className="MaxTemp">max temp</div>
          </div>
        </div>

        {/* data container box three : card 6,7,8,9,10= extra data (  6: (sunrise + sunset) + 7: pressure + 8: humidity + 9: wind + 10: (sea_level + grnd_level) ) */}
        <div className="ThirdDataContainer">
          <div className="Card6">
            {/* Card 6: (sunrise + sunset) */}
            <div className="SunShine"></div>
          </div>

          {/* Card 7: Pressure */}
          <div className="Card7"> pressure </div>

          {/* Card 8: Humidity */}
          <div className="Card8"></div>

          {/* Card 9: wind */}
          <div className="Card9"></div>

          {/* Card 10: sea_level + grnd_level  */}
          <div className="Card10"></div>
        </div>
      </div>
    </div>
  );
}
export default TempStation;
