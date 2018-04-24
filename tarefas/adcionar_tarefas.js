(function() {
  function tarefaController(entradaValida) {
    this.categorias = ['Casa', 'Trabalho', 'Faculdade'];
    this.entrada="";
    this.sucesso=false;
    this.erro = false;
    this.novaCategoria = "";

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


    // retorna um objeto tarefa para o array de tarefas ou formata as informações de entrada
    function criarTarefa(nome, categoria){
      this.nome = nome;
      this.ca = categoria;

      return { nome : this.nome, categoria: this.ca,  feito: false};
    }


    // trabalha na exibição da div
    this.clickSelecioneCategoria = false;

    // retorna a categoria retornada
    this.selecioneCategoria =  (item) => {
      this.clickSelecioneCategoria = false;
      this.novaCategoria = item;
      console.log(item);
    }

    // função para ação do enter
    this.condicaoParaMyFunction = () => {
      if(this.novaCategoria){
        this.myFunction();
      }
    }

    // função executada uma vez que a condição é aceita
    this.myFunction = () => {

      if(!entradaValida.padrao(this.entrada) || entradaValida.tarefaRepetida(this.entrada, this.tarefas)){
        console.log("erro");
        this.sucesso = false;
        this.erro = true;
      } else {
        this.sucesso = true;
        this.erro = false;

        let tempTarefa = criarTarefa(this.entrada, this.novaCategoria);
        this.tarefas.push(tempTarefa);

        console.log("sucesso");
      }
    }
  }

  tarefaController.$inject = ['entradaValida'];

  angular.module('tp1').controller('tarefaController', tarefaController);

})()
