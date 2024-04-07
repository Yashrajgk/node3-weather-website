const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.weatherapi.com/v1/current.json?key=7638c9ff5f43493f837115754240604&q=London&aqi=no' + latitude + ',' + longitude

    request({url, json: true }, (error, {body})=>{
        if(error){
            callback( 'Unable to connect to weather service', undefined)
        }else if(body.error){
            callback('Unable to find the location' , undefined)
        }else{
            callback(undefined, body.current + ' It is currently ' + body.current.temp_f + ' degress out. There is a ' + body.current.precip_mm + '% chance of rain.')
        }
    })
}

module.exports = forecast