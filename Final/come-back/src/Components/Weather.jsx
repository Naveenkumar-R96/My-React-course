const Weather = () => {
  let temp = 26;
  if (temp < 15) {
    return <h1>it cold outside</h1>;
  } else if (temp < 25) {
    return <h1>its good temperatures</h1>;
  } else {
    return <h1>its not good</h1>
  }
  return <div>
    <h1>adf
        
    </h1>
  </div>;
};

export default Weather;
