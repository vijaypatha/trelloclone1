angular
.module('trello')
.controller('mainCtrl',function($scope,dataService){
  $scope.test = "HYDY";
  $scope.test2 = "get things done";

  $scope.getDataFromService = function(){
    dataService.getDataFromServer()

    .then(function(getDataFromResponse){
      $scope.dataView = getDataFromResponse;
      console.log(getDataFromResponse);
    });//. then promise from response

  };//getDataFromService function

  $scope.getDataFromService();

  //modifying data

  $scope.addTask = function(id, newTask) {
    dataService.addTask(id,newTask)
    .then(function(response){
      $scope.dataView[id].tasks.push(response.data);
    });
  };



});//mainCtrl
