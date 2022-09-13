const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
const dataHide = document.querySelector(".middle_layer");
dataHide.classList.add("data_hide");



const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;

    if(cityVal === ""){
        city_name.innerText = "Please write the city name:";
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=871cc41e67329ff56f239a208f35793c`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            fh_temp = arrData[0].main.temp;
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp.innerText = Math.floor(fh_temp - 273.15) + "\u00B0" + "C" ;

            const tempMood = arrData[0].weather[0].main;

            // Conditions to check wether weather sunny, rainy or etc

            if(tempMood == "Clear"){
                temp_status.innerHTML ="<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }
            else if(tempMood == "Clouds"){
                temp_status.innerHTML ="<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            }
            else if(tempMood == "Rain"){
                temp_status.innerHTML ="<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
            }
            else{
                temp_status.innerHTML ="<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            }

            dataHide.classList.remove("data_hide");

        } catch{
            city_name.innerText = "Please write the valid city name:";
            dataHide.classList.add("data_hide");
        }
    }
}

submitBtn.addEventListener("click", getInfo);