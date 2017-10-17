app.controller('EntrevistaCtrl', function($scope, $rootScope, $location, $http) {

   $rootScope.activetab = $location.path();

   $scope.entrevista = {}

   $scope.salvar = function() {
        $http.post('/api/entrevista', $scope.entrevista, {}).then(function(data) {
            $rootScope.addAlert('success', 'Anamnese salva com sucesso!');
        }, function() {
            $rootScope.addAlert('danger', 'Erro ao salvar a entrevista!');
        });
   }

});

app.controller('ConsultarEntrevistaCtrl', function($scope, $http) {
    $scope.entrevistas = [];


    $scope.pesquisar = function() {

        $http.get('/api/entrevista/search/findByNome?nome=' + encodeURIComponent($scope.findByNome)).then(function(resp) {
            $scope.entrevistas = resp.data._embedded.entrevista;
        }, function() {
            $scope.entrevistas = [];
        });
    }

    $scope.buscaCep = function() {
        $http.get('https://viacep.com.br/ws/' + $scope.entrevista.cep + '/json/unicode/').then(function(resp) {
            $scope.entrevista = resp.data;
        });
    }

});