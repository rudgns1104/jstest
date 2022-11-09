const API_KEY = "28dd33e1191a84c0458465c5fea75c51";
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  });

}

function onGeoError(){
  alert("당신의 위치를 찾을 수 없습니다. 날씨를 알 수 없습니다.");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);