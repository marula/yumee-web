import Ember from 'ember';
var google = window.google;

export default Ember.Component.extend({
  insertMap: function() {
    var container = this.$(".map-canvas");

    var options = {
      center: new google.maps.LatLng(this.get("latitude"),
      this.get("longitude")),
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.set('map', new google.maps.Map(container[0], options));
    this.set('markerCache', []);
    this.setMarkers();
  }.on('didInsertElement'),

  coordinatesChanged: function() {
    var map = this.get('map');

    if (map) {
      map.setCenter(new google.maps.LatLng(this.get('latitude'), this.get('longitude')));
    }
  }.observes('latitude', 'longitude'),

  setMarkers: function() {
    var map = this.get('map'),
        markers = this.get('markers'),
        markerCache = this.get('markerCache');

    markerCache.forEach(function(marker) { marker.setMap(null); }); // Remove all existing markers
    markers.forEach(function(marker){
      var gMapsMarker = new google.maps.Marker({
        position: new google.maps.LatLng(marker.latitude, marker.longitude),
        map: map
      });

      markerCache.pushObject(gMapsMarker); // Add this marker to our cache
    }, this);
  }.observes('markers.@each.latitude', 'markers.@each.longitude')
});
