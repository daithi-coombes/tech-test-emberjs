import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    getCity(){

      const city = $('input[name=city]').val();

      this.transitionToRoute('16day', {
        queryParams: {city: city},
      })
      .then(()=>{
        $('input[name=city]').val('');
      })
    },
  },
});
