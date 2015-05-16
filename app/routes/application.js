import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
	  this.get("session").fetch().then(function() {
		  console.log('session fetched');
	  }, function() {
		  console.log('no session to fetch');
	  });//catch(function() {});
  },

  actions: {
    signIn: function(authWith) {
      let session = this.get("session");
		session.open("firebase", { authWith: authWith});
    },
	signOut: function() {
      this.get("session").close();
    }
  }
});
