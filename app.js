const prompt = require("prompt-sync")();

const celularesAdicionados = [];

const model = () => {
  const dono = prompt("Proprietário do celular: ");
  const modelo = prompt("Modelo: ");
  const marca = prompt("Marca: ");
  const cpu = prompt("Cpu: ");
  const ram = prompt("Ram: ");
  const memoria = prompt("Memória: ");
  const mpCamera = prompt("Mega pixels da câmera: ");


  if (
    dono != "" &&
    modelo != "" &&
    marca != "" &&
    cpu != "" &&
    ram > 0 &&
    memoria > 0 &&
    mpCamera > 0
  ) {
    return {
      dono,
      modelo,
      marca,
      cpu,
      ram,
      memoria,
      mpCamera,
    };
  }

  console.log("Dados inválidos.");
};

const criar = () => {
 const novo = model();

  if(novo) {
    celularesAdicionados.push(novo);
  }
  console.log("Celular adicionado com sucesso!");
};

const listar = () => {
  if (celularesAdicionados.length > 0) {
    console.log(celularesAdicionados);
  } else {
    console.log("Nenhum celular listado.");
  }
};

const atualizar = () => {
  listar();

  const indice = prompt("Qual índice deseja atualizar? ") - 1;

  const novo = model();
   
  if (novo && indice >= 0 && indice < celularesAdicionados.length) {
    celularesAdicionados[indice] = novo;
    console.log("Registro atualizado com sucesso!");
  } else {
    console.log("Índice inválido.");
  }
};

const remover = () => {
    listar() 

    const indice = prompt("Qual índice deseja remover? ") - 1

    if(indice >= 0 && indice < celularesAdicionados.length) {
        celularesAdicionados.splice(indice, 1)
        console.log("Registro removido com sucesso!")
    } else {
        console.log("Índice inválido. ")
    }
}

module.exports = {
    criar,
    atualizar,
    listar,
    remover,
  };