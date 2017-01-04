import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({

  beforeModel(transition){
    const params = transition.queryParams;

    if(!params || !params.city){
      console.error('City param not passed. Redirecting to index');
      this.transitionTo('index');
    }

    return params;
  },

  model(model, transition){

    const city = transition.queryParams.city,
      APPID = config.APP.openweathermap.appid,
      urlQry = 'q='+city+'&units=metric&cnt=16&APPID='+APPID;

    // http://api.openweathermap.org/data/2.5/forecast/daily?q=Dublin,IRL&cnt=16&units=metric&APPID=
    return Ember.$.getJSON('http://api.openweathermap.org/data/2.5/forecast/daily?'+urlQry)
      .then(res => {
        // format data and return.
        console.log('res: ', res);
        return res;
      });
    }
});
