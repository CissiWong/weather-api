
fetch("http://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=6ebf8bc4714fd68bf59d617766e48f9f")
.then((response) => {
  return response.json()
}).then((json) => {
  document.getElementById("city").innerHTML = (json.name)
  document.getElementById("temp").innerHTML = (json.main.temp)
  document.getElementById("main").innerHTML = (json.weather[0].description)
})
