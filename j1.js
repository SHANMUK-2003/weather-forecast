const createWeatherHTML = (currentDay) => {
console.log(currentDay);
return `<h2>day:${weekDays[new Date().getDay()]}
<h2>Condition: ${currentDay.weather[0].description}</h2>
<h2>Temperature: 
${kelvinToFahrenheit(currentDay.main.temp)}&deg;C</h2>
<img 
src="https://openweathermap.org/img/wn/${currentDay.weather[0].icon}@2x.png">`
;
};
const createWeatherHTML1 = (currentDay1) => {
console.log(currentDay1);
return `<h2 class="feels"><img src="images/hot.png" 
id="s">temp_max:${kelvinToFahrenheit(currentDay1.list[8].main.feels_like)}&deg
;C</h2>
<h2 class="min"><img src="images/cold.png" 
id="s">temp_min:${kelvinToFahrenheit(currentDay1.list[8].main.temp_min)}&deg;C
</h2>
<h2 class="temp"><img src="images/temperatures.png" 
id="s">Temperature:${kelvinToFahrenheit(currentDay1.list[8].main.temp)}&deg;C<
/h2>
<h2 class="cond"><img src="images/sun.png" 
id="s">Condition:${currentDay1.list[8].weather[0].main}</h2>
<h2 class="pressure"><img id="s" 
src="images/pressure.png">pressure:${currentDay1.list[8].main.pressure}</h2>
<h2 class="sea"><img src="images/sea-level.png" 
id="s">sea_level:${currentDay1.list[8].main.sea_level}</h2>
<h2 class="ground"><img src="images/ground-level.png" 
id="s">ground_level:${currentDay1.list[8].main.grnd_level}</h2> `;
};
const createWeatherHTML2 = (currentDay2) => {
console.log(currentDay2);
return `<h2 class="feels"><img src="images/hot.png" 
id="s">temp_max:${kelvinToFahrenheit(currentDay2.list[16].main.feels_like)}&de
g;C</h2>
<h2 class="min"><img src="images/cold.png" 
id="s">temp_min:${kelvinToFahrenheit(currentDay2.list[16].main.temp_min)}&deg;
C</h2>
<h2 class="temp"><img src="images/temperatures.png" 
id="s">Temperature:${kelvinToFahrenheit(currentDay2.list[8].main.temp)}&deg;C<
/h2>
<h2 class="cond"><img src="images/sun.png" id="s">Condition: 
${currentDay2.list[16].weather[0].main}</h2>
<h2 class="pressure"><img id="s" 
src="images/pressure.png">pressure:${currentDay2.list[16].main.pressure}</h2>
<h2 class="sea"><img src="images/sea-level.png" 
id="s">sea_level:${currentDay2.list[16].main.sea_level}</h2>
<h2 class="ground"><img src="images/ground-level.png" 
id="s">ground_level:${currentDay2.list[16].main.grnd_level}</h2> `;
};
const createWeatherHTML3 = (currentDay3) => {
console.log(currentDay3);
return `<h2 class="feels"><img src="images/hot.png" 
id="s">temp_max:${kelvinToFahrenheit(currentDay3.list[24].main.feels_like)}&de
g;C</h2>
<h2 class="min"><img src="images/cold.png" 
id="s">temp_min:${kelvinToFahrenheit(currentDay3.list[24].main.temp_min)}&deg;
C</h2>
<h2 class="temp"><img src="images/temperatures.png" 
id="s">Temperature:${kelvinToFahrenheit(currentDay3.list[8].main.temp)}&deg;C<
/h2>
<h2 class="cond"><img src="images/sun.png" 
id="s">Condition:${currentDay3.list[24].weather[0].main}</h2>
<h2 class="pressure"><img id="s" 
src="images/pressure.png">pressure:${currentDay3.list[24].main.pressure}</h2>
<h2 class="sea"><img src="images/sea-level.png" 
id="s">sea_level:${currentDay3.list[24].main.sea_level}</h2>
<h2 class="ground"><img src="images/ground-level.png" 
id="s">ground_level:${currentDay3.list[24].main.grnd_level}</h2> `;
};
const createWeatherHTML4 = (currentDay4) => {
console.log(currentDay4);
return `<h2 class="feels"><img src="images/hot.png" 
id="s">temp_max:${kelvinToFahrenheit(currentDay4.list[32].main.feels_like)}&de
g;C</h2>
<h2 class="min"><img src="images/cold.png" id="s"> 
temp_min:${kelvinToFahrenheit(currentDay4.list[32].main.temp_min)}&deg;C</h2>
<h2 class="temp"><img src="images/temperatures.png" id="s"> 
Temperature: ${kelvinToFahrenheit(currentDay4.list[8].main.temp)}&deg;C</h2>
<h2 class="cond"><img src="images/sun.png" id="s"> Condition: 
${currentDay4.list[32].weather[0].main}</h2>
<h2 class="pressure"><img id="s" src="images/pressure.png" > 
pressure:${currentDay4.list[32].main.pressure}</h2>
<h2 class="sea"><img src="images/sea-level.png" id="s"> 
sea_level:${currentDay4.list[32].main.sea_level}</h2>
<h2 class="ground"><img src="images/ground-level.png" 
id="s"> ground_level:${currentDay4.list[32].main.grnd_level}</h2> `;
};
const createWeatherHTML5 = (currentDay5) => {
console.log(currentDay5);
return `<h2 class="feels"><img src="images/hot.png" 
id="s">temp_max:${kelvinToFahrenheit(currentDay5.list[39].main.feels_like)}&de
g;C</h2>
<h2 class="min"><img src="images/cold.png" 
id="s">temp_min:${kelvinToFahrenheit(currentDay5.list[39].main.temp_min)}&deg;
C</h2>
<h2 class="temp"><img src="images/temperatures.png" 
id="s">temp_max:${kelvinToFahrenheit(currentDay5.list[39].main.temp_max)}&deg;
C</h2>
<h2 class="cond"><img src="images/sun.png" id="s">Condition: 
${currentDay5.list[39].weather[0].main}</h2>
<h2 class="pressure"><img id="s" 
src="images/pressure.png">pressure:${currentDay5.list[39].main.pressure}</h2>
<h2 class="sea"><img src="images/sea-level.png" 
id="s">sea_level:${currentDay5.list[39].main.sea_level}</h2>
<h2 class="ground"><img src="images/ground-level.png" 
id="s">ground_level:${currentDay5.list[39].main.grnd_level}</h2> `;
};
/*const createWeatherHTML6 = (currentDay6) => {
console.log(currentDay6);
return 
`<h2>feels_like:${kelvinToFahrenheit(currentDay6.list[0].main.feels_like)}&deg
;C</h2>
<h2>temp_min:${kelvinToFahrenheit(currentDay6.list[0].main
.temp_min)}&deg;C</h2>
<h2>temp_max:${kelvinToFahrenheit(currentDay6.list[0].main
.temp_max)}&deg;C</h2>
<h2>Temperature: 
${kelvinToFahrenheit(currentDay6.list[0].main.temp)}&deg;C</h2>
<h2>Condition: ${currentDay6.list[0].weather[0].main}</h2>
<h2>pressure:${currentDay6.list[0].main.pressure}</h2>
<h2>sea_level:${currentDay6.list[0].main.sea_level}</h2>
<h2>ground_level:${currentDay6.list[0].main.grnd_level}</h2> 
`;
};
/*const createWeatherHTML7 = (currentDay7) => {
console.log(currentDay7);
return ` <h2>Condition: ${currentDay7.list[39].weather[0].main}</h2>
<h2>day:${weekDays[new Date().getDay()+7]}
<h2>Condition: ${currentDay7.list[39].weather[0].description}</h2>
<h2>Temperature: 
${kelvinToFahrenheit(currentDay7.list[39].main.temp)}&deg;F</h2>
<img 
src="https://openweathermap.org/img/wn/${currentDay7.list[39].weather[0].icon}
@2x.png">`;
};
const createWeatherHTML8 = (currentDay8) => {
console.log(currentDay8);
return ` <h2>Condition: ${currentDay8.list[39].weather[0].main}</h2>
<h2>day:${weekDays[new Date().getDay()+8]}
<h2>Condition: ${currentDay8.list[39].weather[0].description}</h2>
<h2>Temperature: 
${kelvinToFahrenheit(currentDay8.list[39].main.temp)}&deg;F</h2>
<img 
src="https://openweathermap.org/img/wn/${currentDay8.list[39].weather[0].icon}
@2x.png">`;
};*/
const createWeatherHTML12 = (currentDay12) => {
//var inputValue=currentDay3.[0].lat
console.log(currentDay12);
return `<h2>co:${currentDay12.list[0].components.co} &μg/m3</h2>
<h2>no:${currentDay12.list[0].components.no} μg/m3</h2>
<h2>no2:${currentDay12.list[0].components.no2} μg/m3</h2>
<h2>o3:${currentDay12.list[0].components.o3} μg/m3</h2>
<h2>so2:${currentDay12.list[0].components.so2} μg/m3</h2>`;
};
/*const createWeatherHTML3 = (currentDay3) => {
return `<img src=${currentDay3.hits[0].webformatURL}>`
};*/
const kelvinToFahrenheit = (k) => (k - 273.15).toFixed(0);
