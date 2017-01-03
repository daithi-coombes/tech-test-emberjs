import Ember from 'ember';

export default Ember.Route.extend({
    actions: {

      getCity(){

        const city = Ember.$('input[name=city]').val();

        console.log('transitioning city param: ', city);
        this.transitionTo('16day', {
          queryParams: {city: city},
        })
        .then(()=>{
          Ember.$('input[name=city]').val('');
        });
      },
    },
});
