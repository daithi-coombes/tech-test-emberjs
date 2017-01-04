export default function() {

  this.get('http://api.openweathermap.org/data/2.5/forecast/daily', function(){
    return {
      data: []
    };
  });
}
