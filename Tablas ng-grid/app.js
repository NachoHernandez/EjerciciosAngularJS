var app = angular.module('gridApp', ['ngGrid']);
app.controller('MyCtrl', function($scope){
    $scope.alumnos = [
    {nombre: "Javier Sanchez", edad: 19, nota: "Apto"},
    {nombre: "Lucia Hermosillo", edad: 18, nota: "Apto"},
    {nombre: "Vanesa Moreno", edad: 21, nota: "No Apto"},
    {nombre: "Pedro Del Amo", edad: 18, nota: "Apto"},
    {nombre: "Roberto Moreno", edad: 22, nota: "No Apto"},
    {nombre: "Sandra Lillo", edad: 20, nota: "Apto"},
    {nombre: "Maria del Mar Morcillo", edad: 23, nota: "Apto"},
    {nombre: "Luis Delgado", edad: 22, nota: "No Apto"},
    {nombre: "Jorge Ramón Tenza", edad: 24, nota: "Apto"},
    {nombre: "Rebeca Hernández", edad: 21, nota: "No Apto"},
    {nombre: "María Blascó Moreno", edad: 22, nota: "Apto"}];
    $scope.gridOptions = {
        data : 'alumnos',
        columnDefs: [{field: 'nombre', displayName: 'Nombre'}, {field: 'edad', displayName: 'Edad'},{field: 'nota', displayName: 'Nota'}],
        jqueryUITheme: true,
        enableCellSelection: true,
        enableRowSelection: false,
        enableCellEdit: true,
    };
});