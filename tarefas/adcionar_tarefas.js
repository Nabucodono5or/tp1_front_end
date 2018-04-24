(function() {
  function tarefaController(entradaValida) {
    this.categorias = ['Casa', 'Trabalho', 'Faculdade'];

    this.tarefas = [{
        nome: 'Varrer o quarto',
        categoria: 'Casa',
        feito: false
      },
      {
        nome: 'Lavar a louça',
        categoria: 'Casa',
        feito: true
      },
      {
        nome: 'Lavar as roupas',
        categoria: 'Casa',
        feito: false
      },
      {
        nome: 'Consertar a porta',
        categoria: 'Casa',
        feito: false
      },
      {
        nome: 'Terminar o relatório',
        categoria: 'Trabalho',
        feito: false
      },
      {
        nome: 'Estudar para a próxima reunião',
        categoria: 'Trabalho',
        feito: false
      },
      {
        nome: 'Enviar email sobre o problema',
        categoria: 'Trabalho',
        feito: false
      },
      {
        nome: 'Levar pó de café',
        categoria: 'Trabalho',
        feito: true
      },
      {
        nome: 'Comprar canetas novas',
        categoria: 'Trabalho',
        feito: true
      },
      {
        nome: 'Estudar Etapa 1',
        categoria: 'Faculdade',
        feito: true
      },
      {
        nome: 'Estudar Etapa 2',
        categoria: 'Faculdade',
        feito: true
      },
      {
        nome: 'Estudar Etapa 3',
        categoria: 'Faculdade',
        feito: false
      },
      {
        nome: 'Fazer TP1',
        categoria: 'Faculdade',
        feito: false
      }
    ];

    this.entrada="";
    this.sucesso=false;
    this.erro = false;

    // Deve ser modificado para o contexto
    // 1. so deve adicionar se passa pelas restrições
    // 2. so deve ser adicionado se a categoria foi selecionada
    // Então devemos nos focar no efeito da categoria
    this.clickSelecioneCategoria = false;
    this.selecioneCategoria =  (item) => {
      this.clickSelecioneCategoria = false;
      console.log(item);
      //return item;
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

  tarefaController.$inject = ['entradaValida'];

  angular.module('tp1').controller('tarefaController', tarefaController);

})()
