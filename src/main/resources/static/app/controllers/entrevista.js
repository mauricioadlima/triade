app.controller('EntrevistaCtrl', function($scope, $rootScope, $location, $http, $window) {

   $rootScope.activetab = $location.path();

   $scope.entrevista = {};

   $scope.entrevistas = [];

   $scope.possiveisGeneros = [
       {'value': 1, 'label': 'Masculino'},
       {'value': 2, 'label': 'Feminino'},
       {'value': 3, 'label': 'Outros'}
   ];

   $scope.possiveisEstadosCivis = [
       {'value': 1, 'label': 'Solteiro(a)'},
       {'value': 2, 'label': 'Casado(a)'},
       {'value': 3, 'label': 'Viuvo(a)'},
       {'value': 4, 'label': 'Divorciado(a)'},
       {'value': 5, 'label': 'União Estável'}
   ];

   $scope.possiveisEscolaridades = [
       {'value': 1, 'label': 'Ensino Fundamental Incompleto'},
       {'value': 2, 'label': 'Ensino Fundamental Completo'},
       {'value': 3, 'label': 'Ensino Médio Incompleto'},
       {'value': 4, 'label': 'Ensino Médio Completo'},
       {'value': 5, 'label': 'Ensino Superior Incompleto'},
       {'value': 6, 'label': 'Ensino Superior Completo'}
   ];

   $scope.possiveisDeficiencias = [
      {'value': 1, 'label': 'Física'},
      {'value': 2, 'label': 'Visual'},
      {'value': 3, 'label': 'Auditiva'},
      {'value': 4, 'label': 'Não Possui'},
      {'value': 5, 'label': 'Outras'}
   ];

   $scope.possiveisDoencas = [
      {'value': 1, 'label': 'Cardíacas'},
      {'value': 2, 'label': 'Câncer'},
      {'value': 3, 'label': 'Hipertensão'},
      {'value': 4, 'label': 'Diabetes'},
      {'value': 5, 'label': 'Epilepsia'},
      {'value': 6, 'label': 'Tontura'},
      {'value': 7, 'label': 'Quedas repentinas'},
      {'value': 8, 'label': 'Câimbra'},
      {'value': 9, 'label': 'Não possui'},
      {'value': 10, 'label': 'Outras'}
    ];

   $scope.possiveisProblemasPsicologicos = [
      {'value': 1, 'label': 'Irritabilidade Excessiva'},
      {'value': 2, 'label': 'Ansiedade'},
      {'value': 3, 'label': 'Agressividade'},
      {'value': 4, 'label': 'Depressão'},
      {'value': 5, 'label': 'Insônia'},
      {'value': 6, 'label': 'Dificuldades de Memória'},
      {'value': 6, 'label': 'Dificuldades de Atenção'},
      {'value': 6, 'label': 'Não possui'},
      {'value': 6, 'label': 'Outros'}
   ];

   $scope.estados = [
      {'value': 'AC', 'label' : 'Acre'},
      {'value': 'AL', 'label' : 'Alagoas'},
      {'value': 'AP', 'label' : 'Amapá'},
      {'value': 'AM', 'label' : 'Amazonas'},
      {'value': 'BA', 'label' : 'Bahia'},
      {'value': 'CE', 'label' : 'Ceará'},
      {'value': 'DF', 'label' : 'Distrito Federal'},
      {'value': 'ES', 'label' : 'Espirito Santo'},
      {'value': 'GO', 'label' : 'Goiás'},
      {'value': 'MA', 'label' : 'Maranhão'},
      {'value': 'MT', 'label' : 'Mato Grosso'},
      {'value': 'MS', 'label' : 'Mato Grosso do Sul'},
      {'value': 'MG', 'label' : 'Minas Gerais'},
      {'value': 'PA', 'label' : 'Pará'},
      {'value': 'PB', 'label' : 'Paraíba'},
      {'value': 'PR', 'label' : 'Paraná'},
      {'value': 'PE', 'label' : 'Pernambuco'},
      {'value': 'PI', 'label' : 'Piauí'},
      {'value': 'RJ', 'label' : 'Rio de Janeiro'},
      {'value': 'RN', 'label' : 'Rio Grande do Norte'},
      {'value': 'RS', 'label' : 'Rio Grande do Sul'},
      {'value': 'RO', 'label' : 'Rondônia'},
      {'value': 'RR', 'label' : 'Roraima'},
      {'value': 'SC', 'label' : 'Santa Catarina'},
      {'value': 'SP', 'label' : 'São Paulo'},
      {'value': 'SE', 'label' : 'Sergipe'},
      {'value': 'TO', 'label' : 'Tocantins'}
   ];

   $scope.salvar = function() {
        $http.post('/api/entrevista', $scope.entrevista, {}).then(function(data) {
            $rootScope.addAlert('success', 'Entrevista salva com sucesso!');
        }, function() {
            $rootScope.addAlert('danger', 'Erro ao salvar a entrevista!');
        });
        $window.scrollTo(0, 0);
   }

   $scope.pesquisar = function() {
       $http.get('/api/entrevista/search/findByNome?nome=' + encodeURIComponent($scope.findByNome)).then(function(resp) {
           $scope.entrevistas = resp.data._embedded.entrevista;
       }, function() {
           $scope.entrevistas = [];
       });
   }

   $scope.buscarCep = function() {
       $http.get('https://viacep.com.br/ws/' + $scope.entrevista.cep + '/json/unicode/').then(function(resp) {
           resp.data.estado = resp.data.uf;
           resp.data.cidade = resp.data.localidade;
           angular.merge($scope.entrevista, resp.data);
       });
   }

});
