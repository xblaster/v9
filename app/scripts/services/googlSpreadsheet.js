'use strict';

angular.module('v9App')
  .service('GooglSpreadsheet', function GooglSpreadsheet($http, $q) {
       var fetchData = function () {


           var url = "https://spreadsheets.google.com/feeds/list/1CEbHKEYOVoK85b0lpCvDDGu0heWyWV4nWylNN8iCmRE/1/public/values?alt=json-in-script&callback=googlSpre";
           var pa = [];
           var paPromise = $q.defer();

           $http({
               method: 'JSONP',
               url: url
           })

           window.googlSpre = function(data) {


               for (var i = 0; i < data.feed.entry.length; i++) {
                   var entry = data.feed.entry[i];

                   var obj = {};
                   obj.link = entry.gsx$link.$t;
                   obj.description = entry.gsx$description.$t;
                   obj.category = entry.gsx$category.$t;
                   obj.name = entry.gsx$name.$t;
                   obj.date = entry.gsx$date.$t;
                   obj.momentDate = moment(obj.date, "DD/MM/YYYY");
                   obj.unixDate = moment(obj.date, "DD/MM/YYYY").valueOf();
                   obj.tags = entry.gsx$tags.$t.split(",");

                   pa.push(obj);

                   //console.log(pa); //[10,20,30,40,50]
               }
               paPromise.resolve(pa)
           }



           return paPromise.promise;
        }

       return {
           'get': fetchData
       }

  });
