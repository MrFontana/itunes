var app = angular.module('itunes');
app.controller('mainCtrl', function($scope, itunesService){

  $scope.gridOptions = {
      data: 'songData',
      height: '110px',
      sortInfo: {fields: ['Song', 'Artist', 'Collection', 'Type'], directions: ['asc']},
      columnDefs: [
        {field: 'Play', displayName: 'Play', width: '40px', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><a href="{{row.getProperty(col.field)}}"><img src="http://www.icty.org/x/image/Miscellaneous/play_icon30x30.png"></a></div>'},
        {field: 'Artist', displayName: 'Artist'},
        {field: 'Collection', displayName: 'Collection'},
        {field: 'AlbumArt', displayName: 'Album Art', width: '110px', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><img src="{{row.getProperty(col.field)}}"></div>'},
        {field: 'Type', displayName: 'Type'},
        {field: 'CollectionPrice', displayName: 'Collection Price'},
      ]
  };

  $scope.getSongData = function(){
  itunesService.getArtist($scope.artist).then(function(response){
       $scope.songData = response;
       console.log($scope.songData);
  });
  };
    //If everything worked you should see a huge array of objects inside your console. That's great! But unfortunately that's not what ng-grid is expecting. What you need to do now
    //is sort the data you got back to be an object in the following format.
    // AlbumArt: "http://a3.mzstatic.com/us/r30/Features4/v4/22/be/30/22be305b-d988-4525-453c-7203af1dc5a3/dj.srlprmuo.100x100-75.jpg",
    //     Artist: "Nelly",
    //     Collection: "Nellyville",
    //     CollectionPrice: 11.99,
    //     Play: "http://a423.phobos.apple.com/us/r1000/013/Music4/v4/4a/ab/7c/4aab7ce2-9a72-aa07-ac6b-2011b86b0042/mzaf_6553745548541009508.plus.aac.p.m4a",
    //     Type: "song"
    //the iTunes API is going to give you a lot more details than ng-grid wants. Create a new array and then loop
    //through the iTunes data pushing into your new array objects that look like the above data.
  //Once you have that final data array, you simply need to put it on the scope
  // (or more specifically on the scope as songData). Once you do this
  //($scope.songData = myFinalArray) then ng-grid will see that and populate
  //the page.
    //Code here
});
