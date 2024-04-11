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
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {/*  data container box one : card 1 = location + date + time + day ; card 2 = search bar   */}
        <div
          className="FirstDataContainer"
          style={{
            height: "25vh",
            width: "85vw",
            position: "absolute",
            top: "11vh",
            backgroundColor: "yellowgreen",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          {/* card 1 = location + day + date + time */}
          <div
            className="Card1"
            style={{
              width: "25vw",
              height: "20vh",
              backgroundColor: "pink",
              position: "absolute",
              left: "0vw",
              top: "0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="loaction"
              style={{
                width: "15vw",
                height: "10vh",
                backgroundColor: "blue",
                fontSize: "46px",
                fontWeight: "400",
                display:"flex",
                alignItems:"center",
                justifyContent:"center"
              }}
            >
              {" "}
              Odisha{""}
            </div>
            <div
              className="locationData"
              style={{
                display: "flex",
                width: "15vw",
                height: "7vh",
                backgroundColor: "red",
                display:"flex",
                alignItems:"center",
                justifyContent:"space-evenly",

              }}
            >
              <div className="day"><b>Today</b> | </div>
              <div className="date"> <b>4/5/6</b> | </div>
              <div className="time"><b>3.56AM</b> </div>
            </div>
          </div>

          {/* card 2 = search bar */}
          <div
            className="Card2"
            style={{
              width: "26vw",
              height: "10vh",
              backgroundColor: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              right: "0",
              top: "0",
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
                opacity: "60%",
                color: "black",
                borderRadius: "6px",
              }}
            />
            <button
              type="button"
              value="Search"
              style={{
                backgroundColor: "navy",
                opacity: "80%",
                width: "73px",
                height: "34px",
                marginLeft: "-75px",
                borderRadius: "6px",
                color: "white",
                textAlign: "center",
                fontSize: "12px",
              }}
            >
              Search
            </button>
          </div>
        </div>

        {/* data container box two  : card 3 = temp + celcius + weather condition (cloudy/sunny) ; card 4 = weather gif ; card 5 = extra data (feels like + min temp + max temp  )  */}
        <div
          className="SecondDataContainer"
          style={{
            display: "flex",
            height: "50vh",
            width: "85vw",
            backgroundColor: "yellow",
          }}
        >
          <div className="Card3">
            {/* card 3.1 = temp */}
            <div
              className="Temperature"
              style={{
                width: "20vw",
                height: "15vh",
                position: "absolute",
                left: "10vw",
                top: "37vh",
                backgroundColor: "black",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "80px",
              }}
            >
              {" "}
              40 C{" "}
            </div>

            {/* card 3.2 = Unit in celcius
            <div className="Unit"> C|F</div> */}

            {/* card 3.2 = weather condition (cloudy/sunny) */}
            <div
              className="WeatherCondition"
              style={{
                width: "20vw",
                height: "5vh",
                position: "absolute",
                left: "10vw",
                top: "52vh",
                backgroundColor: "blue",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "20px",
              }}
            >
              cloudy
            </div>
          </div>

          {/* card 4 = weather gif */}
          <div className="Card4" style={{
            display: "flex",
            flexDirection:"column",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            right: "18.5vw",
            top: "36vh",
            height: "25vh",
            width: "25vw",
            backgroundColor: "brown",
          }}>gif url</div>

          {/* card 5 = extra data (feels like + min temp + max temp  )   */}
          <div className="Card5"  style={{
            display: "flex",
            flexDirection:"column",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            right: "7.5vw",
            top: "40vh",
            height: "16vh",
            width: "11vw",
            backgroundColor: "red",
          }}>
            <div className="FeelsLike"><b>feels like</b></div>
            <div className="MinTemp"><b>min temp</b></div>
            <div className="MaxTemp"><b>max temp</b></div>
          </div>
        </div>

        {/* data container box three : card 6,7,8,9,10= extra data (  6: (sunrise + sunset) + 7: pressure + 8: humidity + 9: wind + 10: (sea_level + grnd_level) ) */}
        <div
          className="ThirdDataContainer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            height: "25vh",
            width: "85vw",
            backgroundColor: "red",
          }}
        >
          <div
            className="Card6"
            style={{
              height: "22vh",
              width: "15vw",
              backgroundColor: "black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "15px",
              flexDirection: "column",
            }}
          >
            {/* Card 6: (sunrise + sunset) */}
            <div className="SunShine">image</div>
            <div className="SunShine">sunrise</div>
            <div className="SunShine">sunset</div>
          </div>

          {/* Card 7: Pressure */}
          <div
            className="Card7"
            style={{
              height: "22vh",
              width: "15vw",
              backgroundColor: "black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "15px",
              flexDirection: "column",
            }}
          >
             <div className="SunShine">image</div>
            <div className="SunShine">pressure</div>
          </div>

          {/* Card 8: Humidity */}
          <div
            className="Card8"
            style={{
              height: "22vh",
              width: "15vw",
              backgroundColor: "black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "15px",
              flexDirection: "column",
            }}
          >
             <div className="SunShine">image</div>
            <div className="SunShine">Humidity</div>
          </div>

          {/* Card 9: wind */}
          <div
            className="Card9"
            style={{
              height: "22vh",
              width: "15vw",
              backgroundColor: "black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "15px",
              flexDirection: "column",
            }}
          >
             <div className="SunShine">image</div>
            <div className="SunShine">wind</div>
          </div>

          {/* Card 10: sea_level + grnd_level  */}
          <div
            className="Card10"
            style={{
              height: "22vh",
              width: "15vw",
              backgroundColor: "black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "15px",
              flexDirection: "column",
            }}
          >
             <div className="SunShine">image</div>
            <div className="SunShine">sea_level</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TempStation;
