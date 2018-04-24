(function() {
  function categoriaController(entradaValida) {
    this.categorias = ['Casa', 'Trabalho', 'Faculdade'];
    this.entrada="";
    this.sucesso=false;
    this.erro = false;

    this.myFunction = () => {

      if(!entradaValida.padrao(this.entrada) || entradaValida.repetido(this.entrada, this.categorias)){
        console.log("erro");
        this.sucesso = false;
        this.erro = true;
      } else {
        this.sucesso = true;
        this.erro = false;
        this.categorias.push(this.entrada);
        console.log("sucesso");
      }

    }
  }

  categoriaController.$inject = ['entradaValida'];
  angular.module('tp1')
    .controller('categoriaController', categoriaController);

})();


(function() {
  angular.module('tp1')
    .directive('dlEnterKey', function() {
      return function(scope, element, attrs) {

        element.bind("keydown keypress", function(event) {
          var keyCode = event.which || event.keyCode;

          if (keyCode === 13) {
            scope.$apply(function() {
              scope.$eval(attrs.dlEnterKey);
            });

            event.preventDefault();
          }
        });
      };
    })
    .service('entradaValida', function() {
      this.repetido = function (valor, array) {
        for (let i = 0; i < array.length; i++) {
          if(array[i].toLowerCase() === valor.toLowerCase()){
            return true;
          }
        }
        return false;
      }

      this.padrao = function (valor) {
        if(valor.length === 0 || !valor.trim() || eNumero(valor)){
          return false;
        }
        return true;
      }

      function eNumero(valor) {
        if(parseInt(valor)){
          return true;
        }

        return false;
      }

    });

})();
