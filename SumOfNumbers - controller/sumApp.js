sumApp = angular.module('sumApp',[]);
sumApp.controller('sumCtrl',['$scope',function($scope){

           $scope.sumar = function(num1, num2){

       
        $scope.total = $scope.num1 + $scope.num2;
        
       
           }
    
    $scope.reset = function(){
        $scope.num2 = " ";
        $scope.num1 = " ";
        $scope.total= " ";
    }
}]
                             )