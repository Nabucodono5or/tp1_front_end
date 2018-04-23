(function () {
  function categoriaController(){
    this.categorias = ['Casa', 'Trabalho', 'Faculdade'];

    this.myFunction = () => {
      console.log("sucesso");
    }
  }

  categoriaController.$inject = [];
  angular.module('tp1')
  .controller('categoriaController', categoriaController)
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
});

})()
