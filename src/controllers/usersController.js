import {app} from '../app';
app.controller('usersController', [
  '$scope',
  '$http',
  ($scope, $http) => {
    $scope.users = [{name:'fake', description:'realy a fake one'}];
    $http.get('/users.json').then(xhr => {
      $scope.users = xhr.data;
    });
  }
]);
