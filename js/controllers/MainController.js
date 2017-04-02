/**
* Подключение контроллера к модулю "MYT".
* Работа со скоупом при помощи контроллера и модели.
* В данном случае работа с моделью производится внутри 
* контроллера. Сделано для более простого внесения изменений
* в модель.
*
* Переменная scope используется для хранения информации
* и последующего использования этой информации в контроллере.
*
* $scope передаёт объекты на VIEW (В объектах могут быть
* как свойства так и методы).
*/
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
/**
* Обработчик вызова функции addNote() путём клика
* по кнопке, к которой привязана директива
* ng-click="addNote()".
*
* При вызове функции добавить полученные от
* пользователя ( при помощи директивы ng-model )
* данные (noteTitle и noteText)
* в конец массива. При этом так же добавить в 
* массив текущую дату.
*
*/
  $scope.addNote = function(){
      $scope.notes.push({
          title: $scope.noteTitle,
          text: $scope.noteText,
          pubdate: date = new Date(),
         // pubday: day = date.getDay()
          
      });
      $scope.noteTitle = "";
      $scope.noteText = "";
  }
/**
* Обработчик вызова функции delNote() путём клика
* по кнопке, к которой привязана директива
* ng-click="delNote()".
*
* При вызове функции определить элемент массива,
* (элемент выражения $scope)на котором был 
* совершен клик. Удалить из массива элемент
* в позициии (index), которая была передана
* при помощи директивы ng-model 
*
*/
  $scope.delNote = function(index){
    $scope.notes.splice(index, 1);
  }
}]);