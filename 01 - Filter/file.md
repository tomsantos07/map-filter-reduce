Por que usar as funções map, filter e reduce?
Basicamente, estas funções permitem manipular o array com um nível de complexidade consideravelmente menor.

FILTER 

Cria um novo array com todos os elementos que passaram no teste da função fornecida, sem modificar
o array anterior.

Array.prototype.filter()

let newArray = arr.filter(callback[, thisArg])

filter([hamburguer, pipoca, frango, batata-frita] isVeggie) => [pipoca, batata-frita]