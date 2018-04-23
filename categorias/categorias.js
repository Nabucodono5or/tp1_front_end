(function() {
  function categoriaController(entradaValida) {
    this.categorias = ['Casa', 'Trabalho', 'Faculdade'];
    this.entrada="";

    this.myFunction = () => {

      if(entradaValida.padrao(this.entrada) && entradaValida.repetido(this.entrada, this.categorias)){
        console.log("erro");
      } else {
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
        for (let i = 0; array.length; i++) {
          if(array[i] == valor){
            return false;
          }
        }
        return true;
      }

      this.padrao = function (valor) {
        return true;
      }

    });

})();
