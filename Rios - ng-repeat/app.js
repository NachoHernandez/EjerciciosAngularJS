var riosApp = angular.module('riosApp',[])
riosApp.controller('riosCtrl',['$scope', function($scope)
{
    $scope.rios = [
    {nombre: "Ebro"},
    {nombre: "Tajo"},
    {nombre: "Duero"},
    {nombre: "Guadalquivir"},
    {nombre: "Segura"}]
    
    $scope.grabar = function(nuevo){
       $scope.rios.push({nombre: nuevo});    
       $scope.nuevo = "";                        
                               }
}


                               
])