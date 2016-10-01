var app = angular.module('itunes');
app.service('itunesService', function($http, $q){

    this.getArtist = function(artist){
        var deferred = $q.defer();
        $http({
            method: 'JSONP',
            url:'https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
        }).then(function(response){
        //   if (artist === undefined) {
        //   artist = 'I dont exist';
        // }
          var artistArray = [];
          console.log(response);
          var parsedResponse = response.data.results;
            for (var i = 0; i < parsedResponse.length; i++){
              if (parsedResponse[i]) {
                artistArray.push({
                  AlbumArt: parsedResponse[i].artworkUrl30,
                  Artist: parsedResponse[i].artistName,
                  SongName: parsedResponse[i].trackName,
                  Collection: parsedResponse[i].collectionName,
                  CollectionPrice: parsedResponse[i].collectionPrice,
                  Play: parsedResponse[i].previewUrl,
                  Type: parsedResponse[i].kind
                });
              }
          deferred.resolve(artistArray);
        }

    })
      return deferred.promise;
}
})
