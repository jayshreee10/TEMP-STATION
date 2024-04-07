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
        <div
          className="FirstDataContainer"
          style={{
            height: "40vh",
            width: "85vw",
            backgroundColor: "yellowgreen",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
           
          }}
        >
          {/* card 1 = location + day + date + time */}
          <div
            className="Card1"
            style={{ width: "30vw", height: "30vh", backgroundColor: "pink",position:"absolute",left:"10vw",display:"flex" }}
          >
            <div className="loaction"> Odisha </div>
            <div className="day"> today</div>
            <div className="date"> 4/5/6</div>
            <div className="time">3.56AM</div>
          </div>

          {/* card 2 = search bar */}
          <div
            className="Card2"
            style={{
              width: "26vw",
              height: "10vh",
              backgroundColor: "pink",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position:"absolute",
              right:"8vw",
              top :"25vh"
            }}
          >
            <input
              type="search"
              name="SearchBar"
              id="SearchBar"
              placeholder=" Enter City Name"
              style={{
                width: "300px",
                height: "36px",
                backgroundColor: "white",
                color: "black",
                borderRadius: "6px",
              }}
            />
            <button
              type="button"
              value="Search"
              style={{
                backgroundColor: "navy",
                opacity:"80%",
                width: "75px",
                height: "36px",
                marginLeft: "-75px",
                borderRadius: "7px",
                color:"white",
                textAlign:"center",
                fontSize:"12px",
              }}
            >Search</button>
          </div>
        </div>

        {/* data container box two  : card 3 = temp + celcius + weather condition (cloudy/sunny) ; card 4 = weather gif ; card 5 = extra data (feels like + min temp + max temp  )  */}
        <div className="SecondDataContainer" style={{ display: "flex" }}>
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
