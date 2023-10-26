// console.log("Working");
const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');

const temp = document.getElementById('temp');
const temp_status  = document.getElementById('temp_status');

const dataHide = document.querySelector('.middle_layer');

const getInfo = async (event)=>{
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === '') {
        city_name.innerText = "Please Provide City as Input";
        dataHide.classList.add('data_hide');
    }else{
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=cfa45066bc0053972d93113dfdb3f172`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            const arrData = [data];
            
            city_name.innerText = `${arrData[0].name} ${arrData[0].sys.country}`;
            temp.innerHTML =`${arrData[0].main.temp}<sup>o</sup> `;
            temp_status.innerText = arrData[0].weather[0].main;

            const tempMood = arrData[0].weather[0].main;

            // Change Weather Icon According to Mood

            if (tempMood == 'Clear') {
                temp_status.innerHTML = " <i class='fa-solid fa-sun' style='color: #fbff05;'></i>";
            }else if (tempMood == 'Haze'){
                temp_status.innerHTML = "<i class='fa-solid fa-cloud-sun' style='color: #86898d;'></i>";
            }else if (tempMood == 'Rain'){
                temp_status.innerHTML = "<i class='fa-solid fa-cloud-rain' style='color: #99bfd6;'></i>"
            }else if(tempMood == 'Smoke'){
                temp_status.innerHTML = "<i class='fa-solid fa-smog' style='color: #8a95a8;'></i>"
            }else{
                temp_status.innerHTML = "<i class='fa-solid fa-cloud' style='color: #ffffff;'></i>"
            }
            dataHide.classList.remove('data_hide');

        } catch (e) {
            city_name.innerText = "Please Provide Valid City";
            dataHide.classList.add('data_hide');
        }

    }
}


submitBtn.addEventListener('click', getInfo );

let day = document.getElementById('day');
const getCurrentDay = () =>{
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tueday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Satday";

    let currentTime = new Date();
    let days = weekday[currentTime.getDay()];

    day.innerHTML = days; // This Gives Us Today's Day.
}

getCurrentDay();

let today_date = document.getElementById('today_date');
const getCurrentDate = () =>{
    var Months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];

    let currentDate = new Date();
    var month = Months[currentDate.getMonth()];
    var date = currentDate.getDate();

    let DT = `${date} ${month}`;
    today_date.innerHTML = DT; // This Gives Us Today's Date.

}


getCurrentDate();
