/**
 * @file old_video.js
 * This Angular module shows a message when a video becomes out of date.
 */

if (typeof angular !== 'undefined') {
  angular.module('MyModuleOldVideo', ['ngResource'])
  .factory('videoFactory', ['$resource', function($resource) {
    return $resource('/d7/api/1.0/videos.json', { nid: '@nid' });
  }])
  .controller('MyModuleOldVideoController', ['$scope', '$interval', 'videoFactory', function($scope, $interval, videoFactory) {
    var nid = Drupal.settings.MyModuleOldVideo.nid;
    var changed = Drupal.settings.MyModuleOldVideo.changed;

    $interval(function() {
      videoFactory.get({ nid: nid }, function(data) {
        if (data.videos.length) {
          var video = data.videos[0].video;
          if (video.changed > changed) {
            changed = video.changed;
            $scope.showMessage = true;
          }
        }
      });
    }, 30000);
  }]);
}
