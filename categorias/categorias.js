(function () {
  function categoriaController(){
    this.categorias = ['Casa', 'Trabalho', 'Faculdade'];
  }

  categoriaController.$inject = [];
  angular.module('tp1').controller('categoriaController', categoriaController);
})()
