let nome = "Viviane";
let sobrenome = "Oliveira";
let idade = 26;
let anoNascimento = 2024 - idade;
let altura = 1.64;
let peso = 64.5;
let imc = peso / (altura * altura);

//console.log("meu nome é:", nome, sobrenome, "eu tenho", idade, "anos. Nasci em:", anoNascimento,".",
//"Minha altura é:", altura, "e o meu peso é:", peso, "portanto o meu IMC é:", imc.toFixed(2),".")

console.log(`Meu nome é: ${nome} ${sobrenome}, eu tenho ${idade} anos. Nasci em: ${anoNascimento}.
Minha altura é: ${altura} e o meu peso é: ${peso}kg. Portanto o meu IMC é: ${imc.toFixed(
  2
)}`);
