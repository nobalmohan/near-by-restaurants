(function() {
'use strict';
angular.module('nearbyrestaurants')
        .controller('mainController',mainController);
        function mainController($scope, $http) {

          $scope.options = [
            { label: 'Distance', value: 1 },
            { label: 'Price', value: 2 },
            { label: 'Rating', value: 2 }
          ];

          $scope.defaultSelected = $scope.options[0];

          $scope.ApiResponse= [
            {
               "geometry" : {
                  "location" : {
                     "lat" : -33.867591,
                     "lng" : 151.201196
                  }
               },
               "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/travel_agent-71.png",
               "id" : "a97f9fb468bcd26b68a23072a55af82d4b325e0d",
               "name" : "Australian Cruise Group",
               "opening_hours" : {
                  "open_now" : true,
                  "weekday_text" : []
               },
               "photos" : [
                  {
                     "height" : 1607,
                     "html_attributions" : [],
                     "photo_reference" : "CnRnAAAAnC7Wt1zfRTWCNdzvsoB-7kCOBRiCCJOkTB7-jv2zjFFJIq-aMYkJMxh4bAj1xyC0b9OA0qPDe51Nh74ZuM8OA-IIAodvpa93osF3swBnHlKFh75sFgCt14zAF1HRyqO7tIWpW6dGQHHDVOCHa9-SKBIQIRvI9heFOjFmhw9o3lvI3BoUb2HkcD8TofQkvBZO-lOqsLD8oXM",
                     "width" : 1969
                  }
               ],
               "place_id" : "ChIJrTLr-GyuEmsRBfy61i59si0",
               "reference" : "CnRqAAAAeYTOFlC9rzg3ZdybDJeIXDQjhtVjbFsXV4ib_jNeKk5jkRn1NRyPiCJWyqsrsDeZiBSJuhaXpOoovEG13fOuf8pWOROw1_oI3NCXjd3FfADJ76I07xsDlqbYgp4aTP2EK0jMW-P5RWh0MCpFwaG5HRIQBens_kUxXcvIuPbBdZHVUhoU_uSLrUH8P1DMvnrHbX5lPISkpTQ",
               "scope" : "GOOGLE",
               "types" : [ "travel_agency", "restaurant", "food", "establishment" ],
               "vicinity" : "32 The Promenade, King Street Wharf 5, Sydney"
            }
          ];

          var ApiKey = "AIzaSyAAQDBkknB7GXdWC0v9g-_01L3WfQADxvQ";
          var GoogleApiUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=";
          var ApiUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=cruise&key=AIzaSyAAQDBkknB7GXdWC0v9g-_01L3WfQADxvQ";

          //var photoRef = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference="++"&key="+ApiKey;

            $http.get(ApiUrl).
                success(function(data, status, headers, config) {
                  console.log("sucess!");
                  console.log(data.results);
                }).
                error(function(data, status, headers, config) {
                  console.log("error !");
                });

        };
})();
