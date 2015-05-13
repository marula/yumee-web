import Ember from 'ember';

export default Ember.Controller.extend({

	breadCrumb: 'Data',

    toMonth: function(e) {
      	
    	var x = this.get('tracked.x');
		if (x===1) {
			this.set(x,"January");
		} else if (x===2) {
			this.set(x,"February");
		} else if (x==3) {
			this.set(x,"March");
		} else if (x==4) {
			this.set(x,"April");
		} else if (x==5) {
			this.set(x,"May");
		} else if (x==6) {
			this.set(x,"June");
		} else if (x==7) {
			this.set(x,"July");
		} else if (x==8) {
			this.set(x,"August");
		} else if (x==9) {
			this.set(x,"September");
		} else if (x==10) {
			this.set(x,"October");
		} else if (x==11) {
			this.set(x,"November");
		} else if (x==12) {
			this.set(x,"December");
		}
      
  }.property('x', 'tracked', 'tracked.x')
  
	      
});