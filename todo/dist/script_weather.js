//APIはopenweatherを使用

const API_KEY = '76b1671d47fe38f7c5b88d47bebec9d5'

const weather = new Vue({
  el: '#weather_box',
  data: {
    city: null,
    temp: null,
    temp_min: null,
    temp_max: null,
    humidity: null,
    condition: {
      main: null
    }
  },
  mounted: function(){
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=Tokyo,jp&units=metric&appid='+API_KEY)
    .then(function(response){
      this.city = response.data.name
      this.temp = response.data.main.temp
      this.temp = response.data.main.temp
      this.temp_min = response.data.main.temp_min
      this.temp_max = response.data.main.temp_max
      this.humidity = response.data.main.humidity
      this.condition = response.data.weather[0]
    }.bind(this))
    .catch(function(error){
      console.log(error)
    })
  },
  filters: {
    roundUp(value){
      return Math.ceil(value)
    }
  }
})
