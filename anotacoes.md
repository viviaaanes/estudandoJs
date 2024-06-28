# Sessão 2: Javascript básico para iniciantes.

### Console.log - A primeira coisa que você vai ver em JS:

`console.log()` é um comando utilizado em JavaScript para exibir mensagens no console do navegador ou no terminal (se estiver usando um ambiente de tempo de execução como Node.js). Ele é frequentemente usado para depuração, ajudando a entender o fluxo do programa e o estado das variáveis em diferentes pontos.

No ambiente Node.js, `console.log()` funciona da mesma maneira e é muito útil para depurar scripts do lado do servidor.

Existem outros métodos do objeto `console` que podem ser úteis, como `console.error()`, `console.warn()`, `console.table()`, e `console.dir()`, cada um com funcionalidades específicas.

É uma boa prática remover ou desativar `console.log()` em código de produção para evitar a exposição de informações sensíveis e melhorar o desempenho.

---

### Navegador vs Node (HTML + JavaScript):

**`Code Runner`** é uma extensão para Visual Studio Code que permite executar código diretamente do editor, sem precisar sair dele ou usar um terminal separado.

Embora o navegador e o Node.js utilizem a mesma engine para executar JavaScript, eles não possuem as mesmas funcionalidades e não se comportam da mesma maneira.
Apesar do JavaScript ser a linguagem usada tanto no navegador quanto no Node.js, as APIs disponíveis e os contextos de execução são muito diferentes. O navegador é orientado à interface do usuário e ao ambiente seguro da web, enquanto o Node.js é voltado para o backend, com acesso completo ao sistema de arquivos e funcionalidades de rede, tornando-o ideal para o desenvolvimento de servidores e aplicações de backend.

---

### Variáveis com let:

Variável é o conceito de salvar alguma coisa na memória em tempo de execução.

Com `let`, você cria uma variável que pode variar.

Eu posso declarar uma variável sem inicializá-la. Exemplo: `let nome;`. Aqui, estou informando ao motor do JavaScript que estou reservando o espaço para essa variável, mas ainda não defini um valor para ela. Caso eu faça um `console.log(nome);` não ocorrerá um erro; o valor retornado será `undefined` porque o motor do JavaScript entende que a variável existe, mas ainda não tem um valor definido.
Além disso, não posso redeclarar uma variável criada com `let` no mesmo escopo. Por exemplo, se eu tentar fazer `let nome; let nome;`, o JavaScript lançará um erro porque a variável `nome` já foi declarada anteriormente. 
No entanto, uma variável declarada com `let` pode ser inicializada quantas vezes for necessário. Por exemplo, posso fazer `nome = "Alice";` e depois `nome = "Bob";` sem problemas.

### Regras para Nomes de Variáveis:

- **Não podemos criar variáveis com palavras reservadas:** Palavras como `let`, `const`, `var`, `function`, entre outras, não podem ser usadas como nomes de variáveis.
- **Variáveis precisam ter nomes significativos:** Escolha nomes que descrevam claramente o que a variável representa.
- **Não pode começar o nome de uma variável com número:** Por exemplo, `let 1nome;` é inválido.
- **Não pode conter espaços ou traços:** Para nomes compostos, utilizamos `camelCase`, como `let nomeCompleto;`.
- **As variáveis são case sensitive:** Isso significa que letras maiúsculas e minúsculas importam, então `let Nome;` e `let nome;` são variáveis diferentes.

---

### Constantes com const.

Constante é uma variável que não muda. Em JavaScript, usamos `const` para declarar constantes. Uma vez que você define uma constante, não pode alterar seu valor. Por exemplo:

```javascript
const PI = 3.14;
PI = 3.15; // Isso causará um erro porque PI foi declarado como const
```

**Regra Importante:** Constantes precisam ser criadas e inicializadas ao mesmo tempo. Isso significa que você não pode declarar uma constante e deixar de inicializá-la na mesma linha.

### Atribuição de Valores:

Você pode atribuir o valor de uma variável ou constante a outra variável ou constante. Por exemplo:

```javascript
let valor1 = 10;
const PI = 3.14;

let valor2 = valor1; // valor2 agora é 10
const outroValor = PI; // outroValor agora é 3.14
```

### **Operadores Aritméticos:**

Os operadores aritméticos são utilizados para realizar operações matemáticas em JavaScript. Os principais operadores aritméticos são:

- **Adição (`+`)**: Soma dois valores.
- **Subtração (`-`)**: Subtrai o segundo valor do primeiro.
- **Multiplicação (`*`)**: Multiplica dois valores.
- **Divisão (`/`)**: Divide o primeiro valor pelo segundo.
- **Módulo (`%`)**: Retorna o resto da divisão do primeiro valor pelo segundo.

É uma boa prática evoluir o valor de uma variável ao invés de modificá-la diretamente, seguindo um fluxo de operações que utilizam o valor inicial e atualizam conforme necessário.

### ***Tipagem Dinâmica em JavaScript:***

JavaScript é uma linguagem de tipagem dinâmica, o que significa que o tipo de uma variável é determinado automaticamente quando um valor é atribuído a ela. Você pode descobrir o tipo de uma variável utilizando o operador `typeof`. Por exemplo:

```javascript
let idade = 30;
const nome = "Alice";

console.log(typeof idade); // Retorna 'number'
console.log(typeof nome); // Retorna 'string'
```
Isso permite que JavaScript seja flexível em lidar com diferentes tipos de dados sem a necessidade de declaração explícita de tipos.

Em JavaScript, o operador de adição (`+`) tem dois comportamentos principais, dependendo dos tipos dos operandos:

1. ***Adição Numérica:*** Quando ambos os operandos são do tipo numérico (por exemplo, `number`), o operador `+` realiza uma adição aritmética.

```javascript
let num1 = 5;
let num2 = 10;
let resultado = num1 + num2; // resultado será 15 (soma dos números)
```
1. ***Concatenação de Strings:*** Se um dos operandos (ou ambos) for do tipo `string`, o operador `+` realiza uma concatenação de strings. Nesse caso, o JavaScript converte automaticamente o outro operando para uma string antes de concatenar.

```javascript
let nome = "Alice";
let idade = 30;
let mensagem = nome + " tem " + idade + " anos."; // mensagem será "Alice tem 30 anos."
```
No exemplo acima, mesmo que `idade` seja do tipo `number`, ele é convertido automaticamente para uma string antes de ser concatenado com outras strings pelo operador `+`.

A flexibilidade do JavaScript é poderosa, mas é crucial entender o tratamento dos operandos para evitar surpresas, especialmente quando se trabalha com tipos mistos em expressões aritméticas e de string.

Template string é uma string onde você pode incluir variáveis utilizando `${}`.