const prompt = require("prompt-sync")();
const { criar, listar, atualizar, remover } = require("./celulares");

while (1) {
  console.log(`
    1- Criar Celular
    2- Listar Celulares
    3- Atualizar celular
    4- Remover
    5- Sair
`);

  const opcao = +prompt();

  switch (opcao) {
    case 1:
      criar();
      break;

    case 2:
      listar();
      break;

    case 3:
      atualizar();
      break;

    case 4:
      remover();
      break;

    case 5:
      process.exit();
      break;

    default:
      console.log("Opção inválida");
      break;
  }
}
