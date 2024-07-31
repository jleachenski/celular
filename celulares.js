const prompt = require("prompt-sync")();
const celulares = [];

const modelo = () => {
  const dono = prompt("Quem é o dono desse celular?");
  const modeloC = prompt("Qual o modelo?");
  const marca = prompt("Qual a marca deste celular?");
  const cpu = prompt("Qual a CPU?");
  const ram = prompt("Qual a quantidade de memória ram desse celular?");
  const memoria = +prompt("Qual a quantidade de armazenamento interno?");
  const camera = +prompt("Quantos megapixeis a camêra possuí?");

  if (
    dono != "" &&
    modeloC != "" &&
    marca != "" &&
    cpu != "" &&
    ram > 0 &&
    memoria > 0 &&
    camera > 0
  ) {
    return {dono, modeloC, marca, cpu, ram, memoria, camera};
  } else console.log("Inválido");
};

const criar = () => {
  const novo = modelo();

  if (novo) {
    celulares.push(novo);
    console.log("Celular adicionado com sucesso!");
  }
};

const listar = () => {
  if (celulares.length == 0) {
    console.log("Não há celulares disponíveis!");
  }
  celulares.forEach((el, i) => {
    console.log(`${i + 1}.
        Dono do Celular:${el.dono}
        Modelo:${el.modeloC}
        Marca:${el.marca}
        CPU:${el.cpu}
        RAM:${el.ram}
        Armazenamento:${el.memoria}
        Camera:${el.camera}
    `);
  });
};

const atualizar = () => {
    listar()

    const indice = prompt("Qual o indice que você deseja atualizar?") -1

    const novo = modelo()

    if (novo && indice >= 0 && indice < celulares.length) {
        celulares[indice] = novo
        console.log("Atualizado com sucesso!")
    }else
        console.log("Inválido")
}

const remover = () => {
    listar()

    const indice = prompt("Qual o indice que você deseja remover?") -1

    if(indice >= 0 && indice < celulares.length){
        celulares.splice(indice, 1)
        console.log("Celular removido com sucesso!")
    }else
        console.log("Inválido")
}

module.exports = {
    criar, remover, listar, atualizar
}