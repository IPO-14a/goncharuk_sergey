app.controller('MainController', ['$scope', function($scope){
  $scope.title = 'Notebook';
  $scope.describe = 'Notebook contains notes that user filled';
  $scope.notes = [ 
  { 
    title: 'Japan',  
    pubdate: new Date('2017', '03', '01'), 
    text: 'I`ve become the greatest gaijin in Japan!' 
  }, 
  { 
    title: 'Web developer',  
    pubdate: new Date('2017', '02', '30'), 
    text: 'Web - developement is very huge area!'  
  } 
];
  $scope.addNote = function(){
      $scope.notes.push({
          title: $scope.noteTitle,
          text: $scope.noteText,
          pubdate: date = new Date(),
          pubday: day = date.getDay()
          
      });
      $scope.noteTitle = "";
      $scope.noteText = "";
  }
  $scope.delNote = function(index){
    $scope.notes.splice(index, 1);
  }
}]);