angular
.module('trello')
.service('dataService',function($http){
  //fetch data`
  this.getDataFromServer = function(){
    return $http.get('/api/data')

    .then(function(response){
      console.log(response);
      return response.data;
    });//response function

  };//getDataFromServer function

  //modify data by adding

  this.addTask = function(id, newTask){
    return $http.put('/api/data/' + id, {text: newTask});
  };







});
