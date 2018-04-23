(function() {
  function categoriaController() {
    this.categorias = ['Casa', 'Trabalho', 'Faculdade'];

    this.myFunction = () => {

      console.log("sucesso");

      /*
          let e = this.entrada;

          function entradaValida(){
            for (let i = 0; i < categorias.length; i++) {
              if(categorias[i] == e){
                return false;
              }
            }

            return true;
          }

      */
    }
  }

  categoriaController.$inject = [];
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

    });

})();
