app.controller('MainController', ['$scope', function($scope){
  $scope.title = 'Notebook';
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
}]);