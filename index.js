console.log('amit rai');

const API_KEY="ebd83c4919a839108a7d7c5626a98a91"; 
async function showWeather(){
    // let latitude=15.3333;
    // let longitude=74.0833;
    try{
        let city="goa";
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    
        const data=await response.json();
        console.log("weather data:->",data);
    
        let newPara=document.createElement('p');
        newPara.textContent=`${data?.main?.temp.toFixed(2)} °C`
    
        document.body.appendChild(newPara);
        renderWeatherInfo(data);
    }
    catch(err){
        //handle the error


    }
   

}
