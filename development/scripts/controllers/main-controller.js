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

          //$scope.ApiResponse='{"html_attributions" : [],"results" : [{"geometry" : {"location" : { "lat" : -33.867591, "lng" : 151.201196 } }, "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/travel_agent-71.png",          "id" : "a97f9fb468bcd26b68a23072a55af82d4b325e0d", "name" : "Australian Cruise Group",          "opening_hours" : { "open_now" : true, "weekday_text" : [] },         "photos" : [             {                "height" : 1607,                "html_attributions" : [],                "photo_reference" : "CnRnAAAAnC7Wt1zfRTWCNdzvsoB-7kCOBRiCCJOkTB7-jv2zjFFJIq-aMYkJMxh4bAj1xyC0b9OA0qPDe51Nh74ZuM8OA-IIAodvpa93osF3swBnHlKFh75sFgCt14zAF1HRyqO7tIWpW6dGQHHDVOCHa9-SKBIQIRvI9heFOjFmhw9o3lvI3BoUb2HkcD8TofQkvBZO-lOqsLD8oXM",                "width" : 1969             }          ],          "place_id" : "ChIJrTLr-GyuEmsRBfy61i59si0",          "reference" : "CnRqAAAAeYTOFlC9rzg3ZdybDJeIXDQjhtVjbFsXV4ib_jNeKk5jkRn1NRyPiCJWyqsrsDeZiBSJuhaXpOoovEG13fOuf8pWOROw1_oI3NCXjd3FfADJ76I07xsDlqbYgp4aTP2EK0jMW-P5RWh0MCpFwaG5HRIQBens_kUxXcvIuPbBdZHVUhoU_uSLrUH8P1DMvnrHbX5lPISkpTQ",          "scope" : "GOOGLE",          "types" : [ "travel_agency", "restaurant", "food", "establishment" ],          "vicinity" : "32 The Promenade, King Street Wharf 5, Sydney"       },       {          "geometry" : {             "location" : {                "lat" : -33.870943,                "lng" : 151.190311             }          },          "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",          "id" : "e644f7f34cf875b9919c6548f1b721947362850a",          "name" : "Lunch Cruise with Jazz on Sydney Harbour",          "opening_hours" : {             "open_now" : false,             "weekday_text" : []          },          "photos" : [             {                "height" : 565,                "html_attributions" : [],                "photo_reference" : "CnRnAAAAZ3ZI_sHVbgqVSbfuNKx1w6qOak_aRF9rJSrdvzB8xq-sJQ8pBsjw86xTrYRg58NKSUlw0F0pc6i4Up-gNGq25t4wxlYz03uNw2e1FvBFqwW56GgMR5W90P14picbYLO0ialSpxWfQYERSqtLgY9WMxIQRdOgx5x4XCVKJh9X1poWqxoU4aC5kdHBlQ8fniCJwDaVmCXWHv0",                "width" : 850             }          ],          "place_id" : "ChIJLfySpTOuEmsRPCRKrzl8ZEY",          "reference" : "CoQBewAAAGeqyeFtR25exc39I1ehqORy8mqOoZQ2ZdNIEvNwrWOUP1vc6CP1iPNvkBqunz5G3XjxysugNXTWXbU38IC5WKvPq19yDzMeUexz2qQFPLy-43jEQUX3okaS2RkNUey8Fh0N2McNmOU1Wn8ygHkMmYc_RqauGM_Khk4pRVcHR5nwEhD-6UKppla7NCUpOp-BFFnMGhQ510Y9ipnVK1QtTvW86i1FqKRVuQ",          "scope" : "GOOGLE",          "types" : [ "bar", "restaurant", "food", "establishment" ],          "vicinity" : "37 Bank St, Pyrmont"       },       {          "geometry" : {             "location" : {                "lat" : -33.86879,                "lng" : 151.194217             }          },          "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",          "id" : "21a0b251c9b8392186142c798263e289fe45b4aa",          "name" : "Rhythmboat Cruises",          "opening_hours" : {             "open_now" : false,             "weekday_text" : []          },          "photos" : [             {                "height" : 467,                "html_attributions" : [],                "photo_reference" : "CnRnAAAAI9D2hJs9G5DWGPwSYEf8mOdHW_ez4uQlMK0-6uEcTAiLXTPP9vwYygbtz81dQwlYA-_wZFnvBNBSWtz7Ch0t7QC4wlWUiZFgpN0fFc2Iu3XLPYy0wFU8HsgstC8JXoflanP5WXXzQx7jwPiWjKRiChIQmu49vX7bbUNlG4sxNLyuDBoUqqtdrfZQXGSOKK6ZG8_JuFlX8XQ",                "width" : 573             }          ],          "place_id" : "ChIJyWEHuEmuEmsRm9hTkapTCrk",          "reference" : "CnRmAAAAFYFcs9wM_brjtDo6eGfaziHFCRNi87w9lYQAjVP1XeXpgcM7Xd_kf8x5ua3pGkIWZzruJ6fno-nsA6IT3p8pKbW2psGJtRWw1VFAG6Q0kjvdWPHakvNAf2Vkt4pQUX_1WjV_zF5K6gPqfZaER1ZF_xIQQDinMAr0ECMU8IuQvlyjBRoUWrSCaUQsk7PykB2-72P2q4EfG9c",          "scope" : "GOOGLE",          "types" : [ "restaurant", "food", "establishment" ],          "vicinity" : "Pyrmont Bay Wharf (Near Australia Maritime Museum), Pyrmont, NSW 2009"       }    ],    "status" : "OK" }';


          var ApiKey = "AIzaSyAAQDBkknB7GXdWC0v9g-_01L3WfQADxvQ";
          var GoogleApiUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=";
          var ApiUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=cruise&key=AIzaSyAAQDBkknB7GXdWC0v9g-_01L3WfQADxvQ";



            $http.jsonp(ApiUrl).
                success(function(data, status, headers, config) {
                  console.log("sucess!");
                  console.log(data.results);
                }).
                error(function(data, status, headers, config) {
                  console.log("error !");
                });

        };
})();
