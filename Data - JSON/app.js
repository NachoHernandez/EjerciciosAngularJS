angular.module('dataApp',['ngGrid'])

.controller('MyCtrl', function($scope, $http) {
   $http.get('http://localhost:8080/pueblos.json').success(function(data){
  $scope.pueblos = data;
    })
 $scope.gridOptions = { 
    data: 'pueblos',
    showGroupPanel: true,
    enableCellSelection: true,
    enableRowSelection: false,
    enableCellEdit: true,
    columnDefs: [
        {field:'nombre', displayName:'Nombre'}, 
        {field:'poblacion', displayName:'Poblacion'}] 
        
};
});
