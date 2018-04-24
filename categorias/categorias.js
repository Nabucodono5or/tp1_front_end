(function() {
  function categoriaController(entradaValida) {
    this.categorias = ['Casa', 'Trabalho', 'Faculdade'];
    this.entrada="";
    this.sucesso=false;
    this.erro = false;

    this.limpar =  () => {
      this.entrada = "";
    }

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
