import Ember from 'ember';

// http://api.openweathermap.org/data/2.5/weather?q=Dublin,IRL&appid=
const mockModel = {"coord":{"lon":-6.25,"lat":53.35},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"base":"stations","main":{"temp":279.64,"pressure":1013,"humidity":93,"temp_min":279.15,"temp_max":280.15},"visibility":10000,"wind":{"speed":3.01,"deg":150.501},"clouds":{"all":75},"dt":1481763600,"sys":{"type":1,"id":5237,"message":0.0138,"country":"IE","sunrise":1481790861,"sunset":1481817978},"id":2962486,"name":"Mountjoy","cod":200};

export default Ember.Route.extend({

  model(){
    return mockModel;
  }
});
