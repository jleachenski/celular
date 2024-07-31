const prompt = require("prompt-sync")();

const { criar, listar, atualizar, remover } = require("./app.js");

while (true) {
  console.log(`
    1 - Adicionar celular
    2 - Listar celulares
    3 - Atualizar registro de celular
    4 - Remover celular
    5 - Sair`);

  const opcao = prompt();
  switch (opcao) {
    case "1":
      criar();
      break;
    case "2":
      listar();
      break;
    case "3":
      atualizar();
      break;
    case "4":
      remover();
      break;
    case "5":
      process.exit();
      break;

    default:
      console.log("Opção inválida.");
      break;
  }
}
